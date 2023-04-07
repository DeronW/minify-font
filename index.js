const Fontmin = require("fontmin");
const text = require("./chars");

// 思源黑体
new Fontmin()
  .src("./fonts/SourceHanSansCN-Medium.ttf")
  .use(Fontmin.glyph({ text }))
  .dest("dist")
  .run((err) => err && console.log(err));

// 阿里巴巴普惠体
new Fontmin()
  .src("./fonts/Alibaba-PuHuiTi-Medium.ttf")
  .use(Fontmin.glyph({ text }))
  .dest("dist")
  .run((err) => err && console.log(err));

// OPPO 体
new Fontmin()
  .src("./fonts/OPPOSans-M.ttf")
  .use(Fontmin.glyph({ text }))
  .dest("dist")
  .run((err) => err && console.log(err));
