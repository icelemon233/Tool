# CinnaTool

English | [简体中文](./README.zh-CN.md)

A desktop workspace for AI chat, to-do lists, and everyday file tools. Keep small tasks, useful text, and common utilities within reach.

## What you can do

- Organize to-do lists and a calendar of scheduled work.
- Chat with a configured AI provider and translate text.
- Save clipboard snippets, read files, and search their contents.
- Compare code, inspect logs, browse images, and draft documents.

The interface supports English and Chinese, appearance settings, and quick access tools. AI features use the provider and credentials you configure in Settings.

## Run from source

Install Node.js and the pnpm version declared in this repository, then run:

```sh
pnpm install --frozen-lockfile
pnpm electron:dev
```

The desktop app opens after the local development services start. Configure your AI provider in Settings when you want to use AI features.
