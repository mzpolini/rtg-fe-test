import React from "react"
import { useStore } from "../store"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CartItem from "../components/cart/cart-item"
import CartTotals from "../components/cart/cart-totals"

/**
 * Cart
 * @returns {JSX.Element}
 */

const Cart = () => {
  const { loading, data } = useStore(state => state.cart)

  if (loading) {
    return <div>Loading</div>
  } else {
    return (
      <Layout>
        <SEO title="Cart" />
        <h1 data-testid="cart-title">Cart</h1>
        {
          data.length === 0 ? <div>No items</div> : data.map((c) => <CartItem { ...c } key={ c.sku } />)
        }
        <CartTotals />
      </Layout>
    )
  }

}

export default Cart
