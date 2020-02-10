/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, data }) {
  return (
  <StaticQuery
  query={detailsQuery}
  render={data => {
    const metaDescription =
      description || data.site.siteMetadata.description;
    const metaTitle =
      title || data.site.siteMetadata.title;
    const url =
      `${data.site.siteMetadata.siteUrl}${path ? path : ''}` || data.site.siteMetadata.siteUrl;
      const pageImage = image
      ? image
      : `${data.site.siteMetadata.image}`;
    return (
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(meta)}
      />
    )}} />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

export const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        image
        siteUrl
      }
    }
  }
`;
