"use client";

import { Container, Genre, Tag, Youtube } from "./styles";

interface IGenres {
  name: string;
}

interface IFooterCard {
  genres: IGenres[];
  type: string;
}

export function FooterCard({ genres, type }: IFooterCard) {
  return (
    <Container>
      <Tag>
        Genres:
        {genres.map((genre, index) => {
          return <Genre key={index}>{genre.name}</Genre>;
        })}
      </Tag>
      <Tag>Type: {type}</Tag>
      <Youtube>Youtube</Youtube>
    </Container>
  );
}
