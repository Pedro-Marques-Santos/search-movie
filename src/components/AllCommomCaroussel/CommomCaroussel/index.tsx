"use client";

import { Container } from "./styles";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { CommomCarousselSlides } from "../CammomCarousselSlides";
import { IGenreMoviesAndSeries } from "@/app/dashboard/page";
import { RefObject } from "react";

interface ICommomCaroussel {
  typyMovieAndSeries: string;
  genreOne?: [];
  genreTwo?: [];
  stateTrueLoanding: () => void;
  refObjetct: RefObject<HTMLHeadingElement>;
}

export function CommomCaroussel({
  typyMovieAndSeries,
  genreOne,
  genreTwo,
  refObjetct,
  stateTrueLoanding,
}: ICommomCaroussel) {
  return (
    <Container>
      <h1 ref={refObjetct}>{typyMovieAndSeries}</h1>
      <Swiper
        style={{ width: "100%", height: "100%" }}
        slidesPerView={"auto"}
        spaceBetween={25}
        modules={[Pagination]}
        className="mySwiper"
        autoHeight={true}
      >
        {genreOne?.map((drame: IGenreMoviesAndSeries, index) => {
          return drame.backdropURLs.original === undefined ? null : (
            <SwiperSlide key={index} className="carousel-commom-caroussel">
              <CommomCarousselSlides
                title={drame.title}
                img={drame.backdropURLs.original}
                drame={drame}
                stateTrueLoanding={stateTrueLoanding}
              />
            </SwiperSlide>
          );
        })}
        {genreTwo?.map((drame: IGenreMoviesAndSeries, index) => {
          return drame.backdropURLs.original === undefined ? null : (
            <SwiperSlide key={index} className="carousel-commom-caroussel">
              <CommomCarousselSlides
                title={drame.title}
                img={drame.backdropURLs.original}
                drame={drame}
                stateTrueLoanding={stateTrueLoanding}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}
