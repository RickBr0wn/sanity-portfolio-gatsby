import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String) {
    sanityProjects(slug: { current: { eq: $slug } }) {
      title
      description
      body {
        children {
          text
        }
      }
      mainImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

export default ({ data }) => (
  <Layout>
    <Image
      fluid={data.sanityProjects.mainImage.asset.fluid}
      alt={data.sanityProjects.title}
      style={{ height: "400px" }}
    />
    <div
      style={{
        margin: `5rem auto 0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <h1>{data.sanityProjects.title}</h1>
      <p>{data.sanityProjects.description}</p>
      <br />
      {console.log(data.sanityProjects.body[2].children[0].text)}
      {data.sanityProjects.body.map(obj => {
        const text = obj.children[0].text
        return <p>{text}</p>
      })}
      <br />
      <Link to="/">Back to home</Link>
    </div>
  </Layout>
)
