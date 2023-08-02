"use client";

import { ImgSlidesSearch } from "../ImgSlidesSearch";
import { Container } from "./styles";

interface ISlidesSearch {
  title: string;
  img: string;
}

export function SlidesSearch({ title, img }: ISlidesSearch) {
  return (
    <Container>
      <ImgSlidesSearch img={img} />
      <h5>{title}</h5>
    </Container>
  );
}
