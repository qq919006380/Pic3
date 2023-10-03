// pages/AssetPage.js
import { useContractRead, useAccount } from "wagmi";
import useLocalStorage from "use-local-storage-state";
import { ABI, DEFAULT_CONTRACT_ADDRESS } from "../../config/constant";
import { useEffect, useState } from "react";

// removeImages
const PicturePage = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [blockData, setBlockData] = useState([]);
  const [imgCache, setImgCache] = useLocalStorage("imgCache", []);

  const {
    data: resBlockData,
    isError,
    isLoading,
    refetch,
  } = useContractRead({
    address: DEFAULT_CONTRACT_ADDRESS,
    abi: ABI,
    functionName: "getUserImages",
    args: [address],
  });

  useEffect(() => {
    if (resBlockData) {
      setBlockData(resBlockData);
    }
  }, [resBlockData, address]);

  return (
    <div className="container mx-auto">
      <div className="text-lg font-semibold mb-2 text-center my-10">
        <span>My Picture</span>
      </div>
      <div className=" flex space-x-4">
        <div className="w-1/2">
          <div className="border-dashed border-2 border-gray-300 p-4 rounded-lg text-left h-full">
            <div className=" font-bold ">
              <span>Browser Cache </span>
              <span className="text-xs font-light ">
                This image is stored in your browser's cache. If you clear your
                browser cache, it will be lost.
              </span>
            </div>

            {imgCache?.length > 0 ? (
              <div className="grid grid-cols-5 gap-2">
                {imgCache.map((v,i) => (
                  <div key={v.cid+i}>
                    <div className="relative group shadow">
                      <div className="absolute opacity-0 group-hover:opacity-100 bg-white bg-opacity-40 h-full transition duration-300  w-full  ">
                        <i
                          title="copy cid"
                          className="absolute right-1 top-1 iconfont icon-fuzhi text-gray-800 font-medium cursor-pointer"
                        ></i>
                      </div>
                      <div
                        className={`group-hover:opacity-100  absolute bottom-1 right-1 border-2 w-4 h-4 border-gray-500 rounded cursor-pointer ${
                          v.select ? "opacity-50" : "opacity-0"
                        }`}
                        onClick={() => {
                          setImgCache((prevCache) =>
                            prevCache.map((item) => {
                              if (item.cid === v.cid) {
                                return { ...item, select: !item.select };
                              }
                              return item;
                            })
                          );
                        }}
                      >
                        {v.select && (
                          <i className="iconfont icon-xuanzhong1-copy text-xl absolute -top-2   -left-1 text-green-500"></i>
                        )}
                      </div>
                      <img
                        className=" w-full mr-2 inline-block  "
                        src={`https://ipfs.io/ipfs/${v.cid}`}
                        alt=""
                      />
                    </div>
                    <div className="text-blue-500 text-xs font-mono text-left break-all">
                      {v.filename}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-3">No Data</div>
            )}
            <div className="text-right mt-8 space-x-3">
              <div className="inline-block rounded border-2 px-2 border-black cursor-pointer hover:border-gray-400 text-red-400">
                Delete Selected
              </div>
              <div className="inline-block rounded border-2 px-2 border-black cursor-pointer hover:border-gray-400 text-b50">
                Upload Blockchain
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 ">
          <div
            className={`border-dashed w-full border-2 border-gray-300 p-4 rounded-lg text-left h-full  `}
          >
            <div className=" font-bold ">
              <span>Blockchain</span>
              <span className="text-xs font-light ">
                This image is stored on the blockchain, ensuring permanent
                preservation and no risk of loss.
              </span>
            </div>

            {blockData.length > 0 ? (
              <div className="grid grid-cols-5 gap-2">
                {blockData.map((v) => (
                  <div key={v.cid}>
                    <div className="relative group shadow">
                      <div className="absolute opacity-0 group-hover:opacity-100 bg-white bg-opacity-40 h-full transition duration-300  w-full  ">
                        <div className="flex justify-between">
                          <i
                            title="remove"
                            className="iconfont icon-remove text-gray-800 font-medium cursor-pointer inline-block"
                          ></i>
                          <i
                            title="copy cid"
                            className="iconfont icon-fuzhi text-gray-800 font-medium cursor-pointer"
                          ></i>
                        </div>
                      </div>
                      <img
                        className=" w-full mr-2 inline-block  "
                        src={`https://ipfs.io/ipfs/${v.cid}`}
                        alt=""
                      />
                    </div>
                    <div className="text-blue-500 text-sm font-mono text-center">
                      {v.name}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-3">No Data</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicturePage;
