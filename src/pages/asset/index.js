// pages/AssetPage.js
import { useContractRead, useAccount } from "wagmi";
import { ABI, DEFAULT_CONTRACT_ADDRESS } from "../../config/constant";

import React from "react";
import { useEffect, useState } from "react";

const AssetPage = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { data, isError, isLoading } = useContractRead({
    address: DEFAULT_CONTRACT_ADDRESS,
    abi: ABI,
    functionName: "walletOfOwner",
    args: [address],
  });
  const [nftIds, setNftIds] = useState( []);


  useEffect(() => {
    setNftIds(data || []);
  }, [address]);
  
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-semibold">NFT Title</h1>
          <p className="text-gray-600">NFT Description</p>
          <div className="mt-4">
            nft:
            {nftIds.map((item) => (
              <li key={item}>{item.toString()}</li>
            ))}
          </div>
          <div className="mt-8">
            {/* 显示其他 NFT 信息 */}
            <p className="text-lg">Token ID: 1</p>
            {/* 添加更多 NFT 信息的显示 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetPage;
