import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"
import "./index.css"
import About from "../components/About"
import STYLED from "../components/styled"

import hero from "../images/hero.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <StaticQuery
    query={graphql`
      query BackgroundImageQuery {
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
      console.log(backgroundImage)
      return (
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <STYLED.BackgroundImage src={backgroundImage} />
        </Layout>
      )
    }}
  />
)

export default IndexPage
