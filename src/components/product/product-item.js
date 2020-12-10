import React from "react"
import { useStore } from "../../store"

/**
 * ProductItem
 * @params{object} product
 * @returns{JSX.Element}
 */

const ProductItem = product => {
  const { addItem, cart } = useStore(state => state)
  console.log('cart = ', cart);
  const handleAddItemClick = () => {
    addItem(product)
  }

  return (
    <div className="product cell small-12 grid-x grid-margin-x" id={ product.sku }>
      <div className="product-image cell small-2"><img src={ product.image } alt={ product.title } /></div>
      <div className="product-title cell small-4">{ product.title }</div>
      <div className="product-sku cell small-2">{ product.sku }</div>
      <div className="product-price cell small-2">${ product.price }</div>
      <div className="product-add-to-cart cell small-2">
          {
            !cart.loading ? (
              <button
                id="add-to-cart"
                onClick={handleAddItemClick}
              > Add to Cart</button>
            ) : (
              <button
                id="add-to-cart"
                disabled={true}
              >Loading...</button>
            )
          }
      </div>
    </div>
  )
}

export default ProductItem
