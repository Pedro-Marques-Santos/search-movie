"use client";

import { styled } from "styled-components";

interface IGifCenter {
  top?: string;
  left?: string;
}

export const Container = styled.div<IGifCenter>`
  position: fixed;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  z-index: 1000;
`;

interface IImg {
  width: string;
  height: string;
}

export const Img = styled.div<IImg>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
