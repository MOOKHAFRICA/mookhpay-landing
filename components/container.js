import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding-right: 42px;
  padding-left: 42px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (max-width: 576px) {
    max-width: 540px;
    padding-right: 14px;
    padding-left: 14px;
  }
  ${({ auth }) =>
    auth &&
    css`
      @media (max-width: 576px) {
        max-width: 540px;
        padding-right: 7px;
        padding-left: 7px;
      }
    `}
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1500px;
  }
`;

function Container({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
}

export default Container;
