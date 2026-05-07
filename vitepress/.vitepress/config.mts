import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'nl-NL',
  title: 'Wat is woke',
  description:
    'Storytellingportfolio en digitaal eindproduct over privacy, digitale sporen en online bewustwording.',
  base: '/wat-is-woke/',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Wat is woke',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Product', link: '/product/intro' },
      { text: 'Portfolio', link: '/portfolio/voorblad' },
      { text: 'Reflectie', link: '/portfolio/reflectie' }
    ],

    sidebar: {
      '/portfolio/': [
        {
          text: 'Portfolio',
          items: [
            { text: 'Voorblad', link: '/portfolio/voorblad' },
            { text: 'Inleiding', link: '/portfolio/inleiding' },
            { text: 'Conceptbeschrijving', link: '/portfolio/conceptbeschrijving' },
            { text: 'Creatief proces', link: '/portfolio/creatief-proces' },
            { text: 'Verhaalwereld', link: '/portfolio/verhaalwereld' },
            { text: 'Verhaal structuur', link: '/portfolio/verhaal-structuur' },
            { text: 'Personagebeschrijving', link: '/portfolio/personage-beschrijving' },
            { text: 'Beoordelingsmodel', link: '/portfolio/beoordelingsmodel' },
            { text: 'Reflectie', link: '/portfolio/reflectie' },
            { text: 'Bronnen', link: '/portfolio/bronnen' }
          ]
        }
      ],

      '/product/': [
        {
          text: 'Product',
          items: [
            { text: 'Intro', link: '/product/intro' },
            { text: 'Het verhaal', link: '/product/verhaal' }
          ]
        }
      ]
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/sadayokawakami/wat-is-woke',
        ariaLabel: 'GitHub repository'
      }
    ],

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: 'Op deze pagina'
    },

    docFooter: {
      prev: 'Vorige pagina',
      next: 'Volgende pagina'
    },

    lastUpdated: {
      text: 'Laatst bijgewerkt',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    darkModeSwitchLabel: 'Wissel thema',
    lightModeSwitchTitle: 'Schakel naar lichte modus',
    darkModeSwitchTitle: 'Schakel naar donkere modus',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Terug naar boven',

    footer: {
      message: 'Gemaakt met VitePress voor Concept, Copy & Design II',
      copyright: '© 2026 Dylano'
    }
  }
})
