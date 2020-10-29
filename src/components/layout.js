/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import favicon from '../images/favicon.ico'
import Helmet from 'react-helmet'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Helmet>
      <link rel="icon" href={favicon} />
      <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital@0;1&display=swap" rel="stylesheet" />
    </Helmet>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div id="container">
        <main>{children}</main>
        <footer>
        © {new Date().getFullYear()} | Built by Jesse with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
