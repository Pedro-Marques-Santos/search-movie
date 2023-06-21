import { Container } from "./styles";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { BestmoviesSlides } from "../BestmoviesSlides";

export function Bestmovies() {
  return (
    <Container>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={25}
        modules={[Pagination]}
        className="mySwiper"
        autoHeight={true}
      >
        <SwiperSlide>
          <BestmoviesSlides />
        </SwiperSlide>
        <SwiperSlide>
          <BestmoviesSlides />
        </SwiperSlide>
        <SwiperSlide>
          <BestmoviesSlides />
        </SwiperSlide>
        <SwiperSlide>
          <BestmoviesSlides />
        </SwiperSlide>
        <SwiperSlide>
          <BestmoviesSlides />
        </SwiperSlide>
        <SwiperSlide>
          <BestmoviesSlides />
        </SwiperSlide>
        <SwiperSlide>
          <BestmoviesSlides />
        </SwiperSlide>
        <SwiperSlide>
          <BestmoviesSlides />
        </SwiperSlide>
        <SwiperSlide>
          <BestmoviesSlides />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
