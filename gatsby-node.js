/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    // The “graphql” function allows us to run arbitrary
    // queries against the local Contentful graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
    console.log('createPages running');
    return graphql(
      `
        {
          allContentfulProduct(limit: 1000) {
            edges {
              node {
                id
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          throw result.errors
        }
        console.log('graphql result returned', JSON.stringify(result.data.allContentfulProduct));
        // Create Product pages
        // const productTemplate = path.resolve(`./src/templates/product.js`)
        // // We want to create a detailed page for each
        // // product node. We'll just use the Contentful id for the slug.
        // _.each(result.data.allContentfulProduct.edges, edge => {
        //   // Gatsby uses Redux to manage its internal state.
        //   // Plugins and sites can use functions like "createPage"
        //   // to interact with Gatsby.
        //   createPage({
        //     // Each page is required to have a `path` as well
        //     // as a template component. The `context` is
        //     // optional but is often necessary so the template
        //     // can query data specific to each page.
        //     path: `/products/${edge.node.id}/`,
        //     component: slash(productTemplate),
        //     context: {
        //       id: edge.node.id,
        //     },
        //   })
        // })
      })
}