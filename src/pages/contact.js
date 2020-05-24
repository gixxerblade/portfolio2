import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import styled from "styled-components"
import { AlternateEmail } from "@styled-icons/material/AlternateEmail"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare"
import { DevTo } from "@styled-icons/boxicons-logos/DevTo"
import { Twitter } from "@styled-icons/fa-brands/Twitter"
import withStyledIcon from "../components/withStyledIcon"

const Contact = () => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  const StyledEmailIcon = withStyledIcon(AlternateEmail)
  const StyledGithubIcon = withStyledIcon(Github)
  const StyledLinkedIn = withStyledIcon(LinkedinSquare)
  const StyledDevTo = withStyledIcon(DevTo)
  const StyledTwitter = withStyledIcon(Twitter)

  return (
    <Div id="contact">
      <H1>Contact Me</H1>
      <H2>Contact me using the @ or check out my social media links.</H2>
      <LinkDiv>
        <div>
          <a
            aria-label="External link to email me"
            href="mailto:sdclarkie@gmail.com"
          >
            <StyledEmailIcon title="Email" />
          </a>
        </div>
        <div>
          <a
            aria-label="External link to Github"
            href="https://github.com/gixxerblade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledGithubIcon title="GitHub" />
          </a>
        </div>
        <div>
          <a
            aria-label="External link to LinkedIn"
            href="https://www.linkedin.com/in/stephen-clark-5319406/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledLinkedIn title="LinkedIn" />
          </a>
        </div>
        <div>
          <a
            aria-label="External link to Twitter"
            href="https://twitter.com/gixxerblade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledTwitter title="Twitter" />
          </a>
        </div>
        <div>
          <a
            aria-label="External link to a developer community of software developers"
            href="https://dev.to/gixxerblade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledDevTo title="DevTo" />
          </a>
        </div>
      </LinkDiv>
      <Link
        to="home"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={scrollToTop}
      >
        <StyH3>Go Home</StyH3>
      </Link>
    </Div>
  )
}
export default Contact
const LinkDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-evenly;
`

const Div = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
  position: relative;
  height: 100vh;
  font-family: "Roboto";
  margin: 2rem 0 0 0;
`
const StyH3 = styled.h3`
  cursor: pointer;
  text-decoration: underline;
  align-self: flex-end;
  bottom: 0;
  margin: 1rem;
  text-align: left;
  font-size: 1rem;
  font-family: "Roboto";
  color: ${props => props.theme.colors.blue};
`
const H1 = styled.h1`
  margin: 0 0 2rem 0;
  text-align: center;
  font-size: 2rem;
  max-width: 100%;
  font-family: "Roboto";
  color: ${props => props.theme.colors.blue};
  text-decoration: underline overline ${props => props.theme.colors.orange};
`
const H2 = styled.h2`
  color: ${props => props.theme.colors.orange};
  width: 75%;
  text-align: center;
`
