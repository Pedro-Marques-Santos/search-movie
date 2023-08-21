"use client";

import { Container, Genre, Streaming, Tag, Youtube } from "./styles";

interface IGenres {
  name: string;
}

interface IFooterCard {
  genres: IGenres[];
  type: string;
  streamings: string[] | null;
}

export function FooterCard({ genres, type, streamings }: IFooterCard) {
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <Container>
      <Tag>
        Genres:
        {genres.map((genre, index) => {
          return <Genre key={index}>{genre.name}</Genre>;
        })}
      </Tag>
      <Tag>Type: {type}</Tag>
      <Streaming>
        {streamings &&
          streamings.map((straming, index) => {
            return (
              <Youtube key={index}>{capitalizeFirstLetter(straming)}</Youtube>
            );
          })}
      </Streaming>
    </Container>
  );
}
