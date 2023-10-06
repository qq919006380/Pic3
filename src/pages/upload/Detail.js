import { useState, useEffect } from "react";
import { ABI } from "../../config/constant";
import WriteButton from "../../components/button/WriteButton";
import Table from "@/components/Table";
import { xorEncrypt } from "@/utils/tools";
const key = "pic3-91900";
const TableComponent = ({ cid, name, loading, curBlobUrl }) => {
   
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
                args={[[cid && xorEncrypt(cid, key,true)], [name]]}
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
          <Table cid={cid} name={name} loading={loading}></Table>
        </div>
      </div>
    </div>
  );
};
export default TableComponent;
