import { useState, useEffect } from "react";
import gatewayList from "@/config/gatewayList";
import { copyText } from "@/utils/tools";
import { Dna } from "react-loader-spinner";
import { useSnackbar } from "notistack";

const TableComponent = ({ cid, name, loading }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [gatewayType, setGatewayType] = useState("ipfs.io");
  const getterIpfs = () => {
    return gatewayList.find((v) => v.name === gatewayType)?.url + cid;
  };
  const copyUrl = async (text) => {
    let flag = await copyText(text);
    if (flag) {
      enqueueSnackbar("Copy success", { variant: "success" });
    } else {
      enqueueSnackbar("Copy fail", { variant: "error" });
    }
  };
  return (
    <div
      className={`border-dashed w-full border-2 border-gray-300 p-4 rounded-lg text-center h-full ${
        loading ? "bg-gray-200" : ""
      }`}
    >
      <div className="text-left   py-2">
        <span className="mx-2 font-bold"> Gateway Type:</span>
        <select
          className="border-2 border-gray-300 rounded-lg"
          value={gatewayType}
          onChange={(e) => setGatewayType(e.target.value)}
        >
          {gatewayList.map((gateway) => (
            <option key={gateway.name} value={gateway.name}>
              {gateway.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full">
        {loading ? (
          <div className="flex w-full justify-center items-center min-h-[370px]">
            <Dna
              visible={loading}
              height="100"
              width="100"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper opacity-50"
            />
          </div>
        ) : (
          <table
            className="w-full table-auto   "
            style={{ tableLayout: "fixed" }}
          >
            <thead>
              <tr>
                <th className="px-4 py-2">TYPE</th>
                <th className="px-4 py-2">URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Ipfs</td>
                <td className="border px-4 py-2 break-all text-left">
                  <span
                    className="text-blue-500 cursor-pointer hover:opacity-80    break-all"
                    onClick={() => copyUrl(`ipfs://${cid}`)}
                  >
                    {cid && `ipfs://${cid}`}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Gateway</td>
                <td className="border px-4 py-2 break-all text-left">
                  <span
                    className="text-blue-500 cursor-pointer hover:opacity-80    break-all"
                    onClick={() => copyUrl(getterIpfs())}
                  >
                    {cid && getterIpfs()}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Markdown</td>
                <td className="border px-4 py-2 text-left">
                  <span
                    className="text-blue-500 cursor-pointer hover:opacity-80    break-all"
                    onClick={() => copyUrl(`[${name}](${getterIpfs()})`)}
                  >
                    {cid && `[${name}](${getterIpfs()})`}
                  </span>
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">HTML</td>
                <td className="border px-4 py-2 text-left">
                  <span
                    className="text-blue-500 cursor-pointer hover:opacity-80    break-all"
                    onClick={() =>
                      copyUrl(
                        `<a href="${getterIpfs()}"><img src="${getterIpfs()}" alt="${name}" border="0" /></a>`
                      )
                    }
                  >
                    {cid &&
                      `<a href="${getterIpfs()}"><img src="${getterIpfs()}" alt="${name}" border="0" /></a>`}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
export default TableComponent;
