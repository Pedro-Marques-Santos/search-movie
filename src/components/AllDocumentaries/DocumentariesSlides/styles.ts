"use client";

import { styled } from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 15px;
  height: 140px;
  border-radius: 10px;
  background: var(--black-400);
  @media (max-width: 600px) {
    padding: 2%;
    height: 110px;
  }
`;

export const Title = styled.div`
  font-size: 13px;
  color: var(--gray-100);
  text-shadow: black 0.01em 0.01em 0.1em;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0em;
  @media (max-width: 600px) {
    font-size: 12.15px;
  }
`;

export const EndSlide = styled.div`
  height: 100%;
  display: flex;
  align-items: end;
  color: gray;

  font-size: 12.5px;
  font-weight: 300;
  line-height: 9px;
  letter-spacing: 0em;
  @media (max-width: 600px) {
    font-size: 11.15px;
    display: flex;
    align-items: center;
  }
`;
