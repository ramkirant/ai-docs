import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AI Docs",
  description: "AI Documentation",
  base: '/ai-docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
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
            { text: 'Introduction', link: '/python-basics/' },
            { text: 'Sets', link: '/python-basics/sets' },
            { text: 'Dictionaries', link: '/python-basics/dictionaries' },
            { text: 'Tuples', link: '/python-basics/tuples' },
            { text: 'Functions', link: '/python-basics/functions' },
            { text: 'Lambda Functions', link: '/python-basics/lambdas' },
            { text: 'Standard Libraries', link: '/python-basics/standard-libraries' }
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
      { icon: 'github', link: 'https://github.com/ramkirant/ai-docs' }
    ]
  }
})
