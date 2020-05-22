import React from "react"
//import { Link } from "gatsby"
import { Link, animateScroll as scroll } from "react-scroll"
import styled from "styled-components"
import { Home } from "@styled-icons/fa-solid/Home"
import { Mask } from "@styled-icons/boxicons-solid/Mask"
import { Keyboard } from "@styled-icons/entypo/Keyboard"
import { Announcement } from "@styled-icons/material-outlined/Announcement"
import { Pencil } from "@styled-icons/boxicons-solid/Pencil"
import { Link as Lnk } from "gatsby"
import { useLocation } from "@reach/router"

const Navbar = () => {
  const location = useLocation()
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      {location.pathname.match(/^\/blog/) ||
      location.pathname.match(/^\/post/) ? (
        <Navigation>
          <StyledLnk to="/">
            <Home alt="Home" size={45} />
          </StyledLnk>
        </Navigation>
      ) : (
        <Navigation>
          <StyledLink
            to="home"
            title="Home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={scrollToTop}
          >
            <Home alt="Home" size={45} />
          </StyledLink>
          <StyledLink
            title="About"
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <Mask size={45} />
          </StyledLink>
          <StyledLink
            title="Work"
            to="work"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <Keyboard size={45} />
          </StyledLink>
          <StyledLnk title="Blog" to="/blog">
            <Pencil size={45} />
          </StyledLnk>
          <StyledLink
            title="Contact"
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <Announcement size={45} />
          </StyledLink>
        </Navigation>
      )}
    </>
  )
}
export default Navbar
const Navigation = styled.nav`
  max-width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  color: #ffffff;
  text-decoration: none;
  align-items: flex-end;
  padding: 1.45rem;
  @media only screen and (min-width: 320px) and (max-width: 1224px) {
    align-items: center;
    justify-content: space-evenly;
    padding: 0rem;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  margin: 1rem;
  &:hover {
    transform: scale(1.1);
    color: #f7567c;
  }
`
const StyledLnk = styled(Lnk)`
  text-decoration: none;
  color: #ffffff;
  margin: 1rem;
  &:hover {
    transform: scale(1.1);
    color: #f7567c;
  }
`
