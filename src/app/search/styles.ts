"use client";

import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 1296px;
  padding-left: 8px;
  padding-right: 8px;
  margin: 0 auto;
  padding-top: 100px;
  @media (max-width: 550px) {
    padding-top: 70px;
  }

  h5 {
    font-weight: 400;
    font-size: 18px;
    color: var(--white-200);
  }

  input {
    margin-top: 20px;
    background: #00000038;
    border: none;
    width: 100%;
    height: 60px;
    border-radius: 5px;
    color: var(--white);
    padding-left: 20px;
    outline: none;
  }
`;

export const ContainerSlides = styled.div`
  margin-top: 20px;
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
