"use client";

import { styled } from "styled-components";

export const ContentContainer = styled.div`
  height: 100vh;
`;

interface IBackgroundGray {
  statenavbarmenu: boolean;
}

export const Container = styled.div`
  max-width: 1296px;
  padding-left: 8px;
  padding-right: 8px;
  margin: 0 auto;
  padding-top: 40px;
  @media (max-width: 550px) {
    padding-top: 60px;
  }
`;
