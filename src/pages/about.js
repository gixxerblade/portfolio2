// Gatsby supports TypeScript natively!
import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import { Link, animateScroll as scroll } from "react-scroll"
import Selfie from "../components/selfie"
const About = () => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <Div id="about">
      <SEO title="About page" />
      <Selfie />
      <StyH1>About Me</StyH1>
      <StyH2>
        I am retired from the United States Marine Corps and live in North
        Carolina. I have a bachelor's of science in Information Technology and
        have completed{" "}
        <a style={{ color: "#1c6e8c" }} href="www.angrypickles.com">
          Vets Who Code,&nbsp;
        </a>
        a web development training program. I am an avid cyclist and like to get
        my hands dirty in the garden. I have created a small business where I
        make gourmet pickles named&nbsp;
        <a style={{ color: "#1c6e8c" }} href="www.angrypickles.com">
          Angry Pickles.
        </a>
      </StyH2>
      <Link
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

export default About
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
const StyH2 = styled.h2`
  margin: 1rem;
  text-align: justify;
  font-size: 1.5rem;
  max-width: 100%;
  font-family: "Special Elite", cursive;
  color: #d96c06;
`

const StyH1 = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 2rem;
  max-width: 100%;
  font-family: "Special Elite", cursive;
  color: #1c6e8c;
  text-decoration: underline overline #d96c06;
`
const Div = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
  position: relative;
  height: 90vh;
  font-family: "Special Elite", cursive;
`
/* 
I am retired from the United States Marine Corps and live in North Carolina. I have a bachelor's of science in Information Technology and have completed Vets Who Code, a web development training program (Bootcamp). I am an avid cyclist and like to get my hands dirty in the garden. I have created a small business where I make gourmet pickles named Angry Pickles.


*/
