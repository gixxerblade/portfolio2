import React from "react"
import { Router } from "@reach/router"
import Home from "./home"
import Cover from "./cover"
import NotFoundPage from "./404"
import About from "./about"
const IndexPage = () => (
  <Router>
    <Cover path="/" />
    <Home path="/home">
      <About path="/about" />
    </Home>
    <NotFoundPage default />
  </Router>
)

export default IndexPage
