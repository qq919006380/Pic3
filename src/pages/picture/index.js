// pages/AssetPage.js
import { useContractRead, useAccount } from "wagmi";
import { ABI, DEFAULT_CONTRACT_ADDRESS } from "../../config/constant";

import React from "react";
import { useEffect, useState } from "react";

const PicturePage = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { data, isError, isLoading } = useContractRead({
    address: DEFAULT_CONTRACT_ADDRESS,
    abi: ABI,
    functionName: "walletOfOwner",
    args: [address],
  });
  const [nftIds, setNftIds] = useState([]);

  useEffect(() => {
    setNftIds(data || []);
  }, [address]);

  return (
    <div className="container mx-auto">
      {/* title */}
      <p className="text-lg font-semibold mb-2 text-center my-10">
        <span>My Picture</span>
      </p>
      <div className=" flex space-x-4">
        <div className="w-1/2">
          <div className="border-dashed border-2 border-gray-300 p-4 rounded-lg text-center h-full">
            <div className=" font-bold text-left">Browser Cache</div>
            s
          </div>
        </div>
        <div className="w-1/2 ">
          <div
            className={`border-dashed w-full border-2 border-gray-300 p-4 rounded-lg text-center h-full ${
              isLoading ? "bg-gray-200" : ""
            }`}
          >
            <div className=" font-bold text-left">Blockchain</div>
            asd
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicturePage;
