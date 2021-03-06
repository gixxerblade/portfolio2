import React from "react"
import styled from "styled-components"
import { Link, animateScroll as scroll } from "react-scroll"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { CodeAlt } from "@styled-icons/boxicons-regular/CodeAlt"
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal"

const Work = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "work" } }) {
        nodes {
          pic: childImageSharp {
            fixed(width: 75) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    }
  `)
  const images = data.allFile.nodes

  // Styled all icons the same
  // JSON data for making project cards
  const text = [
    {
      title: "CRUD Tutorial Application",
      description:
        "Created an application to demonstrate persistent storage using Gatsby and React, utilizing Google Firestore for data storage.",
      source:
        "https://dev.to/vetswhocode/build-a-crud-firestore-app-in-react-gatsby-with-hooks-4ig9",
      link: "https://codesandbox.io/s/gatsby-crud-tutorial-c6xs1",
      images: images[0],
    },
    {
      title: "Angry Pickles",
      description:
        "An ecommerce application to create a storefront with Gatsby, Stripe, & Netlify Functions.",
      source: "https://github.com/gixxerblade/Angry-Pickles",
      link: "https://angrypickles.com/home",
      images: images[1],
    },
    {
      title: "Profile Card Creator",
      description:
        "I wrote a tutorial for dev.to upload and fetch photos using Cloudinary",
      source:
        "https://dev.to/vetswhocode/react-tutorial-upload-and-fetch-photos-with-cloudinary-2ec9",
      link: "http://profile-card-tut.surge.sh/",
      images: images[2],
    },
  ]
  // react-scroll function to return page to the top
  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  // Map through JSON data above
  const cards = text.map((data, i) => {
    return (
      <InvoiceBox key={i}>
        <HeaderImageDiv>
          <Img fixed={data.images.pic.fixed} fadeIn={true} />
          <H3>{data.title}</H3>
        </HeaderImageDiv>
        <P>{data.description}</P>
        <div>
          <a
            href={data.source}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="code source"
          >
            <CodeAltStyled size="25" title="Source Code" />
          </a>
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="external link"
          >
            <LinkExtStyled size="25" title="Live Link" />
          </a>
        </div>
      </InvoiceBox>
    )
  })

  // JSX for Work page
  return (
    <WorkDiv id="work">
      <H1>Work</H1>
      <Div>{cards}</Div>
      <Link
        to="home"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={scrollToTop}
      >
        <GoHomeH3>Go Home</GoHomeH3>
      </Link>
    </WorkDiv>
  )
}
export default Work
const withStyledIcon = icon => {
  return styled(icon)`
    color: ${props => props.theme.colors.orange};
    &:hover {
      color: ${props => props.theme.colors.green};
    }
  `
}
const CodeAltStyled = withStyledIcon(CodeAlt)
const LinkExtStyled = withStyledIcon(LinkExternal)

// Styled Components for page.
const WorkDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: auto;
`
const HeaderImageDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`
const P = styled.p`
  font-size: 0.7rem;
  margin: 0rem 0 0 0;
`

const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: "Roboto";
`
const H3 = styled.h3`
  text-align: center;
  font-size: 1rem;
  z-index: 1;
  font-family: "Roboto";
  margin: 0 0 0.2rem 0;
  color: ${props => props.theme.colors.blue};
  box-shadow: 0 0 0.1 0.1rem rgba(15, 10, 10, 0.5);
`

const GoHomeH3 = styled.h3`
  text-decoration: underline;
  margin: 0 0 2rem 0;
  bottom: 0;
  margin: 1rem;
  text-align: center;
  font-size: 1rem;
  font-family: "Roboto";
  color: ${props => props.theme.colors.blue};
`
const H1 = styled.h1`
  margin: 0 0 0 0;
  text-align: center;
  font-size: 2rem;
  max-width: 100%;
  font-family: "Roboto";
  color: ${props => props.theme.colors.blue};
  text-decoration: underline overline ${props => props.theme.colors.orange};
`
const InvoiceBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 45%;
  height: 11rem;
  margin: 1rem;
  padding: 0.5rem;
  border: 1px solid #eee;
  box-shadow: 0 0 0.625rem rgba(15, 10, 10, 0.5);
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: "Poppins", sans-serif;
  color: ${props => props.theme.colors.blue};
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    transform: perspective(23rem) rotateX(5deg);
  }
  @media only screen and (min-width: 321px) and (max-width: 480px) {
    width: 85%;
  }
`
