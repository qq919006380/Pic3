import ClipboardJS from "clipboard";
import { toHex, hexToString } from "viem";

export function copyText(textToCopy) {
  return new Promise((resolve, reject) => {
    const dom = document.createElement("div");
    document.body.appendChild(dom);

    const clipboard = new ClipboardJS(dom, {
      text: () => textToCopy,
    });

    clipboard.on("success", (e) => {
      resolve(true);
      e.clearSelection();
    });

    clipboard.on("error", (e) => {
      window.prompt("Copy failed. Please copy manually.", textToCopy);
      reject(false);
    });

    clipboard.onClick(event); // 触发点击事件，执行复制操作
    clipboard.destroy(); // 销毁实例，避免内存泄漏
    document.body.removeChild(dom); // 移除临时元素
  });
}


// 将地址省略
export function transformString(originalString,range=[4,4]) {
  if (originalString.length <= 10) {
    return originalString;
  }

  return `${originalString.slice(0, range[0])}...${originalString.slice(-range[1])}`;
}


export function xorEncrypt(text, key, isEncrypt = true) {
  let result = "";
  let xxx=''
  if (!isEncrypt) {
    xxx = hexToString(text);
  }else{
    xxx=text
  }
  for (let i = 0, len = xxx.length; i < len; i++) {
    result += String.fromCharCode(
      xxx.charCodeAt(i) ^ key.charCodeAt(i % key.length)
    );
  }

  const hexData = isEncrypt ? toHex(result) : result;
  return hexData;
}