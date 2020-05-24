import styled from "styled-components"

const withStyledIcon = icon => {
  return styled(icon)`
  color: ${props => props.theme.colors.blue};
    width: 4rem;
    &:hover {
      color: ${props => props.theme.colors.orange};
      transition: linear 0.2s;
      transform: scale(1.2);
    }
  `
}
export default withStyledIcon
