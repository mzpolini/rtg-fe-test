/**
 * caluclateTotals makes all calculations for the cart
 * @params {array} cart
 * @returns {array} of signature [ subtotal, tax, shipping, total ]
 */

export const calculateTotals = (cart) => {
  if (cart.length === 0) return [0, 0, 0, 0]

  const subtotal = cart.reduce((a, i) => {
    return a + (i.price * i.quantity)
  }, 0)
  const tax = subtotal * 0.10
  const totalQuantity = cart.reduce((a, i) => {
    return a + i.quantity
  }, 0)
  const shipping = (50 + (subtotal * 0.02)) - (5 * totalQuantity)
  const total = subtotal + shipping + tax

  //  TODO no floating point math accounted for!!
  return [ subtotal, tax, shipping, total]
}


/**
 * mockServerCall
 * to show async behavior
 * @returns {Promise}
 */
export const mockServerCall = () => {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      resolve()
    }, 500)
  })
}
