import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import STYLED from "./styled"
import About from "./About"

const Header = ({ title }) => (
  <STYLED.NavBar>
    <h3>{title}</h3>
    <STYLED.LinksWrapper>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/portfolio">portfolio</Link>
      <Link to="/contact">contact</Link>
    </STYLED.LinksWrapper>
  </STYLED.NavBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
