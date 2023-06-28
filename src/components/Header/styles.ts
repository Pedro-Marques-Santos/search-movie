"use client";

import { styled } from "styled-components";

export const Container = styled.header`
  padding-top: 15px;
  display: flex;
`;

export const Logo = styled.div``;

export const NavContainer = styled.div`
  margin-left: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--white-200);

  @media (max-width: 650px) {
    justify-content: end;
  }
`;

export const MenuXl = styled.div`
  display: flex;
  gap: 18px;

  a {
    color: var(--white-200);
    font-weight: 400;
    font-size: 15.4px;
    text-decoration: none;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 20px;
  color: var(--white-200);
`;

export const Icon = styled.div`
  cursor: pointer;

  &:nth-child(3) {
    @media (max-width: 375px) {
      display: none;
    }
  }
  &:nth-child(4) {
    @media (max-width: 375px) {
      display: none;
    }
  }
`;

export const IconProgessBar = styled.div`
  display: none;
  @media (max-width: 650px) {
    display: flex;
  }
`;

export const User = styled.div`
  width: 22px;
  height: 22px;
  background: gray;
  border-radius: 100%;
`;

export const ImgIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 25px;
  height: 25px;
`;
