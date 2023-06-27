import { styled } from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
  h1 {
    color: var(--white-200);
    font-size: 16.5px;
    font-weight: 600;
    line-height: 11px;
    margin-bottom: 20px;
  }
  @media (max-width: 550px) {
    margin-top: 40px;
  }
`;

export const ContainerSlides = styled.div`
  display: grid;
  grid: auto / 1fr 1fr 1fr 1fr;
  @media (max-width: 1000px) {
    grid: auto / 1fr 1fr 1fr;
  }
  @media (max-width: 730px) {
    grid: auto / 1fr 1fr;
    justify-items: center;
  }
  @media (max-width: 500px) {
    grid: auto / 1fr;
    justify-items: center;
  }
  gap: 20px;
`;
