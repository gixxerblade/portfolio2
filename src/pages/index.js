import React from "react"
import { Router } from "@reach/router"
import Home from "./home"
import Cover from "./cover"
import NotFoundPage from "./404"
import About from "./about"
import Contact from "./contact"
import Work from "./work"
import Blog from "./blog"
const IndexPage = () => (
  <Router>
    <Cover path="/" />
    <Home path="/home">
      <About path="about" />
      <Contact path="contact" />
      <Work path="work" />
    </Home>
    <Blog path="/blog" />
    <NotFoundPage default />
  </Router>
)

export default IndexPage
