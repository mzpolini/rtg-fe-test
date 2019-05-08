import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ProductList = () => {
  const { allDataJson } = useStaticQuery(
    graphql`
      query {
        allDataJson {
          edges {
            node {
              products {
                sku
                title
                price
                image
              }
            }
          }
        }
      }
    `
  )

  const Product = product => (
    <div className="product" id={ product.sku }>
      <div className="product-image"><img src={ product.image } alt={ product.title } /></div>
      <div className="product-title">{ product.title }</div>
      <div className="product-sku">{ product.sku }</div>
      <div className="product-price">{ product.price }</div>
      <div className="product-add-to-cart">
        <button id="add-to-cart"> Add to Cart</button>
      </div>
    </div>
  )

  return(
    <div className="product-list">
      { allDataJson.edges[0].node.products.map(product => (
        <Product { ...product } key={ product.sku } />
      )) }
    </div>
  )
}
export default ProductList
