"use client";

import { AboutBestmovies } from "../AboutBestmovies";
import { ImgBestmovies } from "../ImgBestmovies";
import { Container } from "./styles";

interface IBestmodivesSlides {
  typeCarrousel: string;
  title: string;
  img: string;
  about: string;
}

export function BestmoviesSlides({
  typeCarrousel = "standard",
  title,
  img,
  about,
}: IBestmodivesSlides) {
  return (
    <>
      {typeCarrousel === "standard" && (
        <Container>
          <AboutBestmovies
            typeCarrousel={"standard"}
            title={title}
            about={about}
          />
          <ImgBestmovies typeCarrousel={"standard"} img={img} />
        </Container>
      )}
      {typeCarrousel === "firstimgslide" && (
        <Container>
          <ImgBestmovies typeCarrousel={"firstimgslide"} img={img} />
          <AboutBestmovies
            typeCarrousel={"firstimgslide"}
            title={title}
            about={about}
          />
        </Container>
      )}
    </>
  );
}
