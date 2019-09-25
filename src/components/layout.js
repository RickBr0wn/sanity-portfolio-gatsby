/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import STYLED from "./styled"
import Header from "./header"

import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        allFile {
          edges {
            node {
              childImageSharp {
                fluid {
                  base64
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      console.log({ data })
      const backgroundImage =
        data.allFile.edges[11].node.childImageSharp.fluid.src
      return (
        <>
          <STYLED.Wrapper backgroundImage={backgroundImage}>
            <Header title={data.site.siteMetadata.title} />
            <STYLED.InnerWrapper>Content</STYLED.InnerWrapper>
            <STYLED.Footer>next page</STYLED.Footer>
          </STYLED.Wrapper>
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
