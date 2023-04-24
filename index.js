const Fontmin = require("fontmin");
const text = require("./chars");

const fonts = [
  // 思源黑体
  "./fonts/SourceHanSansCN-Medium.ttf",
  // 阿里巴巴普惠体
  "./fonts/Alibaba-PuHuiTi-Medium.ttf",
  // OPPO 体
  "./fonts/OPPOSans-M.ttf",
];

for (const font of fonts) {
  new Fontmin()
    .src(font)
    .use(Fontmin.glyph({ text }))
    .dest("dist")
    .run((err) => err && console.log(err));
}
