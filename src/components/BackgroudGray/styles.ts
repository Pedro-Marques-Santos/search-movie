import { styled } from "styled-components";

interface IContainer {
  statenavbarmenu: boolean;
}

export const Container = styled.div<IContainer>`
  width: 100%;
  display: ${(props) => (props.statenavbarmenu ? "black" : "none")};
  background: ${(props) => (props.statenavbarmenu ? "var(--blur)" : "none")};
  z-index: 999;
  position: fixed;
  height: 100vh;
`;
