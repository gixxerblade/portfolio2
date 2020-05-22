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
      <div style={{ marginBottom: ".5rem" }}>
        <Selfie />
      </div>
      <StyH1>About Me</StyH1>
      <StyH2>
        I’m a product focused Javascript developer and entrepreneur based in
        North Carolina. After my tenure with Marine Corps, I shifted focus to
        the technology sector and obtained a Bachelors of Science in Information
        Technology. Not one to leave anything to chance, along with the passion
        to become the best version of me, I signed up for a program named{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1c6e8c" }}
          href="www.vetswhocode.io"
        >
          Vets Who Code
        </a>
        . I went through their course work to learn not only how to become a
        better programmer but to actually understand the craft of building
        products for the web with a{" "}
        <span style={{ textDecoration: "underline" }}>team</span>. When I was
        not learning I focused on building a company named{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1c6e8c" }}
          href="www.angrypickles.com"
        >
          Angry Pickles.
        </a>
        . I am proud to have built a product from scratch that actually provides
        revenue and makes people happy. When I am not building, learning or
        making pickles, I am an avid Cyclist and Gardener.
      </StyH2>
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

export default About
const StyH3 = styled.h3`
  width: 100%;
  text-decoration: underline;
  align-self: flex-end;
  bottom: 0;
  margin: 1rem;
  text-align: left;
  font-size: 1rem;
  width: 90%;
  font-family: "Roboto";
  color: ${({ theme: { color } }) => color.blue};
`
const StyH2 = styled.h2`
  margin: 1rem;
  text-align: justify;
  font-size: 1.2rem;
  max-width: 100%;
  font-family: "Roboto";
  color: ${({ theme: { color } }) => color.orange};
`

const StyH1 = styled.h1`
  margin: 0 0 0 0;
  text-align: center;
  font-size: 2rem;
  max-width: 100%;
  font-family: "Roboto";
  color: ${({ theme: { color } }) => color.blue};
  text-decoration: underline overline ${({ theme: { color } }) => color.orange};
`
const Div = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
  position: relative;
  height: 90vh;
  font-family: "Roboto";
`
