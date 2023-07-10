"use client";

import { ImgDocumentaries } from "../ImgDocumentaries";
import { Container, Title, EndSlide } from "./styles";

interface IDocumentariesSlides {
  img: string;
  title: string;
}

export function DocumentariesSlides({ img, title }: IDocumentariesSlides) {
  return (
    <Container>
      <ImgDocumentaries img={img} />
      <Title>{title}</Title>
      <EndSlide>Talk Show</EndSlide>
    </Container>
  );
}
