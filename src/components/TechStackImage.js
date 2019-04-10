import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

// const Image = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
//           childImageSharp {
//             fluid(maxWidth: 300) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `}
//     render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
//   />
// )
// export default Image

const TechStackImage = ({ tech }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      let image = null
      data.allFile.edges.map(({ node }) => {
        if (node.childImageSharp.fluid.src.includes(tech)) {
          image = node.childImageSharp.fluid
        }
      })

      return (
        <Img
          fluid={image}
          style={{
            height: "50px",
            width: "50px",
            margin: "0 1rem 2rem 1rem",
          }}
        />
      )
    }}
  />
)

export default TechStackImage
