import React from "react"
import Layout from "../components/layout"
import { graphql, StaticQuery } from "gatsby"
import STYLED from "../components/styled"

const About = ({ data }) => (
  <StaticQuery
    query={graphql`
      query AboutImageQuery {
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
        data.allFile.edges[12].node.childImageSharp.fluid.src
      console.log(backgroundImage)
      return (
        <Layout>
          <STYLED.BackgroundImage src={backgroundImage} />
        </Layout>
      )
    }}
  />
)

export default About
