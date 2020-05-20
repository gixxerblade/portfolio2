import { Link } from "gatsby"
import Typed from "react-typed"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "../components/navbar"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

const Header = ({ siteTitle }) => {
  //Media queries for responsiveness
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })

  return (
    <StyledHead>
      {isDesktopOrLaptop && (
        <StyledHeader>
          <StyLink to="/home">
            <StyH1>
              <Typed
                strings={[`${siteTitle}`]}
                showCursor={false}
                typeSpeed={60}
                style={{ color: "#ffffff" }}
              />
            </StyH1>
          </StyLink>
          <Navbar />
        </StyledHeader>
      )}
      {isTabletOrMobile && (
        <StyledHeader>
          <StyLink to="/home">
            <StyH1>Stephen Clark</StyH1>
          </StyLink>
          <Navbar />
        </StyledHeader>
      )}
    </StyledHead>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const StyledHeader = styled.header`
  margin: 0 auto;
  max-width: 960;
  padding: 0.6rem 1.1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: 320px) and (max-width: 1224px) {
    justify-content: center;
    overflow: hidden;
    width: 100%;
    padding-bottom: 0;
  }
`
const StyH1 = styled.h1`
  margin: 0;
  font-size: 3.5rem;
  max-width: 100%;
  font-family: "Special Elite";

  @media only screen and (min-width: 320px) and (max-width: 1224px) {
    font-size: 3rem;
    text-align: center;
  }
`
const StyLink = styled(Link)`
  color: white;
  text-decoration: none;
`
const StyledHead = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: #0f0a0a;
  margin-bottom: 1.45rem;
  height: 7rem;
  @media only screen and (min-width: 320px) and (max-width: 1224px) {
    margin-bottom: 1rem;
    height: auto;
  }
`
