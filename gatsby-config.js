module.exports = {
  pathPrefix: "/", 
  siteMetadata: {
    siteUrl: "https://ittaboba.com",
    title: "Lorenzo Bernaschina\'s Website",
    twitterHandle: "@ittaboba",
    description: "Personal website where I share my journey, discoveries, and projects",
    canonicalUrl: "https://ittaboba.com",
    image: "/images/logo.jpg",
    author: {
      name: "Lorenzo Bernaschina",
      minibio: ``,
    },
    organization: {
      name: "ittaboba.com",
      url: "https://ittaboba.com",
      logo: "/images/logo.jpg",
    },
    social: {
      twitter: "https://twitter.com/ittaboba/",
      github: 'https://github.com/ittaboba',
      linkedin: 'https://www.linkedin.com/in/lorenzo-bernaschina-669a08b9/'
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/projects`,
        name: 'projects',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/about`,
        name: 'about',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md', '.markdown'],
        plugins: [`gatsby-remark-images`],
        remarkPlugins: [require('remark-unwrap-images')],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: '#fafafa',
              maxWidth: 750,
              linkImagesToOriginal: false,
              showCaptions: ['title', 'alt']
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Merriweather"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    `gatsby-plugin-image`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Lorenzo Bernaschina\'s Website",
        short_name: "Lorenzo\'s Blog",
        description: "Personal website where I share my journey, discoveries, and projects",
        start_url: "/",
        // background_color: config.backgroundColor,
        // theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `GOOGLE_ID`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
