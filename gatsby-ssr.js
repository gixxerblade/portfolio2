/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    black: "#0f0a0a",
    white: "#f5efed",
    green: "#92bfb1",
    blue: "#1c6e8c",
    orange: "#d96c06",
  },
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
