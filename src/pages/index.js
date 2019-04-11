import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import "./index.css"

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
    <div className="main">
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          alignItems: "space-between",
          padding: 0,
        }}
      >
        <div className="container">
          {data.allSanityProjects.edges.map(({ node: project }) => (
            <li key={project.slug.current} className="box">
              <Link
                to={project.slug.current}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Image
                  className="img"
                  fluid={project.mainImage.asset.fluid}
                  alt={project.title}
                />
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                {/* TODO: add a local link*/}
              </Link>
            </li>
          ))}
        </div>
      </ul>
      <div>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
