import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    allSanityProjects {
      edges {
        node {
          title
          description
          slug {
            current
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
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      style={{
        margin: `5rem auto 0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <h1>My Portfolio</h1>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          alignItems: "space-between",
          padding: 0,
        }}
      >
        {data.allSanityProjects.edges.map(({ node: project }) => (
          <li key={project.slug.current} style={{ flex: "1", margin: "1rem" }}>
            <Link to={project.slug.current}>
              <h2 style={{ fontSize: "24px" }}>{project.title}</h2>
            </Link>
            <Image fluid={project.mainImage.asset.fluid} alt={project.title} />
            <p style={{ marginTop: "1rem" }}>{project.description}</p>
            {/* TODO: add a local link*/}
          </li>
        ))}
      </ul>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
