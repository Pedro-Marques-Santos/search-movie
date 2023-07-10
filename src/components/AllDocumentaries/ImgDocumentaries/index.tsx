"use client";

import { Container } from "./styles";

import Image from "next/image";

interface IImgDocumentaries {
  img: string;
}

export function ImgDocumentaries({ img }: IImgDocumentaries) {
  return (
    <Container>
      <Image
        src={img}
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
