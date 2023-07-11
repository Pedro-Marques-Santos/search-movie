"use client";

import { Container } from "./styles";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { BestmoviesSlides } from "../BestmoviesSlides";
import { IGenreMoviesAndSeries } from "@/app/dashboard/page";

interface IBestmovies {
  genreOne?: [];
}

export function Bestmovies({ genreOne }: IBestmovies) {
  console.log(genreOne);

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
        {genreOne?.map((drame: IGenreMoviesAndSeries, index) => {
          return index === 0 ? (
            drame.backdropURLs.original === undefined ? null : (
              <SwiperSlide key={index} className="carousel-bestmovies">
                <BestmoviesSlides
                  typeCarrousel={"standard"}
                  title={drame.title}
                  img={drame.backdropURLs.original}
                  about={drame.overview}
                  drame={drame}
                />
              </SwiperSlide>
            )
          ) : drame.backdropURLs.original === undefined ? null : (
            <SwiperSlide key={index} className="carousel-bestmovies">
              <BestmoviesSlides
                typeCarrousel={"firstimgslide"}
                title={drame.title}
                img={drame.backdropURLs.original}
                about={drame.overview}
                drame={drame}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}
