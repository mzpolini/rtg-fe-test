import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductList from "../components/product/product-list"


const Product = ({ node }) => (
  <div>
    <Link
      style={{ color: `inherit`, textDecoration: `none` }}
      to={`/products/${node.id}/`}
    >
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          borderBottom: `1px solid lightgray`,
        }}
      >
        <div style={{ flex: 1 }}>{node.name}</div>
      </div>
    </Link>
  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Products" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Products</h1>
    <ProductList />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allContentfulProduct() {
      edges {
        node {
          id
          name {
            name
          }
        }
      }
    }
  }
`