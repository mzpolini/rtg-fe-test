import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO({ lang, meta, keywords, title }) {
  return (
    <Helmet
      htmlAttributes={ {
        lang,
      } }
      title={ title}
      meta={ [
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
