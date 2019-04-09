module.exports = {
  siteMetadata: {
    title: `Rick Brown Portfolio`,
    description: `I am a self taught React.js developer, and here is a portfolio of my work`,
    author: `@riQeh_`,
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
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `j95dzpif`,
        dataset: `production`,
        overlayDrafts: true,
        watchMode: true,
        token:
          "sknDALRBz9CCLGK8l9oPPqlJ00X8aUv4iExvcQc3NcE3sOrpP53impU2yXgTHrjLoOuyIhngKdo1hOHUeSlhmc1m7H4BWKvbAXtEu6MeAiJVAaEvx9mjfFHLvi8QD0Ay8Ks3lL5U6EypZuTeVn6oJ7G6K5HjQYtKd5xIRJKQ6PFFPGfRM8vP",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rick brown portfolio`,
        short_name: `rick brown`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
