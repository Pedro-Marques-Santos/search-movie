"use client";

import { Container } from "./styles";

import Image from "next/image";

interface IImgCard {
  img: string;
}

export function ImgCard({ img }: IImgCard) {
  return (
    <Container>
      <Image
        src={img}
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
