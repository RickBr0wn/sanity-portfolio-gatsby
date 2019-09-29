import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import "./index.css"
import About from "../components/About"

import hero from "../images/hero.jpg"

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
      <div className="hero-container">
        <img
          src={hero}
          style={{ width: "100%", maxHeight: "400px", opacity: "0.5" }}
        />
        <div className="title">
          <h1>Rick Brown</h1>
          <h2>Web Developer</h2>
          <i className="fab fa-github" />
          <i className="fab fa-twitter" />
        </div>
      </div>
      <About />
      <ul
        style={{
          listStyle: "none",
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
    </div>
  </Layout>
)

export default IndexPage
