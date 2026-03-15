import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AI Docs",
  description: "AI Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Python Basics', link: '/python-basics/' },
      { text: 'RAG', link: '/rag/' }
    ],

    sidebar: {
      '/python-basics/': [
        {
          text: 'Python Basics',
          items: [
            { text: 'Pre-requisites', link: '/python-basics/pre-requisites' },
            { text: 'Introduction', link: '/python-basics/' }
          ]
        }
      ],
      '/rag/': [
        {
          text: 'RAG',
          items: [
            { text: 'Overview', link: '/rag/' }
          ]
        }
      ]
    },

    outline: [2, 4],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
