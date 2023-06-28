"use client";

import { styled } from "styled-components";

export const Container = styled.div`
  width: 73%;
  display: flex;
  height: auto;
  max-height: 268.41px;
  min-height: 80px;
  @media (max-width: 550px) {
    width: 100%;
  }

  h1 {
    display: none;
    font-size: 14.5px;
    position: absolute;
    top: 70%;
    left: 15%;
    color: white;
    text-shadow: black 0.1em 0.1em 0.2em;
    @media (max-width: 550px) {
      display: block;

      font-size: 12.9px;
    }
  }
`;
