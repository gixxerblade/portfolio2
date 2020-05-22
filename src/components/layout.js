/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"
import Theme from '../assets/theme'
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Theme>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Div>
        <Main>{children}</Main>
        <Footer>
          © {new Date().getFullYear()}&nbsp;
          <span>Stephen Clark</span>
        </Footer>
      </Div>
    </Theme>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Div = styled.div`
  font-family: "Roboto";
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: ${({ theme: { color } }) => color.white};
`
const Main = styled.main`
  flex: 1 0 auto;
  font-family: "Roboto";
`
const Footer = styled.footer`
  flex-shrink: 0;
  padding: 20px;
  color: ${({ theme: { color } }) => color.black};
  background: ${({ theme: { color } }) => color.white};
  border-top: solid ${({ theme: { color } }) => color.black}; 1px;
  font-family: "Roboto";
`
