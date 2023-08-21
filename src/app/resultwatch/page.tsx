"use client";
import { CardResultWatch } from "@/components/ResultWatchComponents/CardResultWatch/Card";
import { Container, ErrorAndWarning } from "./styles";
import { Header } from "@/components/Header";
import { useContext, useState } from "react";
import { NavBarMenu } from "@/components/NavBarAllMenuComponents/NavBarMenu";
import { BackgroundGray } from "@/components/BackgroudGray";
import { MyMovieAndSerieContext } from "@/context/myMovieAndSerie";
import { Video } from "@/components/resultwatch-components/Video";

export default function Home() {
  const { myResultMovieAndSerie } = useContext(MyMovieAndSerieContext);
  const [stateNavBarMenu, setStateNavBarMenu] = useState(false);

  function openAndCloseNavBarMenu() {
    setStateNavBarMenu(!stateNavBarMenu);
  }

  const streamings = myResultMovieAndSerie
    ? Object.keys(myResultMovieAndSerie.streamingInfo.us)
    : null;

  return (
    <>
      <NavBarMenu
        stateNavBarMenu={stateNavBarMenu ? 1 : undefined}
        openAndCloseNavBarMenu={openAndCloseNavBarMenu}
      />
      <Header modifyStateNavBarMenu={openAndCloseNavBarMenu} />
      <BackgroundGray stateNavBarMenu={stateNavBarMenu} />
      <Container>
        {myResultMovieAndSerie ? (
          <>
            <CardResultWatch
              title={myResultMovieAndSerie.title}
              overview={myResultMovieAndSerie.overview}
              backdropURLs={myResultMovieAndSerie.backdropURLs}
              genres={myResultMovieAndSerie.genres}
              type={myResultMovieAndSerie.type}
              streamings={streamings}
            />
            {myResultMovieAndSerie.youtubeTrailerVideoId && (
              <Video
                youtubeTrailerVideoId={
                  myResultMovieAndSerie.youtubeTrailerVideoId
                }
              />
            )}
          </>
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
