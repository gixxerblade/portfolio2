import React from "react"
import styled from "styled-components"
import { Link, animateScroll as scroll } from "react-scroll"

const Work = () => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <Div id="work">
      <H1>Work</H1>
      <H3>A listing of all my work will go here.</H3>
      <H3>Probably some boxes or something...</H3>
      <Link
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={scrollToTop}
      >
        <GoHomeH3>Go Home</GoHomeH3>
      </Link>
    </Div>
  )
}
export default Work

const Div = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
  position: relative;
  height: 90vh;
  font-family: "Special Elite", cursive;
`
const H3 = styled.h3`
  text-align: center;
  font-size: 1rem;
  font-family: "Special Elite", cursive;
  color: #0f0a0a;
`

const GoHomeH3 = styled.h3`
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
