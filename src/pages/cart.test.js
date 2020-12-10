import React from "react"
import { render } from "@testing-library/react"
import Cart from "./cart"

it("Renders cart and title", () => {
  const { getByTestId } = render(<Cart />)

  expect(getByTestId("cart-title")).toHaveTextContent("Cart")
})
