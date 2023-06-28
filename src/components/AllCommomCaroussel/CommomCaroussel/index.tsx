"use client";

import { Container } from "./styles";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { CommomCarousselSlides } from "../CammomCarousselSlides";

interface ICommomCaroussel {
  title: string;
  typyMovieAndSeries: string;
}

export function CommomCaroussel({
  title,
  typyMovieAndSeries,
}: ICommomCaroussel) {
  return (
    <Container>
      <h1>{typyMovieAndSeries}</h1>
      <Swiper
        style={{ width: "100%", height: "100%" }}
        slidesPerView={"auto"}
        spaceBetween={25}
        modules={[Pagination]}
        className="mySwiper"
        autoHeight={true}
      >
        <SwiperSlide className="carousel-commom-caroussel">
          <CommomCarousselSlides title={title} />
        </SwiperSlide>
        <SwiperSlide className="carousel-commom-caroussel">
          <CommomCarousselSlides title={title} />
        </SwiperSlide>
        <SwiperSlide className="carousel-commom-caroussel">
          <CommomCarousselSlides title={title} />
        </SwiperSlide>
        <SwiperSlide className="carousel-commom-caroussel">
          <CommomCarousselSlides title={title} />
        </SwiperSlide>
        <SwiperSlide className="carousel-commom-caroussel">
          <CommomCarousselSlides title={title} />
        </SwiperSlide>
        <SwiperSlide className="carousel-commom-caroussel">
          <CommomCarousselSlides title={title} />
        </SwiperSlide>
        <SwiperSlide className="carousel-commom-caroussel">
          <CommomCarousselSlides title={title} />
        </SwiperSlide>
        <SwiperSlide className="carousel-commom-caroussel">
          <CommomCarousselSlides title={title} />
        </SwiperSlide>
        <SwiperSlide className="carousel-commom-caroussel">
          <CommomCarousselSlides title={title} />
        </SwiperSlide>
        <SwiperSlide className="carousel-commom-caroussel">
          <CommomCarousselSlides title={title} />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
