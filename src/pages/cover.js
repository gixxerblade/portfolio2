import React from "react"
import Typed from "react-typed"
import styled from "styled-components"
import { Link } from "gatsby"
const Cover = () => {
  return (
    <StyledBG>
      <span style={{ color: "#92d192" }}>stephenclark:</span>
      <span style={{ color: "#6AB0F3" }}>~/portfolio$&nbsp;</span>
      <Typed
        strings={["load website"]}
        showCursor={false}
        typeSpeed={40}
        style={{ color: "#ffffff" }}
      />
      <br />
      <Typed
        strings={["success open and validate configs - 0.024s"]}
        startDelay={900}
        showCursor={false}
        typeSpeed={0}
        style={{ color: "#ffffff" }}
      />
      <br />
      <Typed
        strings={["success load plugins - 0.353s"]}
        startDelay={1800}
        showCursor={false}
        typeSpeed={1}
        style={{ color: "#ffffff" }}
      />
      <br />
      <Typed
        strings={["success copy files - 0.066s"]}
        startDelay={2400}
        showCursor={false}
        typeSpeed={1}
        style={{ color: "#ffffff" }}
      />
      <br />
      <Typed
        strings={["success source and transform nodes - 0.046s"]}
        startDelay={3000}
        showCursor={false}
        typeSpeed={1}
        style={{ color: "#ffffff" }}
      />
      <br />
      <Typed
        strings={["success createPages - 0.003s"]}
        startDelay={3600}
        showCursor={false}
        typeSpeed={1}
        style={{ color: "#ffffff" }}
      />
      <br />
      <Typed
        strings={["success createPagesStatefully - 0.088s"]}
        startDelay={4200}
        showCursor={false}
        typeSpeed={1}
        style={{ color: "#ffffff" }}
      />
      <br />
      <Typed
        strings={["success onPreExtractQueries - 0.002s"]}
        startDelay={4800}
        showCursor={false}
        typeSpeed={1}
        style={{ color: "#ffffff" }}
      />
      <br />
      <Typed
        strings={["success update schema - 0.025s"]}
        startDelay={5200}
        showCursor={false}
        typeSpeed={1}
        style={{ color: "#ffffff" }}
      />
      <br />
      <Typed
        strings={["success onPostBootstrap - 0.322s"]}
        startDelay={5800}
        showCursor={false}
        typeSpeed={1}
        style={{ color: "#ffffff" }}
      />
      <br />
      <br />
      <Typed
        strings={["info bootstrap finished - 3.001s"]}
        startDelay={6200}
        showCursor={false}
        typeSpeed={1}
        style={{ color: "#ffffff" }}
      />
      <br />
      <br />
      <Typed
        strings={["success run queries - 0.032s - 7/7 216.42/s"]}
        startDelay={6800}
        showCursor={false}
        typeSpeed={1}
        style={{ color: "#ffffff" }}
      />
      <br />
      <br />
      <Typed
        strings={["You can now view stephen-clark-portfolio in the browser."]}
        startDelay={7200}
        showCursor={false}
        typeSpeed={1}
        style={{ color: "#ffffff" }}
      />
      <br />
      <br />
      <Link
        to="/home"
        style={{
          textDecoration: "underline #ffffff double",
          fontWeight: "700",
        }}
      >
        <Typed
          strings={["   https://www.stephenclark.dev/"]}
          startDelay={7300}
          showCursor={false}
          typeSpeed={1}
          style={{ color: "#92d192" }}
        />
      </Link>
    </StyledBG>
  )
}
export default Cover

const StyledBG = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #011c27;
  padding: 1rem;
  font-family: "Press Start 2P", cursive;
  font-size: 1.1rem;
  @media only screen and (min-width: 320px) and (max-width: 1224px) {
    font-size: 0.8rem;
  }
`
