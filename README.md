<p align="center"><img src="./docs/brand/cinna-app-icon.png" alt="CinnaTool Cinna icon" width="128"></p>

<h1 align="center">CinnaTool</h1>

<p align="center">English · <a href="./README.zh-CN.md">简体中文</a></p>

A desktop app with AI chat, to-do lists, a calendar, and file utilities.

## Tools

- To-do lists and scheduled work.
- AI chat and text translation with a provider you configure.
- Clipboard snippets, file reading, and text search.
- Code comparison, log analysis, image viewing, and document drafting.

English and Chinese interfaces are available. Provider settings and appearance options are in Settings.

## Run the app

Install Node.js and the pnpm version listed in this repository, then run:

```sh
pnpm install --frozen-lockfile
pnpm electron:dev
```

The desktop window opens when the local services are ready. Add your provider settings to use AI chat and translation.
