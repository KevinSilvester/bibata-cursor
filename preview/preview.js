import path from "node:path";
import fs from "node:fs";
import puppeteer from "puppeteer";

const CSS = fs.readFileSync(path.resolve("preview/preview.css"), "utf8");

const CURSOR_INFO = {
   classic: {
      name: "Bibata Modern Classic",
      bitmap_dir: path.resolve("bitmaps", "Bibata-Modern-Classic"),
      gradient_start: "235,160,172,1",
      gradient_end: "250,179,135,1",
   },
   ice: {
      name: "Bibata Modern Ice",
      bitmap_dir: path.resolve("bitmaps", "Bibata-Modern-Ice"),
      gradient_start: "137,180,250,1",
      gradient_end: "180,190,254,1",
   },
};

function loadBitmaps(bitmapDir) {
   const dataPrefix = "data:image/png;base64,";
   const files = fs.readdirSync(bitmapDir);
   const normal = files.filter(
      (file) => !file.startsWith("left_ptr_watch") && !file.startsWith("wait")
   );
   return {
      normal: normal.map(
         (file) =>
            dataPrefix +
            fs.readFileSync(path.resolve(bitmapDir, file)).toString("base64")
      ),
      leftPtrWatch:
         dataPrefix +
         fs
            .readFileSync(path.resolve(bitmapDir, "left_ptr_watch-01.png"))
            .toString("base64"),
      wait:
         dataPrefix +
         fs
            .readFileSync(path.resolve(bitmapDir, "wait-01.png"))
            .toString("base64"),
   };
}

function loadFont() {
   const fontPrefix = "data:font/ttf;base64,";
   return (
      fontPrefix +
      fs
         .readFileSync(path.resolve("preview", "Courgette-Regular.ttf"))
         .toString("base64")
   );
}

function generateHTML(cursorInfo) {
   const bitmaps = loadBitmaps(cursorInfo.bitmap_dir);
   const imgTags = bitmaps.normal.map((img) => `<img src="${img}" />`).join("");

   const html = `
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Collage</title>
   <style>
      :root {
         --gradient-start: ${cursorInfo.gradient_start};
         --gradient-end: ${cursorInfo.gradient_end};
      }
      @font-face {
         font-family: 'Courgette';
         font-style: normal;
         font-weight: 400;
         font-display: swap;
         src: url('${loadFont()}') format('truetype');
      }
   </style>
   <style>
      ${CSS}
   </style>
</head>

<body>
   <div class="container">
      <div class="title">${cursorInfo.name}</div>
      <div class="collage">
         <div class="collage-normal">
            ${imgTags}
         </div>

         <div class="collage-wait">
            <section>
               <img src="${bitmaps.wait}" />
               <span class="subtitle">Wait</span>
            </section>
            <section>
               <img src="${bitmaps.leftPtrWatch}" />
               <span class="subtitle">Left Pointer Watch</span>
            </section>
         </div>
      </div>
</body>
`;

   return html;
}

async function generatePreview(cursorInfo) {
   const browser = await puppeteer.launch({
      executablePath:
         "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
   });
   const page = await browser.newPage();
   await page.setContent(generateHTML(cursorInfo), {
      waitUntil: "domcontentloaded",
   });
   await page.setViewport({ width: 3840, height: 2160 });
   await page.screenshot({
      path: `preview/${cursorInfo.name.replaceAll(" ", "-")}.png`,
      clip: { x: 0, y: 0, width: 1100, height: 705 },
      omitBackground: true,
   });
   await browser.close();
}

await generatePreview(CURSOR_INFO.classic);
await generatePreview(CURSOR_INFO.ice);
