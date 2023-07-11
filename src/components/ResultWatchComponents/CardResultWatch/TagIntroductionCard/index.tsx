"use client";

import { Container, Introduction } from "./styles";

interface ITagIntroductionCard {
  title: string;
  overview: string;
}

export function TagIntroductionCard({ title, overview }: ITagIntroductionCard) {
  return (
    <Container>
      <h1>{title}</h1>
      <Introduction>{overview}</Introduction>
    </Container>
  );
}
