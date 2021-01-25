import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const ProductTemplate = (props) => {
    const { pathContext } = props
    return (
        <Layout>
            <h1>{`Testing Product Template ${pathContext.id}`}</h1>
        </Layout>
    )
}

export default ProductTemplate