"use client";

import { DxxRecommendSlides } from "../DxxRecommendSlides";
import { Container, ContainerSlides } from "./styles";

export function DxxRecommend() {
  return (
    <Container>
      <h1>8 movies and series recommended by DXX</h1>
      <ContainerSlides>
        <DxxRecommendSlides />
        <DxxRecommendSlides />
        <DxxRecommendSlides />
        <DxxRecommendSlides />
        <DxxRecommendSlides />
        <DxxRecommendSlides />
        <DxxRecommendSlides />
        <DxxRecommendSlides />
      </ContainerSlides>
    </Container>
  );
}
