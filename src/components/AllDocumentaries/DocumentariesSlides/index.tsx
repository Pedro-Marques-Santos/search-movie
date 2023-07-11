"use client";

import { useRouter } from "next/navigation";
import { ImgDocumentaries } from "../ImgDocumentaries";
import { Container, Title, EndSlide } from "./styles";
import { useContext } from "react";
import { MyMovieAndSerieContext } from "@/context/myMovieAndSerie";
import { IGenreMoviesAndSeries } from "@/app/dashboard/page";

interface IDocumentariesSlides {
  img: string;
  title: string;
  drame: IGenreMoviesAndSeries;
}

export function DocumentariesSlides({
  img,
  title,
  drame,
}: IDocumentariesSlides) {
  const { modifyMyMovieAndSerie } = useContext(MyMovieAndSerieContext);

  const router = useRouter();

  function searchMovieOrSerieWatch(title: string) {
    modifyMyMovieAndSerie(drame);
    const tokentitle = encodeURI(title);
    router.push(`/resultwatch/${tokentitle}`);
  }

  return (
    <Container onClick={() => searchMovieOrSerieWatch(title)}>
      <ImgDocumentaries img={img} />
      <Title>{title}</Title>
      <EndSlide>Documentary</EndSlide>
    </Container>
  );
}
