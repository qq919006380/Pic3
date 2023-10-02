import { NFTStorage } from 'nft.storage';

export const createNFTStorageConnector = (options) => {
  const { token } = options;
  const client = new NFTStorage({ token });
  return {
    postImage: async (image: { data: Blob; type: 'image/png' | 'image/jpeg' | 'image/jpg' | 'image/gif' }) => {
      const { type, data: imageData } = image;
      const cid = await client.storeBlob(imageData);
      await client.check(cid);

      return { cid, url: `https://nftstorage.link/ipfs/${cid}` };
    },
  };
};
