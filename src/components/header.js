import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={ {
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    } }
  >
    <div
      style={ {
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem`,
      } }
    >
      <h1 style={{ margin: 0, position: `relative` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          { siteTitle }
        </Link>
        <Link
          to="/cart"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `1rem`,
            float: `right`,
            position: `absolute`,
            top: `1.5rem`,
            right: `1.0875rem`,
            fontWeight: `700`
          }}
        >
          CART
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
