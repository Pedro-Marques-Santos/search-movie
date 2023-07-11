"use client";

import { AuthenticationMyUserContext } from "@/context/authenticationUser";
import { useContext, useEffect, useState } from "react";
import { Container, ContentContainer } from "./styles";
import { Header } from "@/components/Header";
import { Bestmovies } from "@/components/AllBestMovies/Bestmovies";
import { Documentaries } from "@/components/AllDocumentaries/Documentaries";
import { CommomCaroussel } from "@/components/AllCommomCaroussel/CommomCaroussel";
import { DxxRecommend } from "@/components/AllDxxRecommend/DxxRecommend";
import { Footer } from "@/components/AllFooter/Footer";
import { NavBarMenu } from "@/components/NavBarAllMenuComponents/NavBarMenu";
import { BackgroundGray } from "@/components/BackgroudGray";

interface IDashboardPage {
  genreDrame: [];
  genreCrime: [];
  genreComedy: [];
  genreRandom: [];
  genreDocumentariesOne: [];
  genreDocumentariesTwo: [];
  genreBestmovies: [];
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

  function openAndCloseNavBarMenu() {
    setStateNavBarMenu(!stateNavBarMenu);
  }

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
          <Bestmovies genreOne={genreBestmovies} />
          <Documentaries
            genreOne={genreDocumentariesOne}
            genreTwo={genreDocumentariesTwo}
          />
          <CommomCaroussel
            typyMovieAndSeries="Drame and Crime series and movies"
            genreOne={genreDrame}
            genreTwo={genreCrime}
          />
          <CommomCaroussel
            typyMovieAndSeries="Comedy series and movies"
            genreOne={genreComedy}
          />
          <DxxRecommend genreOne={genreRandom} />
          {/* <CommomCaroussel typyMovieAndSeries="Recommended for you" /> */}
          <Footer />
        </Container>
      </ContentContainer>
    </>
  );
}
