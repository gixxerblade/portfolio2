import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
const Blog = () => {
  return (
    <Layout>
      <H1>Here shall be my dev.to posts.</H1>
      <H3>Harnessing Gatsby's createPages function</H3>
      <ul>
        <LI>dev.to post 1</LI>
        <LI>dev.to post 2</LI>
        <LI>dev.to post 3</LI>
        <LI>...rest 😎</LI>
      </ul>
    </Layout>
  )
}
export default Blog

const H1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  max-width: 100%;
  font-family: "Special Elite", cursive;
  color: #0f0a0a;
`
const H3 = styled.h3`
  text-align: center;
  font-size: 1rem;
  font-family: "Special Elite", cursive;
  color: #0f0a0a;
`
const LI = styled.li`
  list-style: none;
  text-align: center;
  font-size: 1.2rem;
`
