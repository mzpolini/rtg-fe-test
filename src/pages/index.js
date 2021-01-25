import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  console.log('pageQuery', pageQuery);
  return (
    <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Home Page</h1>
      
  </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allContentfulProduct {
      edges {
        node {
          id
        }
      }
    }
  }
`