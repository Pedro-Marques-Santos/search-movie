import { Container } from "./styles";

import Image from "next/image";

interface ICommomCarousselSlides {
  title: string;
}

export function CommomCarousselSlides({ title }: ICommomCarousselSlides) {
  return (
    <Container>
      <Image
        src={"https://image.tmdb.org/t/p/w300/bfpwVLuKV7LSKKUZq60wDFS7Es6.jpg"}
        alt="movie"
        width={250}
        height={140.83}
        style={{
          width: "100%",
          minWidth: "58px",
          height: "auto",
        }}
      />
      <h5>{title}</h5>
    </Container>
  );
}
