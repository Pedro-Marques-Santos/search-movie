"use client";

import { Container, Img } from "./styles";

import Image from "next/image";

import loading from "../../../assets/gif/ZKZg.gif";

interface IGifCenter {
  top?: string;
  left?: string;
  width: string;
  height: string;
}

export function GifCenter({ top, left, width, height }: IGifCenter) {
  return (
    <Container top={top} left={left}>
      <Img width={width} height={height}>
        <Image src={loading} alt="loading..." fill={true} sizes="38" />
      </Img>
    </Container>
  );
}
