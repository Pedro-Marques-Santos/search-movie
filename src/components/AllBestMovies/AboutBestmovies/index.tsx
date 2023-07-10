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
  title: string;
  about: string;
}

export function AboutBestmovies({
  typeCarrousel,
  title,
  about,
}: IAboutBestmovies) {
  return (
    <ContentContainer typecaroussel={typeCarrousel}>
      <Container>
        <Title>{title}</Title>
        <AboutMovie>{about}</AboutMovie>
        <AboutMovieLocationEnd>
          <Youtube>Youtube</Youtube>
        </AboutMovieLocationEnd>
      </Container>
    </ContentContainer>
  );
}
