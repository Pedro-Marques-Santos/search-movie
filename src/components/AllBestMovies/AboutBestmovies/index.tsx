"use client";

import {
  AboutMovie,
  Container,
  ContentContainer,
  Title,
  AboutMovieLocationEnd,
  Youtube,
} from "./styles";

interface IAboutBestmovies {
  typeCarrousel: string;
}

export function AboutBestmovies({ typeCarrousel }: IAboutBestmovies) {
  return (
    <ContentContainer typecaroussel={typeCarrousel}>
      <Container>
        <Title>The Batman </Title>
        <AboutMovie>
          In his second year of fighting crime, Batman uncovers corruption in
          Gotham City that connects to his own family while facing a serial
          killer known as the Riddler.
        </AboutMovie>
        <AboutMovieLocationEnd>
          <Youtube>Youtube</Youtube>
        </AboutMovieLocationEnd>
      </Container>
    </ContentContainer>
  );
}