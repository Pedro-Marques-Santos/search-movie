"use client";

import { styled } from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;
  color: var(--white-200);

  h1 {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 10px;
    @media (max-height: 650px) {
      font-size: 16px;
    }
  }
  @media (max-height: 650px) {
    padding: 15px;
  }
`;

export const Introduction = styled.div`
  font-size: 13.5px;
  line-height: 18px;
  letter-spacing: 0.3px;
  text-align: justify;

  &::-webkit-scrollbar {
    width: 6.5px; /* width of the entire scrollbar */
    -webkit-overflow-scrolling: auto;
  }

  &::-webkit-scrollbar-track {
    background: var(--gray-100); /* color of the tracking area */
    -webkit-overflow-scrolling: auto;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--black-400); /* color of the scroll thumb */
    -webkit-overflow-scrolling: auto;
    border-radius: 2.1px;
  }

  min-height: 70px;
  max-height: 75px;
  overflow: auto;

  @media (max-height: 650px) {
    font-size: 12px;
  }
`;
