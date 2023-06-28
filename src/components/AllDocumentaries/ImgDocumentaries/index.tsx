"use client";

import { Container } from "./styles";

import Image from "next/image";

export function ImgDocumentaries() {
  return (
    <Container>
      <Image
        src={"https://image.tmdb.org/t/p/w300/bfpwVLuKV7LSKKUZq60wDFS7Es6.jpg"}
        alt="movie"
        width={300}
        height={160}
        style={{
          margin: "5px",
          width: "50%",
          minWidth: "58px",
          height: "auto",
          maxHeight: "47.88",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
      />
    </Container>
  );
}
