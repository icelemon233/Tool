# Electron 源码整合

原 `cinna-tools-electron` 的完整历史已合入本仓库，统一维护 `electron/` 中的 React/TypeScript 实现，Tauri 版本继续位于 `tauri/`。

原独立项目的 OpenAI、Anthropic、Gemini、智谱、Moonshot、DeepSeek、通义千问及自定义接口均已由当前实现覆盖；旧 DeepSeek 配置由现有兼容逻辑迁移。

- 原独立项目末次提交：`55a19cb7453e234debe8a5605c9aec8b90be23fc`。
- 原源码快照分支：`archive/standalone-electron`。
- 合并使用保留主工作区文件的历史合并；原源码可通过该分支或历史提交完整检出。
- 桌面开发与打包继续使用根目录 README 中的 Electron/Tauri 命令。
