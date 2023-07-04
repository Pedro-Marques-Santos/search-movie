"use client";

import { styled } from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10;
  background: var(--black);
  box-shadow: var(--black) 0px 1px 3px 0px, var(--black-500) 0px 0px 0px 1px;
  padding-bottom: 6px;
`;

export const Container = styled.header`
  display: flex;
  width: 100%;
  margin: 0 auto;
  max-width: 1296px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
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
  display: flex;
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
