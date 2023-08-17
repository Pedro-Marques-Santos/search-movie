"use client";
import { MyMovieAndSerieContext } from "@/context/myMovieAndSerie";
import { Container } from "./styles";

import Image from "next/image";

import { useRouter } from "next/navigation";
import { RefObject, useContext } from "react";
import { IGenreMoviesAndSeries } from "@/app/dashboard/page";

interface ICommomCarousselSlides {
  title: string;
  img: string;
  drame: IGenreMoviesAndSeries;
  stateTrueLoanding: () => void;
}

export function CommomCarousselSlides({
  title,
  img,
  drame,
  stateTrueLoanding,
}: ICommomCarousselSlides) {
  const { modifyMyMovieAndSerie } = useContext(MyMovieAndSerieContext);

  const router = useRouter();

  function searchMovieOrSerieWatch() {
    stateTrueLoanding();
    modifyMyMovieAndSerie(drame);
    const tokentitle = encodeURI(drame.title.toString());
    router.push(`/resultwatch?search=${tokentitle}`);
  }

  return (
    <Container onClick={() => searchMovieOrSerieWatch()}>
      <Image
        src={img}
        alt="movie"
        width={250}
        height={140.83}
        style={{
          width: "100%",
          minWidth: "58px",
          maxWidth: "250px",
          height: "auto",
          maxHeight: "140.63px",
        }}
      />
      <h5>{title}</h5>
    </Container>
  );
}
