# 学习笔记

> 读书笔记 · 亲子教育 · 数学思维

## 内容

- [《激活孩子的四大奥数基因》](./docs/激活孩子的四大奥数基因/) — 从大脑发育规律出发，通过听觉、视觉、触觉三大通路，激活孩子的数学思维基因

## 博客

本仓库基于 [VitePress](https://vitepress.dev/) 构建博客，自动部署到 GitHub Pages。

**在线访问**：https://chenhaoren.github.io/math-learn/

### 本地开发

```bash
npm install
npm run docs:dev
```

### 添加笔记

在 `docs/` 目录下创建新的 Markdown 文件，然后更新 [config.js](./docs/.vitepress/config.js) 中的 `sidebar` 配置即可。

### 部署

推送 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。
