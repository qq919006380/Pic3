// Landing page
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ABI, CHAIN_MAP } from "../config/constant";
import { toBytes, toHex } from "viem";
import CryptoJS from "crypto-js";
import WriteButton from "@/components/button/WriteButton";

function HomePage(props) {
  const [ciphertextBytes, setCiphertextBytes] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      var data = [
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
        {
          cid: "bafkreiek4fn6kkp4fzyfjyjeosyo4wywolaftucbmcdhwn24fqaj5bfcnu",
          name: "背景1.png",
        },
        {
          cid: "bafkreig5ijfsjvvtix5oljtzvkgokey5kmdrp7kv2opqhkhzwqpxkfii7q",
          name: "背景2.png",
        },
      ];
      // Encrypt
      var ciphertext = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        "secret key 123"
      ).toString();
      console.log("密文", ciphertext);
      // Decrypt
      var bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123");
      var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      console.log("解密后到数据", decryptedData); // [{id: 1}, {id: 2}]
      var ciphertextBytes = toHex(ciphertext);
      console.log("存链上的数据", ciphertextBytes);
      setCiphertextBytes(ciphertextBytes);
    }
  }, []);
  function handleStoreSuccess(tx) {
    console.log(tx, "handleStoreSuccess");
  }
  return (
    <div>
      <div>{JSON.stringify(ciphertextBytes)}</div>

      <WriteButton
        abi={ABI}
        functionName={"uploadToken"}
        args={[ciphertextBytes]}
        value={"0"}
        onClick={handleStoreSuccess}
      >
        <div className="inline-block rounded border-2 px-2 border-black cursor-pointer hover:border-gray-400 text-b50">
          Update Token
        </div>
      </WriteButton>
    </div>
  );
}

HomePage.propTypes = {
  name: PropTypes.string,
};

export async function getStaticProps() {
  const abi = ABI;
  return {
    props: {
      abi,
    },
  };
}

export default HomePage;
