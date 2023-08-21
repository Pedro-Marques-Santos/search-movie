"use client";

import { styled } from "styled-components";

export const Container = styled.div`
  color: var(--white-200);
  @media (max-height: 650px) {
    padding: 15px;
  }
`;

export const Tag = styled.div`
  display: flex;
  margin-bottom: 1px;
  font-size: 11.5px;
  @media (max-height: 650px) {
    font-size: 9.5px;
  }
`;

export const Youtube = styled.div`
  font-size: 14px;
  margin-top: 15px;
  cursor: pointer;
  background: #ff0000;
  width: 74px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 1px 1px 14px #ff0000;
  @media (max-height: 650px) {
    font-size: 10.5px;
    width: 57px;
    height: 18px;
  }
`;

export const Genre = styled.div`
  margin-left: 8px;
  display: flex;
  font-size: 11.5px;
  @media (max-height: 650px) {
    font-size: 9.5px;
  }
`;

export const Streaming = styled.div`
  display: flex;
  gap: 20px;
`;
