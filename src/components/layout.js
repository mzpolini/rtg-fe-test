import React from "react"
import Helmet from "react-helmet"

import Header from "./header"
import "../assets/css/layout.css"

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.5.3/dist/css/foundation.min.css" integrity="sha256-xpOKVlYXzQ3P03j397+jWFZLMBXLES3IiryeClgU5og= sha384-gP4DhqyoT9b1vaikoHi9XQ8If7UNLO73JFOOlQV1RATrA7D0O7TjJZifac6NwPps sha512-AKwIib1E+xDeXe0tCgbc9uSvPwVYl6Awj7xl0FoaPFostZHOuDQ1abnDNCYtxL/HWEnVOMrFyf91TDgLPi9pNg==" crossorigin="anonymous" />
    </Helmet>
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
