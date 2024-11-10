import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 2.4rem;
      line-height: 3.2rem;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      line-height: 2.8rem;
    `}

${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.8rem;
      line-height: 2.4rem;
    `}

${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.6rem;
      line-height: 2.2rem;
    `}
`;

export default Heading;
