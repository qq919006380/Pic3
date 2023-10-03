import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import gatewayList from "../../config/gatewayList";
import { copyText } from "../../utils/tools";
import { Dna } from "react-loader-spinner";
import { ABI } from "../../config/constant";
import WriteButton from "../../components/button/WriteButton";
import styled from "styled-components";

const SpanWarp = styled.span`
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto; /* 如果需要，可以启用连字符号断字 */
  white-space: normal;
`;
const TableComponent = ({ cid, url, filename, loading, curBlobUrl }) => {
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
    <div className="w-full">
      <div className="text-lg font-semibold mb-2 text-center my-10 space-x-3">
        <span className="space-x-1">
          <span>CID:</span>
          {cid ? (
            <span className="space-x-3">
              <span>{cid}</span>
              <WriteButton
                abi={ABI}
                functionName={"addImages"}
                args={[[cid || "null"], [filename || "null"]]}
                value={"0"}
              >
                <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Store on the blockchain
                </span>
              </WriteButton>
            </span>
          ) : (
            <span className="text-gray-400 mx-2">No Data</span>
          )}
        </span>
      </div>
      {/* 左右布局 左边预览图右边表格 */}
      <div className=" flex space-x-4">
        <div className="w-2/5">
          <div className="border-dashed border-2 border-gray-300 p-4 rounded-lg text-center h-full">
            <div className=" font-bold text-left">Preview</div>
            {cid ? (
              <img
                className="w-4/5 h-full mx-auto  object-contain inline-block"
                src={curBlobUrl[0]}
                alt="preview"
              />
            ) : (
              <div className="w-4/5 flex justify-center items-center h-full text-gray-500">
                please upload image
              </div>
            )}
          </div>
        </div>
        <div className="w-3/5 ">
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
                          onClick={() =>
                            copyUrl(`[${filename}](${getterIpfs()})`)
                          }
                        >
                          {cid && `[${filename}](${getterIpfs()})`}
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
                              `<a href="${getterIpfs()}"><img src="${getterIpfs()}" alt="${filename}" border="0" /></a>`
                            )
                          }
                        >
                          {cid &&
                            `<a href="${getterIpfs()}"><img src="${getterIpfs()}" alt="${filename}" border="0" /></a>`}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableComponent;
