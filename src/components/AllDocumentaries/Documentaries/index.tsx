"use client";

import { Container } from "./styles";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { DocumentariesSlides } from "../DocumentariesSlides";

export function Documentaries() {
  return (
    <Container>
      <h1>Documentaries and Talk shows</h1>
      <Swiper
        style={{ width: "100%", height: "100%" }}
        slidesPerView={"auto"}
        spaceBetween={25}
        modules={[Pagination]}
        className="mySwiper"
        autoHeight={true}
      >
        <SwiperSlide className="carousel-documentaries">
          <DocumentariesSlides />
        </SwiperSlide>
        <SwiperSlide className="carousel-documentaries">
          <DocumentariesSlides />
        </SwiperSlide>
        <SwiperSlide className="carousel-documentaries">
          <DocumentariesSlides />
        </SwiperSlide>
        <SwiperSlide className="carousel-documentaries">
          <DocumentariesSlides />
        </SwiperSlide>
        <SwiperSlide className="carousel-documentaries">
          <DocumentariesSlides />
        </SwiperSlide>
        <SwiperSlide className="carousel-documentaries">
          <DocumentariesSlides />
        </SwiperSlide>
        <SwiperSlide className="carousel-documentaries">
          <DocumentariesSlides />
        </SwiperSlide>
        <SwiperSlide className="carousel-documentaries">
          <DocumentariesSlides />
        </SwiperSlide>
        <SwiperSlide className="carousel-documentaries">
          <DocumentariesSlides />
        </SwiperSlide>
        <SwiperSlide className="carousel-documentaries">
          <DocumentariesSlides />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
