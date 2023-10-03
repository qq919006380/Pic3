import Table from "./Table";

import { createNFTStorageConnector } from "../../utils/uploader-connector/NFT.storage";
import useLocalStorage from "use-local-storage-state";
import { useState, useEffect } from "react";

const token = process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN;
const connector = createNFTStorageConnector({ token });

const MintPage = (props) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imgCache, setImgCache] = useLocalStorage("imgCache", []);
  const [curBlobUrl, setCurBlobUrl] = useState([]);
  const [cidInfo, setCidInfo] = useState({
    cid: "",
    filename: "",
    url: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      await uploadToIPFS();
      const blob = await new Response(file).blob();
      let blobUrl = URL.createObjectURL(blob);
      setCurBlobUrl([blobUrl]);
    };
    fetchData();
  }, [file]);

  // 上传到IPFS
  const uploadToIPFS = async () => {
    if (!file) {
      return;
    }
    setLoading(true);
    const type = file.type;

    const blob = await new Response(file).blob();
    const result = await connector
      .postImage({ data: blob, type })
      .catch((e) => {
        console.error(e.message);
      });

    if (result) {
      !imgCache && setImgCache([]);
      setCidInfo({ ...result, filename: file.name });

      let newImgCache = [
        ...imgCache,
        { cid: result.cid, filename: file.name, url: result.url },
      ];
      setImgCache(newImgCache);
    }

    setLoading(false);
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  return (
    <div id="mainContainer">
      <div className="w-3/4 h-36">
        <div
          className="border-dashed  border-2 border-gray-300 p-4 rounded-lg text-center h-full relative"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className=" absolute left-1/2 -translate-x-1/2 top-1/3 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer"
          >
            Browse
          </label>
        </div>
        {file ? (
          <div className="flex text-sm">
            <p className="  font-semibold mb-2">Selected File:</p>
            <p className="text-blue-500">{file.name}</p>
          </div>
        ) : (
          <p className="text-xs text-gray-500">
            Drag & Drop or Click to Upload
          </p>
        )}
      </div>

      <Table
        cid={cidInfo.cid}
        filename={cidInfo.filename}
        loading={loading}
        curBlobUrl={curBlobUrl}
      />
    </div>
  );
};

export default MintPage;
