import React, { useEffect, useState } from "react"
import { useStore } from "../../store"
import { calculateTotals } from "../../utils/utils"

/**
 * CartTotals SHOWS all necessary order information
 * the useEffect hook performs the calculations and is
 * refreshed whenever cart store changes in any way (add/remove/update quantity)
 * @returns {JSX.Element}
 */

const CartTotals = () => {
  const { data, loading } = useStore(state => state.cart)
  const [{ subtotal, tax, shipping, total }, setTotals] = useState({})

  useEffect(() => {
    let [ subtotal, tax, shipping, total ] = calculateTotals(data)
    setTotals({ subtotal, tax, shipping, total })
  }, [data])

  if (loading) {
    return <div>Loading</div>
  } else {
    return (
      <div data-testid="cart-totals">
        <div>{`Subtotal $${Number(subtotal).toFixed(2)}`}</div>
        <div>{`Tax $${Number(tax).toFixed(2)}`}</div>
        <div>{`Shipping Cost $${Number(shipping).toFixed(2)}`}</div>
        <div>{`Total $${Number(total).toFixed(2)}`}</div>
      </div>
    )
  }
}

export default CartTotals
