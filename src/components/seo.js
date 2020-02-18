import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import card from '../images/seo-banner.png';

function SEO({ description, lang, meta, title, image, coffeeshop, isReview }) {
  const metaDescription = description || 'Discover the best coffee shops in Bath. Read in (obsessive) details about their quirks and charms, and ultimately where to get the best cup. Written by a Bath local who spends way too much time (and money) on the good stuff.';
  const pageImage = image || card;
  const metaTitle = title || 'The Best Coffee Shops of Bath';
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title || 'The coffee shops of Bath',
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
          content: 'JamesVitaly',
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
    >
      <meta data-react-helmet="true" name="description" content={metaDescription} />
      <meta data-react-helmet="true" name="title" content={metaTitle} />
      <meta data-react-helmet="true" name="image" content={pageImage} />
      <meta data-react-helmet="true" property="og:description" content={metaDescription} />
      <meta data-react-helmet="true" property="og:image:width" content="300" />
      <meta data-react-helmet="true" property="og:image:height" content="200" />
      <meta data-react-helmet="true" property="og:image" content={pageImage} />
      <meta data-react-helmet="true" property="og:title" content={metaTitle} />
      <meta data-react-helmet="true" name="og:title" content={metaTitle} />
      <meta data-react-helmet="true" property="og:description" content={metaDescription} />
      <meta data-react-helmet="true" property="og:type" content="website" />
      <meta data-react-helmet="true" name="twitter:card" content="summary" />
      <meta data-react-helmet="true" name="twitter:creator" content="@jamesvitaly" />
      <meta data-react-helmet="true" name="twitter:title" content={metaTitle} />
      <meta data-react-helmet="true" name="twitter:description" content={metaDescription} />
      <meta data-react-helmet="true" name="twitter:image" content={pageImage} />
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-146538354-2');`}
        </script>
        {isReview && (<script type="application/ld+json">
        {`
        {
          "@context":"https://schema.org",
          "@type":"Review",
          "author": {
            "@type":"Person",
            "name":"James Harding"
          },
          "url": "${typeof window !== 'undefined' && window.location.href}",
          "datePublished": "${coffeeshop._meta.lastPublicationDate}",
          "publisher": {
              "@type":"Organization",
              "name": "Coffee shops of Bath",
              "sameAs":"https://bathcoffee.co"
          },
          "description":${coffeeshop.summary[0].text},
          "inLanguage":"en",
          "itemReviewed": {
            "@type":"Coffeeshop",
            "name": ${coffeeshop.name[0].text},
            "sameAs": ${coffeeshop.website.url},
            "servesCuisine": "Coffee",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.761293,
              "longitude": -73.982294
            },
          },
          "reviewRating": {
            "@type":"Rating",
            "worstRating":1,
            "bestRating":5,
            "ratingValue":${coffeeshop.rating}
          }
        }`}
        </script>)}
      </Helmet>
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