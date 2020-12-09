import create from "zustand"
import produce from "immer"

export const useStore = create(set => ({
  cart: [],
  addItem: (item) => {
    set(state => {
      //  Use Immer to cleanly create new state
      const nextCart = produce(state.cart, draft => {
        const findItem = draft.findIndex((i) => i.sku === item.sku)
        //  Push new item or if already in cart, lets increment quantity
        findItem === -1 ? draft.push({ ...item, quantity : 1 }) : draft[findItem].quantity++
      })
      return { cart: nextCart }
    })
  },
  removeItem: (item) => set(state => ({
    cart: state.cart.filter((i) => i.sku !== item.sku)
  })),
  updateItem: (item) => set(state => {
    console.log('updateItem called with payload => ', item);
    const nextCart = produce(state.cart, draft => {
      draft[draft.findIndex((i) => i.sku === item.sku)].quantity = item.newQuantity
    })
    return { cart: nextCart }
  })
}))
