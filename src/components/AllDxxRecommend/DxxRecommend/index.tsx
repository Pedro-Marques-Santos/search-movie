"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";
import { IGenreMoviesAndSeries } from "@/app/dashboard/page";
import { DxxRecommendSlides } from "../DxxRecommendSlides";
import { Container, ContainerSlides } from "./styles";

import { MyMovieAndSerieContext } from "@/context/myMovieAndSerie";

interface IDxxRecommend {
  genreOne: [];
  stateTrueLoanding: () => void;
}

export function DxxRecommend({ genreOne, stateTrueLoanding }: IDxxRecommend) {
  const { modifyMyMovieAndSerie } = useContext(MyMovieAndSerieContext);

  const router = useRouter();

  function searchMovieOrSerieWatch(
    title: string,
    drame: IGenreMoviesAndSeries
  ) {
    stateTrueLoanding();
    modifyMyMovieAndSerie(drame);
    const tokentitle = encodeURI(title);
    router.push(`/resultwatch?search=${tokentitle}`);
  }

  return (
    <Container>
      <h1>8 movies and series recommended by DXX</h1>
      <ContainerSlides>
        {genreOne?.map((drame: IGenreMoviesAndSeries, index) => {
          return (
            <div
              key={index}
              onClick={() => searchMovieOrSerieWatch(drame.title, drame)}
            >
              {drame.backdropURLs.original === undefined ? null : (
                <DxxRecommendSlides
                  title={drame.title}
                  img={drame.backdropURLs.original}
                />
              )}
            </div>
          );
        })}
      </ContainerSlides>
    </Container>
  );
}
