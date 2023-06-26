"use client";

import { AuthenticationMyUserContext } from "@/context/authenticationUser";
import { useContext, useEffect } from "react";
import { Container, ContentContainer } from "./styles";
import { Header } from "@/components/Header";
import { Bestmovies } from "@/components/AllBestMovies/Bestmovies";
import { Test } from "@/components/Test";
import { Documentaries } from "@/components/AllDocumentaries/Documentaries";
import { CommomCaroussel } from "@/components/AllCommomCaroussel/CommomCaroussel";

export default function Home() {
  const { userProfile } = useContext(AuthenticationMyUserContext);

  useEffect(() => {
    if (userProfile.id !== "" && userProfile.id) {
      console.log(userProfile);
    }
  }, [userProfile, userProfile.id, userProfile.recommend.length]);

  return (
    <ContentContainer>
      <Container>
        <Header />
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
      </Container>
    </ContentContainer>
  );
}
