require('dotenv').config({ path: `.env` })

console.log('Gatsby Config..  env', JSON.stringify(process.env));

module.exports = {
  siteMetadata: {
    title: `the Gatsby Sandbox`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: 'master',
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
