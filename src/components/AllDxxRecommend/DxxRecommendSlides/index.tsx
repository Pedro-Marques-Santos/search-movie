"use client";

import { ImgDxxRecommend } from "../ImgDxxRecommend";
import { Container } from "./styles";

interface IDxxRecommendSlides {
  img: string;
  title: string;
}

export function DxxRecommendSlides({ img, title }: IDxxRecommendSlides) {
  return (
    <Container>
      <ImgDxxRecommend img={img} />
      <h5>{title}</h5>
    </Container>
  );
}
