module.exports = {
  siteMetadata: {
    title: `the Gatsby Sandbox`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'kb9wgir596y6',
        accessToken: 'muJu7wiDT7BapDXnltXtYalMWSU84hQbHzH7Sx0fHSY',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/lib/data/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
  ],
}
