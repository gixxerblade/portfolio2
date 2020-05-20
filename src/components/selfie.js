import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
const Selfie = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "selfie.jpg" }) {
        selfie: childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return <Pic fluid={data.file.selfie.fluid} fadeIn={true} />
}

export default Selfie

const Pic = styled(Img) `
width: 100px;
border-radius: 50%;
border: 1px solid #d96c06;
margin: .5rem;
`