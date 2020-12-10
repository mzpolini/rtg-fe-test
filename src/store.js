import create from "zustand"
import produce from "immer"
import { mockServerCall } from "./utils/utils"

export const useStore = create(set => ({
  cart: {
    data: [],
    loading: false,
  },
  addItem: async (item) => {
    //  Set Loading Flag to True
    set(state => {
      const nextCart = produce(state.cart, draft => {
        draft.loading = true
      })
      return {
        cart: nextCart
      }
    })

    //  simulate something async
    await mockServerCall()

    set(state => {
      //  Use Immer to cleanly create new state
      const nextCart = produce(state.cart, draft => {
        const findItem = draft.data.findIndex((i) => i.sku === item.sku)
        //  Push new item or if already in cart, lets increment quantity
        findItem === -1 ? draft.data.push({ ...item, quantity : 1 }) : draft.data[findItem].quantity++
        draft.loading = false
      })
      return {
        cart: nextCart
      }
    })
  },
  removeItem: async (item) => {
    set(state => {
      const nextCart = produce(state.cart, draft => {
        draft.loading = true
      })
      return {
        cart: nextCart
      }
    })

    //  simulate something async
    await mockServerCall()

    set(state => {
      return {
        cart: {
          data: state.cart.data.filter((i) => i.sku !== item.sku),
          loading: false,
        }
      }
    })
  },
  updateItem: async (item) => {
    set(state => {
      const nextCart = produce(state.cart, draft => {
        draft.loading = true
      })
      return {
        cart: nextCart
      }
    })
    //  simulate something async
    await mockServerCall()

    set(state => {
      const nextCart = produce(state.cart, draft => {
        draft.data[draft.data.findIndex((i) => i.sku === item.sku)].quantity = item.newQuantity
        draft.loading = false
      })
      return {
        cart: nextCart
      }
    })
  },
}))
