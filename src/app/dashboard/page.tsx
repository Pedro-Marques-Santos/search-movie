"use client";

import { AuthenticationMyUserContext } from "@/context/authenticationUser";
import { useContext, useEffect } from "react";
import { Container, ContentContainer } from "./styles";
import { Header } from "@/components/Header";
import { Bestmovies } from "@/components/AllBestMovies/Bestmovies";
import { Test } from "@/components/Test";
import { Documentaries } from "@/components/AllDocumentaries/Documentaries";
import { WarAndCrime } from "@/components/AllWarAndCrime/WarAndCrime/inddex";
import { ComdyAndFamily } from "@/components/AllComedyAndFamily/ComedyAndFamily";

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
        <WarAndCrime />
        <ComdyAndFamily />
      </Container>
    </ContentContainer>
  );
}
