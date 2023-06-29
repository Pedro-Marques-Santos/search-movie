"use client";

import { FooterCard } from "../FooterCard";
import { ImgCard } from "../ImgCard";
import { TagIntroductionCard } from "../TagIntroductionCard";
import { Container } from "./styles";

export function CardResultWatch() {
  return (
    <Container>
      <TagIntroductionCard />
      <ImgCard />
      <FooterCard />
    </Container>
  );
}
