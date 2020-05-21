import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import About from "./about"
import Contact from "./contact"
import Work from "./work"
const Home = () => {
  return (
    <Layout>
      <StyH1 id="home">
        <div style={{ color: "#1c6e8c" }}>Hi, my name is Stephen.</div>
        <br />
        <div style={{ color: "#d96c06" }}>I'm a JavaScript Developer.</div>
        <br />
        <div style={{ color: "#1c6e8c" }}>I design websites.</div>
        <br />
        <div style={{ color: "#d96c06" }}>
          I'm also a Retired Marine Veteran.
        </div>
        <br />
        {/*         <Image />
         */}{" "}
      </StyH1>
      <About />
      <Work />
      <Contact />
    </Layout>
  )
}
export default Home

const StyH1 = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3rem;
  text-align: center;
  font-size: 2rem;
  max-width: 100%;
  height: 100vh;
  font-family: "Special Elite", cursive;
  color: #0f0a0a;
  @media only screen and (min-width: 320px) and (max-width: 1224px) {
    font-size: 2rem;
    text-align: center;
  }
`
