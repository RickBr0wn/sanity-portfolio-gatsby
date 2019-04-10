import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import TechStackImage from "../components/TechStackImage"

export const query = graphql`
  query($slug: String) {
    sanityProjects(slug: { current: { eq: $slug } }) {
      title
      description
      techStack
      body {
        children {
          text
        }
      }
      markdown
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
        margin: `1rem auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        {data.sanityProjects.techStack &&
          data.sanityProjects.techStack.map(tech => (
            <TechStackImage tech={tech} />
          ))}
      </div>
      <div>
        <button>See the code</button>
        <button>See the live demo</button>
      </div>
      <br />
      <ReactMarkdown source={data.sanityProjects.markdown} />
      <br />

      <Link to="/">Back to home</Link>
    </div>
  </Layout>
)
