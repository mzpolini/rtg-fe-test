import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useNavigate } from "@reach/router"



const IndexPage = (props) => {
  const navigate = useNavigate();
  console.log('do I have page query here?', props.data)

  return (
    <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 onClick={() => navigate('/aboutus')}>Home Page</h1>
    {
      props.data.allContentfulProduct.edges.map((edge) => {
        const { node } = edge
        return <h1>{node.id}</h1>
      })
    }
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