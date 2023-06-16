"use client";

import { roboto } from "@/fonts/my-fonts";
import styled from "styled-components";

export const ContentContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: 8px;
  padding-right: 8px;
`;

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  max-width: 350px;
  button {
    height: 45px;
    border-radius: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--red-500);
    color: var(--white);

    font-weight: 500;
    font-family: ${roboto.style.fontFamily};
  }

  button:hover {
    background: var(--red-700);
  }
`;

export const Icon = styled.div`
  margin-right: 2px;
`;

export const Img = styled.div``;