"use client";

import { FooterCard } from "../FooterCard";
import { ImgCard } from "../ImgCard";
import { TagIntroductionCard } from "../TagIntroductionCard";
import { Container } from "./styles";

interface IGenres {
  name: string;
}

interface ICardResultWatch {
  title: string;
  backdropURLs: {
    original: string;
  };
  overview: string;
  genres: IGenres[];
  type: string;
  streamings: string[] | null;
}

export function CardResultWatch({
  title,
  backdropURLs,
  overview,
  genres,
  type,
  streamings,
}: ICardResultWatch) {
  return (
    <Container>
      <TagIntroductionCard title={title} overview={overview} />
      <ImgCard img={backdropURLs.original} />
      <FooterCard genres={genres} type={type} streamings={streamings} />
    </Container>
  );
}
