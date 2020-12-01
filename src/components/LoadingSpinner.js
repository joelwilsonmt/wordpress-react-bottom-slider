import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  max-height: 100%;
  margin: 0 auto;
  text-align: center;
`

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  width: 50px;
  height: 50px;
  & .path {
    stroke: ${props => props.color ? props.color : "#fc5b30"};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`

export default ({ color, ...props }) => <Wrapper>
  <StyledSpinner {...props} viewBox="0 0 50 50" color={color}>
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>
</Wrapper>
