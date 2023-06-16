"use client";

import { styled } from "styled-components";

export const ContentContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding-left: 8px;
  padding-right: 8px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;

  h1 {
    color: var(--gray-100);
    font-size: 16px;
    padding-top: 20px;
  }
`;

export const ListAllGenres = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-bottom: 30px;
  gap: 20px;
`;

export const AllGenres = styled.div`
  width: 130px;
  height: 65px;

  color: var(--gray-100);
  cursor: pointer;
  background: var(--black-400);
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: var(--green-100);
  }
`;

export const FavoriteGenres = styled.div`
  width: 130px;
  height: 65px;

  color: var(--gray-100);
  cursor: pointer;
  background: var(--black-600);

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--green-100);

  &:hover {
    cursor: default;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  button {
    width: 140px;
    height: 50px;
    border-radius: 10px;

    background: var(--red-700);
    color: var(--white);
  }
  padding-bottom: 60px;
`;
