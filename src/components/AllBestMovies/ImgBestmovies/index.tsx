import { Container } from "./styles";

import Image from "next/image";

interface ImgBestmovies {
  typeCarrousel: string;
}

export function ImgBestmovies({ typeCarrousel = "standard" }: ImgBestmovies) {
  return (
    <Container>
      {typeCarrousel === "standard" && (
        <>
          <Image
            src={
              "https://image.tmdb.org/t/p/w780/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg"
            }
            alt="movie"
            width={553.11}
            height={268.41}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "268.41px",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
            className="carousel-Bestmovies"
          />
          <h1>The Batman</h1>
        </>
      )}
      {typeCarrousel === "firstimgslide" && (
        <>
          {" "}
          <Image
            src={
              "https://image.tmdb.org/t/p/w780/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg"
            }
            alt="movie"
            width={553.11}
            height={268.41}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "268.41px",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
            className="carousel-Bestmovies"
          />
          <h1>The Batman</h1>
        </>
      )}
    </Container>
  );
}
