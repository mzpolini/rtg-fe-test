import React from "react"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header siteTitle="RTG" />
    <div
      style={ {
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      } }
    >
      <main>{ children }</main>
      <footer></footer>
    </div>
  </>
)

export default Layout
