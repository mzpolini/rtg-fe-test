import React from "react"
import { useStore } from "../store"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CartItem from "../components/cart/cart-item"
import CartTotals from "../components/cart/cartTotals"

/**
 * Cart
 * @returns {JSX.Element}
 */

const Cart = () => {
  const cart = useStore(state => state.cart)

  return (
    <Layout>
      <SEO title="Cart" />
      <h1>Cart</h1>
      {
        cart.length === 0 ? <div>No items</div> : cart.map((c) => <CartItem { ...c } key={ c.sku } />)
      }
      <CartTotals />
    </Layout>
  )
}

export default Cart
