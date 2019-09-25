import styled from "styled-components"

const Wrapper = styled.div`
  @import url("https://rsms.me/inter/inter.css");

  height: 100vh;
  width: 100vw;

  color: #fff !important;
  background: url(${props => props.backgroundImage});
  background-size: cover;
  font-family: "Inter", sans-serif;
  position: fixed;
`

const InnerWrapper = styled.div`
  max-width: 1140px;

  height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: red;
`

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px 0 50px;
  background: transparent;
`

const LinksWrapper = styled.div`
  display: flex;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;

  a {
    text-decoration: none;
    color: inherit;
    padding: 0 20px;
  }
`

const Footer = styled.footer`
  color: inherit;
  font-size: 28px;
  position: absolute;
  bottom: 50px;
  right: 200px;
`

export default {
  Wrapper,
  InnerWrapper,
  NavBar,
  LinksWrapper,
  Footer,
}
