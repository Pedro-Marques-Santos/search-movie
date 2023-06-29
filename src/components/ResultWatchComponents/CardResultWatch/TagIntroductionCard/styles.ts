"use client";

import { styled } from "styled-components";

export const Container = styled.div`
  padding: 20px;
  color: var(--white-200);

  h1 {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 10px;
    @media (max-height: 650px) {
      font-size: 16px;
    }
  }
  @media (max-height: 650px) {
    padding: 15px;
  }
`;

export const Introduction = styled.div`
  font-size: 13.5px;
  line-height: 18px;
  letter-spacing: 0.3px;
  text-align: justify;
  @media (max-height: 650px) {
    font-size: 12px;
  }
`;
