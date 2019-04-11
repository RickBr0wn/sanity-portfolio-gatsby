import React from "react"
import TechStackImage from "./TechStackImage"

export default function About() {
  const images = [
    "html",
    "css",
    "sass",
    "javascript",
    "react",
    "redux",
    "gatsby-icon",
    "firebase",
    "node",
  ]
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#ddd",
          padding: "1rem",
        }}
      >
        {images.map(tech => (
          <TechStackImage tech={tech} />
        ))}
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1>About Me</h1>
        <p>
          I have always been interested in computer programming and dabbled with
          basic HTML, CSS, and Javascript in the past but finding myself with
          some time on my hands and wanting a change of career I decided to
          further my skills.
        </p>
        <p>
          For the past 2 years, I have been teaching myself to code, using
          resources such as YouTube, FreeCodeCamp. Treehouse, Udemy, and
          currently Egghead.io. I have completed the Free Code Camp javascript
          Algorithms and Data Structure certification and have completed in full
          the Treehouse Full Stack Javascript Track.
        </p>
        <p>
          I have recently started the challenges on{" "}
          <a href="https://www.codewars.com/dashboard">Codewars</a>. I really
          enjoy these, I am currently rated at 6kyu and advancing. My latest
          solution is{" "}
          <a href="https://github.com/RickBr0wn/codewars/blob/master/vectorClass/vectorClass.js">
            here
          </a>
          . I am currently working through the Advanced React Component patterns
          course on{" "}
          <a href="https://egghead.io/courses/advanced-react-component-patterns">
            Egghead.io
          </a>
          .
        </p>
        <br />
        <h1>My Projects</h1>
      </div>
    </div>
  )
}
