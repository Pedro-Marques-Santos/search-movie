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

export default function Home() {
  const { userProfile } = useContext(AuthenticationMyUserContext);
  const [stateNavBarMenu, setStateNavBarMenu] = useState(false);

  useEffect(() => {
    if (userProfile.id !== "" && userProfile.id) {
      console.log(userProfile);
    }
  }, [userProfile, userProfile.id, userProfile.recommend.length]);

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
          <Bestmovies />
          <Documentaries />
          <CommomCaroussel
            title="10 Rilington Place"
            typyMovieAndSeries="War and Crime series and movies"
          />
          <CommomCaroussel
            title="10 Rilington Place"
            typyMovieAndSeries="Comedy series and movies"
          />
          <DxxRecommend />
          <CommomCaroussel
            title="10 Rilington Place"
            typyMovieAndSeries="Recommended for you"
          />
          <Footer />
        </Container>
      </ContentContainer>
    </>
  );
}
