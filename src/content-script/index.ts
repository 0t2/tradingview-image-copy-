declare var ClipboardItem: any;

async function copyImage(url: string) {
  const response = await fetch(url);
  const blob = await response.blob();
  const item = new ClipboardItem({ "image/png": blob });
  await (navigator as any).clipboard.write([item]).then(
    function () {
      console.log("Copied to clipboard successfully!");
      document.querySelectorAll("[class*=copyForm]")[0].innerHTML +=
        "Copied to clipboard successfully!";
    },
    function (error: any) {
      console.error("unable to write to clipboard. Error:");
      console.log(error);
    }
  );
}

document.addEventListener(
  "copy",
  (event: ClipboardEvent) => {
    event.clipboardData;
    navigator.clipboard.readText().then((text) => {
      copyImage(text);
    });
  },
  true
);
