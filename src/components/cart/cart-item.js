import React, { useState } from "react"
import { useStore } from "../../store"

/**
 * CartItem
 * @params{object} product
 * @returns{JSX.Element}
 */

const CartItem = product => {
  const removeItem = useStore(state => state.removeItem)
  const updateItem = useStore(state => state.updateItem)
  const [quantity, setQuantity] = useState(product.quantity)

  const handleQuantityChange = (event) => {
    event.preventDefault();
    setQuantity(event.target.value)
  }

  return (
    <div className="product cell small-12 grid-x grid-margin-x" id={ product.sku }>
      <div className="product-image cell small-2"><img src={ product.image } alt={ product.title } /></div>
      <div className="product-title cell small-4">{ product.title }</div>
      <div className="product-sku cell small-2">{ product.sku }</div>
      <div className="product-price cell small-2">${ product.price }</div>
      <div className="product-quantity cell small-2">
        <input
          type="number"
          name="quantityInput"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      {
        quantity !== product.quantity ? (
          <div className="product-add-to-cart cell small-2">
              <button
                id="update-quantity"
                onClick={() => updateItem({ ...product, newQuantity: quantity })}
              >Update Qty</button>
          </div>
        ) : null
      }
      <div className="product-add-to-cart cell small-2">
          <button
            id="add-to-cart"
            onClick={() => removeItem(product)}
          >Remove from Cart</button>
      </div>
    </div>
  )

}

export default CartItem
