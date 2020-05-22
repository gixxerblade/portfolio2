import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import styled from "styled-components"
const Contact = () => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <Div id="contact">
      <H1>Contact Me</H1>
      <ul>
        <LI>Some</LI>
        <LI>Links</LI>
        <LI>Here</LI>
        <LI>
          <span role="img" aria-label="emoji">
            😎
          </span>
        </LI>
      </ul>
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

const Div = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
  position: relative;
  height: 90vh;
  font-family: "Roboto";
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
  color: ${({ theme: { color } }) => color.blue};
`
const H1 = styled.h1`
  margin: 0 0 0 0;
  text-align: center;
  font-size: 2rem;
  max-width: 100%;
  font-family: "Roboto";
  color: ${({ theme: { color } }) => color.blue};
  text-decoration: underline overline ${({ theme: { color } }) => color.orange};
`
const LI = styled.li`
  list-style: none;
  text-align: center;
  font-size: 1.2rem;
`
