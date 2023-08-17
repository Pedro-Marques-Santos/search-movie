import { styled } from "styled-components";

interface IContainer {
  statenavbarmenu?: number;
}

export const ContentContainer = styled.div<IContainer>`
  height: 100%;
  width: 100%;
  max-width: 400px;
  position: fixed;
  z-index: 10000;

  visibility: ${({ statenavbarmenu }) =>
    statenavbarmenu === 1 ? "visible" : "hidden"};
  opacity: ${({ statenavbarmenu }) => (statenavbarmenu === 1 ? "1" : "0")};
  transition: 0.4s;
  background: var(--black-800);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8%;
  height: 100%;
`;
