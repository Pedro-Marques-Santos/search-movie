"use client";

import { Container } from "./styles";

import Image from "next/image";

interface IImgSlideSearch {
  img: string;
}

export function ImgSlidesSearch({ img }: IImgSlideSearch) {
  return (
    <Container>
      <Image
        src={img}
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
