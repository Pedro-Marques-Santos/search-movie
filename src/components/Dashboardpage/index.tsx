"use client";

import { AuthenticationMyUserContext } from "@/context/authenticationUser";
import { useCallback, useContext, useEffect, useState } from "react";
import { Container, ContentContainer } from "./styles";
import { Header } from "@/components/Header";
import { Bestmovies } from "@/components/AllBestMovies/Bestmovies";
import { Documentaries } from "@/components/AllDocumentaries/Documentaries";
import { CommomCaroussel } from "@/components/AllCommomCaroussel/CommomCaroussel";
import { DxxRecommend } from "@/components/AllDxxRecommend/DxxRecommend";
import { Footer } from "@/components/AllFooter/Footer";
import { NavBarMenu } from "@/components/NavBarAllMenuComponents/NavBarMenu";
import { BackgroundGray } from "@/components/BackgroudGray";
import { resquestGenresMyRecommend } from "./requestMyRecommend";
import { GifCenter } from "../Gif/GifCenter";

interface IDashboardPage {
  genreDrame: [];
  genreCrime: [];
  genreComedy: [];
  genreRandom: [];
  genreDocumentariesOne: [];
  genreDocumentariesTwo: [];
  genreBestmovies: [];
}

interface ImemorizedValue {
  index0: string;
  index1: string;
}

export default function DashboardPage({
  genreDrame,
  genreCrime,
  genreComedy,
  genreRandom,
  genreDocumentariesOne,
  genreDocumentariesTwo,
  genreBestmovies,
}: IDashboardPage) {
  const { userProfile } = useContext(AuthenticationMyUserContext);
  const [stateNavBarMenu, setStateNavBarMenu] = useState(false);

  const [stateLoadingLogin, setStateLoadingLogin] = useState(false);

  const [genreMyRecommendOne, setGenreMyRecommendOne] = useState<[]>([]);
  const [genreMyRecommendTwo, setGenreMyRecommendTwo] = useState<[]>([]);

  const memorizedValue = useCallback((recommends: string[]) => {
    const numerosAleatorios = [] as string[];
    const valoresPossiveis = recommends;

    while (numerosAleatorios.length < 2) {
      const numeroAleatorio =
        valoresPossiveis[Math.floor(Math.random() * valoresPossiveis.length)];
      if (!numerosAleatorios.includes(numeroAleatorio)) {
        numerosAleatorios.push(numeroAleatorio);
      }
    }
    return numerosAleatorios;
  }, []);

  useEffect(() => {
    if (userProfile && userProfile.id && userProfile.recommend) {
      const randomMyGenreRecommend = memorizedValue(userProfile.recommend);
      randomMyGenreRecommend.map(async (genre, index) => {
        if (index === 0) {
          const genreRecommend = await resquestGenresMyRecommend(genre);
          setGenreMyRecommendOne(genreRecommend);
        }
        if (index === 1) {
          const genreRecommend = await resquestGenresMyRecommend(genre);
          setGenreMyRecommendTwo(genreRecommend);
        }
      });
    }
  }, [memorizedValue, userProfile]);

  function openAndCloseNavBarMenu() {
    setStateNavBarMenu(!stateNavBarMenu);
  }

  function stateTrueLoanding() {
    setStateLoadingLogin(true);
  }

  console.log(genreMyRecommendOne, genreMyRecommendTwo);

  return (
    <>
      <Header modifyStateNavBarMenu={openAndCloseNavBarMenu} />
      <NavBarMenu
        stateNavBarMenu={stateNavBarMenu ? 1 : undefined}
        openAndCloseNavBarMenu={openAndCloseNavBarMenu}
      />
      <BackgroundGray stateNavBarMenu={stateNavBarMenu} />
      <ContentContainer>
        <Container>
          <Bestmovies
            genreOne={genreBestmovies}
            stateTrueLoanding={stateTrueLoanding}
          />
          <Documentaries
            genreOne={genreDocumentariesOne}
            genreTwo={genreDocumentariesTwo}
            stateTrueLoanding={stateTrueLoanding}
          />
          <CommomCaroussel
            typyMovieAndSeries="Drame and Crime series and movies"
            genreOne={genreDrame}
            genreTwo={genreCrime}
            stateTrueLoanding={stateTrueLoanding}
          />
          <CommomCaroussel
            typyMovieAndSeries="Comedy series and movies"
            genreOne={genreComedy}
            stateTrueLoanding={stateTrueLoanding}
          />
          <DxxRecommend
            genreOne={genreRandom}
            stateTrueLoanding={stateTrueLoanding}
          />
          {userProfile.id ? (
            <CommomCaroussel
              typyMovieAndSeries="Recommended for you"
              genreOne={genreMyRecommendOne}
              genreTwo={genreMyRecommendTwo}
              stateTrueLoanding={stateTrueLoanding}
            />
          ) : null}
          <Footer />
        </Container>
        {stateLoadingLogin ? (
          <GifCenter top="50%" left="50%" width={"38px"} height={"38px"} />
        ) : (
          <></>
        )}
      </ContentContainer>
    </>
  );
}
