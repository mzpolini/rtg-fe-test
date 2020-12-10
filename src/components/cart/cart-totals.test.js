import React from "react"
import { render } from "@testing-library/react"
import CartTotals from "./cartTotals"

it("Renders cart totals", () => {
  const { getByTestId } = render(<CartTotals />)

  expect(getByTestId("cart-totals")).toHaveTextContent("Subtotal")
})
