import { Container } from "./styles";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { WarAndCrimesSlides } from "../WarAndCrimesSlides";

export function WarAndCrime() {
  return (
    <Container>
      <h1>War and Crime series and movies</h1>
      <Swiper
        style={{ width: "100%", height: "100%" }}
        slidesPerView={"auto"}
        spaceBetween={25}
        modules={[Pagination]}
        className="mySwiper"
        autoHeight={true}
      >
        <SwiperSlide className="carousel-WarAndCrimes">
          <WarAndCrimesSlides />
        </SwiperSlide>
        <SwiperSlide className="carousel-WarAndCrimes">
          <WarAndCrimesSlides />
        </SwiperSlide>
        <SwiperSlide className="carousel-WarAndCrimes">
          <WarAndCrimesSlides />
        </SwiperSlide>
        <SwiperSlide className="carousel-WarAndCrimes">
          <WarAndCrimesSlides />
        </SwiperSlide>
        <SwiperSlide className="carousel-WarAndCrimes">
          <WarAndCrimesSlides />
        </SwiperSlide>
        <SwiperSlide className="carousel-WarAndCrimes">
          <WarAndCrimesSlides />
        </SwiperSlide>
        <SwiperSlide className="carousel-WarAndCrimes">
          <WarAndCrimesSlides />
        </SwiperSlide>
        <SwiperSlide className="carousel-WarAndCrimes">
          <WarAndCrimesSlides />
        </SwiperSlide>
        <SwiperSlide className="carousel-WarAndCrimes">
          <WarAndCrimesSlides />
        </SwiperSlide>
        <SwiperSlide className="carousel-WarAndCrimes">
          <WarAndCrimesSlides />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
