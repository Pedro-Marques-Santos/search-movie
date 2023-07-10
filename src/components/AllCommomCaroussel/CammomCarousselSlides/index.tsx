"use client";
import { Container } from "./styles";

import Image from "next/image";

import { useRouter } from "next/navigation";

interface ICommomCarousselSlides {
  title: string;
  img: string;
}

export function CommomCarousselSlides({ title, img }: ICommomCarousselSlides) {
  const router = useRouter();

  function searchMovieOrSerieWatch(title: string) {
    const tokentitle = encodeURI(title);
    // console.log(tokentitle);
    router.push(`/resultwatch/${tokentitle}`);
  }

  return (
    <Container onClick={() => searchMovieOrSerieWatch("the batman")}>
      <Image
        src={img}
        alt="movie"
        width={250}
        height={140.83}
        style={{
          width: "100%",
          minWidth: "58px",
          maxWidth: "250px",
          height: "auto",
          maxHeight: "140.63px",
        }}
      />
      <h5>{title}</h5>
    </Container>
  );
}
