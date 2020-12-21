# 网页字体文件精简版

在网页中特殊情况下会使用非标准字体（最近的项目中需要使用思源黑体），通过网页下载中文字体库往往很大（思源黑体 8M），其中大部分是用不到的字体，导致页面加载缓慢。通过删除不常用的文字，来减少字体库大小，加快网页加载速度。

### 使用资源

字体压缩工具

    https://ecomfe.github.io/fontmin/

3500 常用字数据

    https://github.com/DavidSheh/CommonChineseCharacter

字体

    思源黑体

### 使用用法

```shell
npm i
npm run build
```

新的精简版字体文件输出到 `dest` 目录中.
