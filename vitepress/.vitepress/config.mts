import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'nl-NL',
  title: 'Je klikt nooit alleen',
  description: 'Storytellingportfolio over privacy, digitale sporen en online bewustwording.',
  base: '/je-klikt-nooit-alleen/',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Je klikt nooit alleen',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Portfolio', link: '/inleiding' },
      { text: 'Proces', link: '/creatief-proces' },
      { text: 'Product', link: '/creatief-product' },
      { text: 'Reflectie', link: '/reflectie' }
    ],

    sidebar: [
      {
        text: 'Portfolio',
        items: [
          { text: 'Inleiding', link: '/inleiding' },
          { text: 'Conceptbeschrijving', link: '/conceptbeschrijving' },
          { text: 'Creatief product', link: '/creatief-product' },
          { text: 'Creatief proces', link: '/creatief-proces' },
          { text: 'Verhaalwereld', link: '/verhaalwereld' },
          { text: 'Verhaalstructuur', link: '/verhaalstructuur' },
          { text: 'Personages', link: '/personages' },
          { text: 'Beoordelingsmodel', link: '/beoordelingsmodel' },
          { text: 'Feedback op anderen', link: '/feedback' },
          { text: 'Reflectie', link: '/reflectie' },
          { text: 'Bronnen', link: '/bronnen' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/sadayokawakami/je-klikt-nooit-alleen',
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
      text: 'Laatst bijgewerkt'
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
