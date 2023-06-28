"use client";

import { styled } from "styled-components";

export const Container = styled.div`
  height: auto;
  max-height: 140px;
  margin-top: 50px;
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
