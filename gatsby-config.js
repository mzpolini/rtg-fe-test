module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/lib/data/`,
      },
    },
    `gatsby-transformer-json`,
  ],
}
