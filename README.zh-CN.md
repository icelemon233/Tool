<p align="center"><img src="./electron/src/assets/icon.png" alt="CinnaTool" width="96"></p>

<h1 align="center">CinnaTool</h1>

<p align="center"><a href="./README.md">English</a> · 简体中文</p>

桌面工具箱，包含 AI 聊天、待办、日历和文件工具。

## 工具

- 待办列表与日程安排。
- 使用自己配置的服务进行 AI 聊天和文字翻译。
- 保存剪贴板片段、阅读文件、搜索文本。
- 对比代码、分析日志、查看图片和起草文档。

界面支持中英文。AI 服务和外观选项可在设置中调整。

## 运行应用

安装 Node.js 和仓库指定的 pnpm 版本后运行：

```sh
pnpm install --frozen-lockfile
pnpm electron:dev
```

本地服务就绪后会打开应用窗口。使用 AI 聊天和翻译前，需要填写自己的服务配置。
