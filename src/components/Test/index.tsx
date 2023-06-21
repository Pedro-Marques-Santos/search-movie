/* eslint-disable @next/next/no-img-element */
"use client";
import { styled } from "styled-components";

import Image from "next/image";

export const Container = styled.div`
  margin-top: 100px;

  position: relative;
  display: flex;
  width: auto;
  max-width: 553.11px;
  height: auto;
  min-height: 200px;
  max-height: 500px;
  /* object-fit: contain; */

  /* img {
    display: flex;
    width: 100%;
    max-width: 440px;
    height: auto;
    min-height: 200px;
    max-height: 400px;
  } */
`;

export function Test() {
  return (
    <Container>
      <Image
        src={"https://image.tmdb.org/t/p/w780/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg"}
        alt="movie"
        width={553.11}
        height={268.41}
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "268.41px",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      />
    </Container>
  );
}
