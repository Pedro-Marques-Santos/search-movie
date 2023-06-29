"use client";

import { Container } from "./styles";

import Image from "next/image";

export function ImgCard() {
  return (
    <Container>
      <Image
        src={"https://image.tmdb.org/t/p/w780/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg"}
        alt="movie"
        width={360}
        height={202.8}
        style={{
          width: "100%",
          minWidth: "58px",
          height: "auto",
        }}
      />
    </Container>
  );
}
