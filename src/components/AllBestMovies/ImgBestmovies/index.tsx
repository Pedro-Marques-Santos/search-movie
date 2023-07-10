"use client";

import { Container } from "./styles";

import Image from "next/image";

interface ImgBestmovies {
  typeCarrousel: string;
  img: string;
}

export function ImgBestmovies({
  typeCarrousel = "standard",
  img,
}: ImgBestmovies) {
  return (
    <Container>
      {typeCarrousel === "standard" && (
        <>
          <Image
            src={img}
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
            className="carousel-Bestmovies"
          />
          <h1>The Batman</h1>
        </>
      )}
      {typeCarrousel === "firstimgslide" && (
        <>
          <Image
            src={img}
            alt="movie"
            width={553.11}
            height={268.41}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "268.41px",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
            className="carousel-Bestmovies"
          />
          <h1>The Batman</h1>
        </>
      )}
    </Container>
  );
}
