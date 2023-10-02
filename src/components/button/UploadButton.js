import { useState, useEffect } from "react";
import { createNFTStorageConnector } from "../../utils/uploader-connector/NFT.storage";

const token = process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN;
const connector = createNFTStorageConnector({ token });

const UploadComponent = () => {
  const [file, setFile] = useState(null);
  useEffect(() => {
    uploadToIPFS();
  }, [file]);

  // 上传到IPFS
  const uploadToIPFS = async () => {

    if (!file) {
      return;
    }
    const type = file.type;

    const blob = await new Response(file).blob();
    const result = await connector
      .postImage({ data: blob, type })
      .catch((e) => {
        console.error(e.message);
      });

    if (result) {
      console.log(result);
    }
  };
  const handleFileChange =   (event) => {
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
    <div className="w-3/4 h-20">
      <div
        className="border-dashed  border-2 border-gray-300 p-4 rounded-lg text-center h-full"
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
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer"
        >
          Browse
        </label>
      </div>
      {file ? (
        <div>
          <p className="text-lg font-semibold mb-2">Selected File:</p>
          <p className="text-blue-500">{file.name}</p>
        </div>
      ) : (
        <p className="text-lg">Drag & Drop or Click to Upload</p>
      )}
    </div>
  );
};

export default UploadComponent;
