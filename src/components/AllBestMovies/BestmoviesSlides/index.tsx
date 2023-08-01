"use client";

import { useContext, useState } from "react";
import { AboutBestmovies } from "../AboutBestmovies";
import { ImgBestmovies } from "../ImgBestmovies";
import { Container } from "./styles";
import { MyMovieAndSerieContext } from "@/context/myMovieAndSerie";

import { useRouter } from "next/navigation";
import { IGenreMoviesAndSeries } from "@/app/dashboard/page";

interface IBestmodivesSlides {
  typeCarrousel: string;
  title: string;
  img: string;
  about: string;
  drame: IGenreMoviesAndSeries;
  stateTrueLoanding: () => void;
}

export function BestmoviesSlides({
  typeCarrousel = "standard",
  title,
  img,
  about,
  drame,
  stateTrueLoanding,
}: IBestmodivesSlides) {
  const { modifyMyMovieAndSerie } = useContext(MyMovieAndSerieContext);

  const router = useRouter();

  function searchMovieOrSerieWatch(title: string) {
    stateTrueLoanding();
    modifyMyMovieAndSerie(drame);
    const tokentitle = encodeURI(title);
    router.push(`/resultwatch?search=${tokentitle}`);
  }

  return (
    <>
      {typeCarrousel === "standard" && (
        <Container onClick={() => searchMovieOrSerieWatch(title)}>
          <AboutBestmovies
            typeCarrousel={"standard"}
            title={title}
            about={about}
          />
          <ImgBestmovies typeCarrousel={"standard"} img={img} />
        </Container>
      )}
      {typeCarrousel === "firstimgslide" && (
        <Container onClick={() => searchMovieOrSerieWatch("the batman")}>
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
