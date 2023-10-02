import ClipboardJS from "clipboard";

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
