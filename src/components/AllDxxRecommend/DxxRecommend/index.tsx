"use client";

import { IGenreMoviesAndSeries } from "@/app/dashboard/page";
import { DxxRecommendSlides } from "../DxxRecommendSlides";
import { Container, ContainerSlides } from "./styles";

interface IDxxRecommend {
  genreOne: [];
}

export function DxxRecommend({ genreOne }: IDxxRecommend) {
  return (
    <Container>
      <h1>8 movies and series recommended by DXX</h1>
      <ContainerSlides>
        {genreOne?.map((drame: IGenreMoviesAndSeries, index) => {
          return (
            <>
              {drame.backdropURLs.original === undefined ? null : (
                <div key={index}>
                  <DxxRecommendSlides
                    title={drame.title}
                    img={drame.backdropURLs.original}
                  />
                </div>
              )}
            </>
          );
        })}
      </ContainerSlides>
    </Container>
  );
}
