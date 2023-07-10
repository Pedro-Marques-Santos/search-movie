"use client";

import { Container } from "./styles";

import Image from "next/image";

interface IImgDxxRecommend {
  img: string;
}

export function ImgDxxRecommend({ img }: IImgDxxRecommend) {
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
          maxWidth: "280px",
          height: "auto",
          maxHeight: "157.5px",
        }}
      />
    </Container>
  );
}
