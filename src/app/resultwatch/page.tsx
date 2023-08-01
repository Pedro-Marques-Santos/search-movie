"use client";
import { CardResultWatch } from "@/components/ResultWatchComponents/CardResultWatch/Card";
import { Container, ErrorAndWarning } from "./styles";
import { Header } from "@/components/Header";
import { useContext, useState } from "react";
import { NavBarMenu } from "@/components/NavBarAllMenuComponents/NavBarMenu";
import { BackgroundGray } from "@/components/BackgroudGray";
import { MyMovieAndSerieContext } from "@/context/myMovieAndSerie";

export default function Home() {
  const { myResultMovieAndSerie } = useContext(MyMovieAndSerieContext);
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
      <Container>
        {myResultMovieAndSerie ? (
          <CardResultWatch
            title={myResultMovieAndSerie?.title}
            overview={myResultMovieAndSerie?.overview}
            backdropURLs={myResultMovieAndSerie?.backdropURLs}
            genres={myResultMovieAndSerie.genres}
            type={myResultMovieAndSerie.type}
          />
        ) : (
          <ErrorAndWarning>
            Warning: to search for movies and series on our website you need to
            select a movie on the start page
          </ErrorAndWarning>
        )}
      </Container>
    </>
  );
}
