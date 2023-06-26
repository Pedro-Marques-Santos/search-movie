import { Container } from "./styles";

import Image from "next/image";

export function ComedyAndFamilySlides() {
  return (
    <Container>
      <Image
        src={"https://image.tmdb.org/t/p/w300/bfpwVLuKV7LSKKUZq60wDFS7Es6.jpg"}
        alt="movie"
        width={250}
        height={140.83}
        style={{
          margin: "5px",
          width: "100%",
          minWidth: "58px",
          height: "auto",
        }}
      />
      <h5>10 Rillington Place</h5>
    </Container>
  );
}
