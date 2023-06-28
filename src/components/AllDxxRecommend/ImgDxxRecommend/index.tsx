"use client";

import { Container } from "./styles";

import Image from "next/image";

export function ImgDxxRecommend() {
  return (
    <Container>
      <Image
        src={"https://image.tmdb.org/t/p/w780/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg"}
        alt="movie"
        width={280}
        height={157.5}
        style={{
          width: "100%",
          minWidth: "58px",
          height: "auto",
        }}
      />
    </Container>
  );
}
