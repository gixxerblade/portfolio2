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
const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
export default Theme
