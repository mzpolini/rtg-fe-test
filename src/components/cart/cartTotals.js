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
  const cart = useStore(state => state.cart)
  const [{ subtotal, tax, shipping, total }, setTotals] = useState({})

  useEffect(() => {
    let [ subtotal, tax, shipping, total ] = calculateTotals(cart)
    setTotals({ subtotal, tax, shipping, total })
  }, [cart])

  return (
    <>
      <div>{`Subtotal $${subtotal}`}</div>
      <div>{`Tax $${tax}`}</div>
      <div>{`Shipping Cost $${shipping}`}</div>
      <div>{`Total $${total}`}</div>
    </>
  )
}

export default CartTotals
