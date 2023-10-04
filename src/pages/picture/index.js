// pages/AssetPage.js
import { useContractRead, useAccount } from "wagmi";
import useLocalStorage from "use-local-storage-state";
import { ABI, DEFAULT_CONTRACT_ADDRESS } from "@/config/constant";
import { useEffect, useState } from "react";
import { copyText, transformString } from "@/utils/tools";
import { useSnackbar } from "notistack";
import WriteButton from "@/components/button/WriteButton";
import Table from "@/components/Table";

import Modal from "react-modal";

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

  useEffect(() => {
    setImgCache((prevCache) =>
      prevCache.map((item) => {
        return { ...item, isLoading: true };
      })
    );
    setBlockData((prevCache) =>
      prevCache.map((item) => {
        return { ...item, isLoading: true };
      })
    );
  }, []);

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
              <div className="text-xs font-light ">
                This image is stored in your browser's cache. If you clear your
                browser cache, it will be lost.
              </div>
            </div>
            <ImgBox list={imgCache} setFunc={setImgCache}></ImgBox>
            <div className="text-right mt-8 space-x-3">
              <div className="inline-block rounded border-2 px-2 border-black cursor-pointer hover:border-gray-400 text-red-400">
                Delete Selected
              </div>

              <WriteButton
                abi={ABI}
                functionName={"addImages"}
                args={[
                  imgCache?.map((v) => v.cid),
                  imgCache?.map((v) => v.cid),
                ]}
                value={"0"}
              >
                <div className="inline-block rounded border-2 px-2 border-black cursor-pointer hover:border-gray-400 text-b50">
                  Store on the blockchain →
                </div>
              </WriteButton>
            </div>
          </div>
        </div>
        <div className="w-1/2 ">
          <div
            className={`border-dashed w-full border-2 border-gray-300 p-4 rounded-lg text-left h-full  `}
          >
            <div className=" font-bold ">
              <span>Blockchain</span>
              <div className="text-xs font-light ">
                This image is stored on the blockchain, ensuring permanent
                preservation and no risk of loss.
              </div>
            </div>
            <ImgBox list={blockData} setFunc={setBlockData}></ImgBox>
            <div className="text-right mt-8 space-x-3">
              <div className="inline-block rounded border-2 px-2 border-black cursor-pointer hover:border-gray-400 text-red-400">
                Delete Selected
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const customStyles = {
  content: {
    width: "80%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("body");

const ImgBox = ({ list, setFunc }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectImg, setselectImg] = useState({ cid: "", name: "" });
  function openModal(item) {
    setIsOpen(true);
    setselectImg(item);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      {list?.length > 0 ? (
        <div className="grid grid-cols-5 gap-2">
          {list.map((v, i) => (
            <div key={v.cid + i}>
              <div className="relative group shadow">
                <div className="absolute opacity-0 group-hover:opacity-100 bg-white bg-opacity-40 h-full transition duration-300  w-full  ">
                  <i
                    onClick={async () => {
                      let flag = await copyText(v.cid);
                      if (flag) {
                        enqueueSnackbar("Copy success", {
                          variant: "success",
                        });
                      } else {
                        enqueueSnackbar("Copy fail", {
                          variant: "error",
                        });
                      }
                    }}
                    title="copy cid"
                    className="absolute right-1 top-1 iconfont icon-fuzhi text-gray-800 font-medium cursor-pointer"
                  ></i>
                  <i
                    title="copy cid"
                    className="absolute right-8 top-1 iconfont icon-photo text-gray-800 font-medium cursor-pointer"
                    onClick={() => {
                      openModal(v);
                    }}
                  ></i>
                  <div className=" break-all absolute left-1 text-gray-700 bottom-1  text-xs w-full  ">
                    {transformString(v.cid)}
                  </div>
                </div>
                <div
                  className={`group-hover:opacity-100  absolute bottom-1 right-1 border-2 w-4 h-4 border-gray-500 rounded cursor-pointer ${
                    v.select ? "border-opacity-30" : "opacity-0"
                  }`}
                  onClick={() => {
                    setFunc((prevCache) =>
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
                    <i className="iconfont   icon-xuanzhong1-copy text-xl absolute -top-2   -left-1 text-green-500"></i>
                  )}
                </div>

                <div className="text-center">
                  {v.isLoading && (
                    <div
                      className={`  bg-gray-200 animate-pulse text-center inline-block rounded  my-3 text-gray-300 text-5xl iconfont icon-tuwen ${
                        v.isLoading ? "visible" : "hidden"
                      }`}
                    >
                      {" "}
                    </div>
                  )}
                  <img
                    className=" visible w-full mr-2 inline-block"
                    src={`https://ipfs.io/ipfs/${v.cid}`}
                    alt=""
                    onLoad={(onLoad) => {
                      setFunc((prevCache) =>
                        prevCache.map((item) => {
                          if (item.cid === v.cid) {
                            return { ...item, isLoading: false };
                          }
                          return item;
                        })
                      );
                    }}
                  />
                </div>
              </div>
              <div className="text-blue-500 mt-2 text-xs font-mono text-left break-all">
                {!v.isLoading && v.name}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-3">No Data</div>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className=" flex mb-4 justify-between cursor-pointer hover:opacity-50">
          <div className="text-lg font-semibold     ">
            <span>Detail</span>
          </div>
          <div
            onClick={closeModal}
            className="iconfont icon-remove1  "
          ></div>
        </div>

        <Table
          cid={selectImg.cid}
          name={selectImg.name}
          loading={false}
        ></Table>
      </Modal>
    </div>
  );
};

const isBrowser = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

const Lazy = ({ children }) => {
  if (isBrowser) {
    console.log("Lazy");
    return (
      <LazyLoad
        placeholder={<div>Loading...</div>}
        height={200}
        once
        className="w-full mr-2 inline-block"
      >
        {children}
      </LazyLoad>
    );
  } else {
    return <div> asd{children}</div>;
  }
};
export default PicturePage;
