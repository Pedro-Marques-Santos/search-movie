"use client";

import { styled } from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  h5 {
    font-size: 14.5px;
    position: absolute;
    top: 70%;
    left: 15%;
    color: white;
    text-shadow: black 0.1em 0.1em 0.2em;
    @media (max-width: 550px) {
      font-size: 12.9px;
    }
  }
`;
