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
        <BlueDiv>Hi, my name is Stephen.</BlueDiv>
        <br />
        <OrangeDiv>I'm a JavaScript Developer.</OrangeDiv>
        <br />
        <BlueDiv>I design websites.</BlueDiv>
        <br />
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
  font-family: "Roboto";
  color: ${props => props.theme.colors.black};
  @media only screen and (min-width: 320px) and (max-width: 1224px) {
    font-size: 2rem;
    text-align: center;
  }
`
const OrangeDiv = styled.div`
  color: ${props => props.theme.colors.orange};
`
const BlueDiv = styled.div`
  color: ${props => props.theme.colors.blue};
`
