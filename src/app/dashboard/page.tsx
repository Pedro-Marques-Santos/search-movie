"use client";

import { AuthenticationMyUserContext } from "@/context/authenticationUser";
import { useContext, useEffect } from "react";
import { Container, ContentContainer } from "./styles";
import { Header } from "@/components/Header";

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
      </Container>
    </ContentContainer>
  );
}