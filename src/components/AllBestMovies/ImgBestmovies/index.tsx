import { Container } from "./styles";

import Image from "next/image";

export function ImgBestmovies() {
  return (
    <Container>
      <Image
        src={"https://image.tmdb.org/t/p/w780/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg"}
        alt="movie"
        width={553.11}
        height={268.41}
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "268.41px",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
          objectFit: "contain",
        }}
      />
    </Container>
  );
}
