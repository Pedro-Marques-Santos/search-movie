"use client";

import { roboto } from "@/fonts/my-fonts";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --black-500: #141414;
    --black-600: #151515;
    --black-400: #343434;
    --black-900: #030303;
    --red-500: rgb(239 68 68);
    --red-700: rgb(185 28 28);
    --gray-500: #595A5A;
    --gray-600: #6A6A6A;
    --gray-100: #C7C7C7;
    --green-100: rgb(22 101 52);
    --black: #000000;
    --white: #FFFFFF;
    --white-200: #E4E4E4;
    --box-shadow-header: #F5F5F5;
    --yellow: #928c04;
    --yellow-100: #f4f3d2;
  } 

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    background: var(--black-500);
    font-family: ${roboto.style.fontFamily};
  }

  button {
    margin-top: 20px;
    cursor: pointer;
    outline: none;
	  border: none;
	  outline: inherit;
  }

  .iconHeaderDashboardHeader {
    font-size: 20px;

    @media (max-width: 650px) {
      font-size: 25px;
    }
  }


  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    /* border: 1px solid red; */
    font-size: 18px;
    max-height: 268.41px;
    min-height: 80px;
  }

  .swiper-slide {
    width: calc(100% - 100px);
    max-width: 804px;
    border-radius: 20px;
  }
`;
