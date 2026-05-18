import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '学习笔记',
  description: '读书笔记 · 亲子教育 · 数学思维',
  lang: 'zh-CN',

  base: '/math-learn/',

  head: [
    ['link', { rel: 'icon', href: '/math-learn/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#42b883' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/math-learn/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '激活孩子的四大奥数基因', link: '/激活孩子的四大奥数基因/' },
    ],

    sidebar: {
      '/激活孩子的四大奥数基因/': [
        {
          text: '激活孩子的四大奥数基因',
          items: [
            { text: '概述', link: '/激活孩子的四大奥数基因/' },
            { text: '第一章 · 大脑发育笔记', link: '/激活孩子的四大奥数基因/笔记' },
            { text: '第二章 · 游戏玩法与执行', link: '/激活孩子的四大奥数基因/第二章/笔记' },
            { text: '资料：核心分析与执行清单', link: '/激活孩子的四大奥数基因/第一章/资料/核心分析与执行清单' },
            { text: '资料：大字墙贴打印表', link: '/激活孩子的四大奥数基因/第一章/资料/大字墙贴_100字打印表' },
            { text: '资料：听觉多角度表达卡', link: '/激活孩子的四大奥数基因/第一章/资料/听觉_多角度表达卡' },
            { text: '模板：周执行追踪表', link: '/激活孩子的四大奥数基因/模板/周执行追踪表' },
            { text: '模板：触觉生活体验场景卡', link: '/激活孩子的四大奥数基因/模板/触觉_生活体验场景卡' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chenhaoren/math-learn' },
    ],

    footer: {
      message: '基于 VitePress 构建 · 用笔记见证成长',
      copyright: 'Copyright © 2026',
    },

    // 搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '未找到相关结果',
                resetButtonTitle: '清除搜索条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                },
              },
            },
          },
        },
      },
    },

    // 文档更新时间显示
    lastUpdated: true,
    lastUpdatedText: '最后更新',

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/chenhaoren/math-learn/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
  },

  // 保持原 Markdown 格式
  markdown: {
    lineNumbers: false,
  },

  // 最后更新时间
  lastUpdated: true,
})
