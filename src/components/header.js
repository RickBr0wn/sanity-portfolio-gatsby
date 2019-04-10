import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const styles = {
  navbarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "22px",
    margin: 0,
    padding: "0.8rem",
  },
}

const Header = ({ siteTitle }) => (
  <nav style={styles.navbarContainer}>
    <h1 style={styles.title}>Rick Brown</h1>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
