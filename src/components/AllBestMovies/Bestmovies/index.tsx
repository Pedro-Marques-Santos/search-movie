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
        style={{ width: "100%", height: "100%" }}
        slidesPerView={"auto"}
        spaceBetween={25}
        modules={[Pagination]}
        className="mySwiper"
        autoHeight={true}
      >
        <SwiperSlide className="carousel-bestmovies">
          <BestmoviesSlides typeCarrousel={"standard"} />
        </SwiperSlide>
        <SwiperSlide className="carousel-bestmovies">
          <BestmoviesSlides typeCarrousel={"firstimgslide"} />
        </SwiperSlide>
        <SwiperSlide className="carousel-bestmovies">
          <BestmoviesSlides typeCarrousel={"firstimgslide"} />
        </SwiperSlide>
        <SwiperSlide className="carousel-bestmovies">
          <BestmoviesSlides typeCarrousel={"firstimgslide"} />
        </SwiperSlide>
        <SwiperSlide className="carousel-bestmovies">
          <BestmoviesSlides typeCarrousel={"firstimgslide"} />
        </SwiperSlide>
        <SwiperSlide className="carousel-bestmovies">
          <BestmoviesSlides typeCarrousel={"firstimgslide"} />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
