"use server";

import {
  resquestGenresBestmovies,
  resquestGenresComedy,
  resquestGenresCrime,
  resquestGenresDocumentariesOne,
  resquestGenresDocumentariesTwo,
  resquestGenresDrame,
  resquestGenresRamdom,
} from "@/api/requestDrameAndCrime";
import DashboardPage from "@/components/Dashboardpage";

export interface IGenres {
  name: string;
}

export interface IGenreMoviesAndSeries {
  title: string;
  backdropURLs: {
    original: string;
  };
  posterURLs: {
    original: string;
    154: string;
    342: string;
    500: string;
  };
  overview: string;
  genres: IGenres[];
  type: string;
}

export default async function Home() {
  const genreDrame = await resquestGenresDrame();
  const genreCrime = await resquestGenresCrime();
  const genreComedy = await resquestGenresComedy();
  const genreRandom = await resquestGenresRamdom();
  const genreDocumentariesOne = await resquestGenresDocumentariesOne();
  const genreDocumentariesTwo = await resquestGenresDocumentariesTwo();
  const genreBestmovies = await resquestGenresBestmovies();

  return (
    <>
      <DashboardPage
        genreComedy={genreComedy}
        genreDrame={genreDrame}
        genreCrime={genreCrime}
        genreRandom={genreRandom}
        genreDocumentariesOne={genreDocumentariesOne}
        genreDocumentariesTwo={genreDocumentariesTwo}
        genreBestmovies={genreBestmovies}
      />
    </>
  );
}
