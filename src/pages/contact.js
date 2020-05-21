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
      <Link
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={scrollToTop}
      >
        <ul>
          <LI>Some</LI>
          <LI>Links</LI>
          <LI>Here</LI>
          <LI>😎</LI>
        </ul>
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
  font-family: "Special Elite", cursive;
`
const StyH3 = styled.h3`
  width: 100%;
  text-decoration: underline;
  align-self: flex-end;
  bottom: 0;
  margin: 5rem;
  text-align: left;
  font-size: 1rem;
  width: 90%;
  font-family: "Special Elite", cursive;
  color: #1c6e8c;
`
const H1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  max-width: 100%;
  font-family: "Special Elite", cursive;
  color: #0f0a0a;
`
const LI = styled.li `
list-style: none;
text-align: center;
font-size: 1.2rem;
`