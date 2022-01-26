const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://atheart.engineering',
    gaTrackingId: "G-QRQPPFS4QE",
    trailingSlash: false,
  },
  header: {
    logo: 'https://s3.amazonaws.com/atheart.engineering/AtHeartEngineerLogo_small.png',
    logoLink: 'https://atheart.engineering',
    title:
      "AtHeart.Engineer(ing)",
    githubUrl: 'https://github.com/AtHeartEngineering/website',
    helpUrl: 'help url',
    tweetText: 'tweet text',
    social: ``,
    links: [{ text: 'Youtube', link: 'https://youtube.com/atheartengineer' }, { text: 'Github', link: 'https://github.com/AtHeartEngineer' }, { text: 'Twitter', link: 'https://twitter.com/AtHeartEngineer' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/index', // add trailing slash if enabled above
      '/coding',
    ],
    collapsedNav: [
      '/coding', // add trailing slash if enabled above
    ],
    links: [{ text: 'Github Repo', link: 'https://github.com/AtHeartEngineering/website' }, { text: 'Twitter', link: 'https://twitter.com/AtHeartEngineer' }],
    frontline: false,
    ignoreIndex: false,
    title:
      "Here Be Treasures",
  },
  siteMetadata: {
    title: 'AtHeart.Engineering',
    description: 'A place for my work, my ideas, and my musings',
    ogImage: null,
    docsLocation: 'https://github.com/AtHeartEngineering/website/tree/master/content',
    favicon: 'logo.png',
  },
  pwa: {
    enabled: true, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'AtHeart.Engineer(ing)',
      short_name: 'atheartengineering',
      start_url: '/',
      background_color: '#ff7575',
      theme_color: '#ff7575',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'logo.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
