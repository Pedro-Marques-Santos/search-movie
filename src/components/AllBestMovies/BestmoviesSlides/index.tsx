"use client";

import { AboutBestmovies } from "../AboutBestmovies";
import { ImgBestmovies } from "../ImgBestmovies";
import { Container } from "./styles";

interface IBestmodivesSlides {
  typeCarrousel: string;
}

export function BestmoviesSlides({
  typeCarrousel = "standard",
}: IBestmodivesSlides) {
  return (
    <>
      {typeCarrousel === "standard" && (
        <Container>
          <AboutBestmovies typeCarrousel={"standard"} />
          <ImgBestmovies typeCarrousel={"standard"} />
        </Container>
      )}
      {typeCarrousel === "firstimgslide" && (
        <Container>
          <ImgBestmovies typeCarrousel={"firstimgslide"} />
          <AboutBestmovies typeCarrousel={"firstimgslide"} />
        </Container>
      )}
    </>
  );
}
