import Fontmin from "fontmin";
import text from "./chars.js";

const fonts = [
  // 思源黑体
  "./fonts/SourceHanSansCN-Medium.ttf",
  // 阿里巴巴普惠体
  "./fonts/Alibaba-PuHuiTi-Medium.ttf",
  // OPPO 体
  "./fonts/OPPOSans-M.ttf",
  // 霞鹜文凯
  "./fonts/LXGWWenKai-Regular.ttf",
  // 小米字体
  "./fonts/MiSans-Regular.ttf",
  // 更纱字体
  "./fonts/Sarasa-Gothic-SC-Regular.ttf",
  // 旁门正道字体
  "./fonts/PangMenZhengDao-Regular.ttf",
];

for (const font of fonts) {
  new Fontmin()
    .src(font)
    .use(Fontmin.glyph({ text }))
    .dest("dist")
    .run((err) => err && console.log(err));
}
