"use client";

import { IGenreMoviesAndSeries } from "@/app/dashboard/page";
import { createContext, ReactNode, useState } from "react";

interface MyMovieAndSerieProviderProps {
  children: ReactNode;
}

type TMyMovieAndSerieContextProps = {
  myResultMovieAndSerie: IGenreMoviesAndSeries | null;
  modifyMyMovieAndSerie: (drame: IGenreMoviesAndSeries) => void;
};

export const MyMovieAndSerieContext =
  createContext<TMyMovieAndSerieContextProps>(
    {} as TMyMovieAndSerieContextProps
  );

export function MyMovieAndSerieProvider({
  children,
}: MyMovieAndSerieProviderProps) {
  const [myResultMovieAndSerie, setMyResultMovieAndSerie] =
    useState<IGenreMoviesAndSeries | null>(null);

  function modifyMyMovieAndSerie(drame: IGenreMoviesAndSeries) {
    setMyResultMovieAndSerie(drame);
  }

  console.log(myResultMovieAndSerie);

  return (
    <MyMovieAndSerieContext.Provider
      value={{
        modifyMyMovieAndSerie,
        myResultMovieAndSerie,
      }}
    >
      {children}
    </MyMovieAndSerieContext.Provider>
  );
}
