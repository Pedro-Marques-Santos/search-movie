import { styled } from "styled-components";

interface IContainer {
  statenavbarmenu?: number | undefined;
}

export const Container = styled.div<IContainer>`
  width: 100%;
  display: ${({ statenavbarmenu }) =>
    statenavbarmenu === 1 ? "black" : "none"};
  background: ${({ statenavbarmenu }) =>
    statenavbarmenu === 1 ? "var(--blur)" : "none"};
  z-index: 999;
  position: fixed;
  height: 100vh;
`;
