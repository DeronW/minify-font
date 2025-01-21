# 网页字体文件精简版

网页为了美观可能需要单独加载字体文件，字体文件一般比较大（接近 10M ），并且字体文件中大部分字符都用不到。可以通过删除不常用文字，来减小字体文件大小，加快网页速度。

### 字体压缩工具

    https://ecomfe.github.io/fontmin/

3500 常用字数据

    https://github.com/DavidSheh/CommonChineseCharacter

| 字体（免费可商用） | 精简前 | 精简后 |                                                                                            |
| ------------------ | ------ | ------ | ------------------------------------------------------------------------------------------ |
| 思源黑体           | 8.1M   | 834K   | [下载](https://github.com/DeronW/minify-font/raw/master/dist/SourceHanSansCN-Medium.ttf)   |
| 阿里巴巴普惠体     | 9.6M   | 1M     | [下载](https://github.com/DeronW/minify-font/raw/master/dist/Alibaba-PuHuiTi-Medium.ttf)   |
| OPPO Sans          | 10.1M  | 1.1M   | [下载](https://github.com/DeronW/minify-font/raw/master/dist/OPPOSans-M.ttf)               |
| 霞鹜楷体           | 16.3M  | 1.7M   | [下载](https://github.com/DeronW/minify-font/raw/master/dist/LXGWWenKai-Regular.ttf)       |
| 小米字体 MiSans    | 7.9M   | 833K   | [下载](https://github.com/DeronW/minify-font/raw/master/dist/MiSans-Regular.ttf)           |
| 更沙体             | 22.5M  | 1.7M   | [下载](https://github.com/DeronW/minify-font/raw/master/dist/Sarasa-Gothic-SC-Regular.ttf) |

### 手动精简方法

1. 拷贝字体文件到 fonts 目录
1. 修改 index.js 文件，把新字体文件添加到编译方法中
1. 执行 build 方法

```shell
npm i
npm run build
```

新的精简版字体文件输出到 `dist` 目录中.

#### 本地演示

下载项目，然后直接打开根目录下的 `demo.html` 文件。
