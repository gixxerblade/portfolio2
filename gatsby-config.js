module.exports = {
  siteMetadata: {
    title: `Stephen Clark`,
    description: `JavaScript Developer`,
    author: `@gixxerblade`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#011c27`,
        theme_color: `#011c27`,
        display: `minimal-ui`,
        icon: `src/images/ap.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto", "Press Start 2P"],
        },
      },
    },
    `gatsby-plugin-styled-components`,
    // Custom plugin to pull in posts from me
    `gatsby-source-dev`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
