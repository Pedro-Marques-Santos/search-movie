import { styled } from "styled-components";

export const Container = styled.div`
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
  font-size: 15px;
  color: var(--gray-100);
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0em;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const EndSlide = styled.div`
  height: 100%;
  display: flex;
  align-items: end;
  color: gray;

  font-size: 16.5px;
  font-weight: 300;
  line-height: 9px;
  letter-spacing: 0em;
  @media (max-width: 600px) {
    font-size: 13.5px;
    display: flex;
    align-items: center;
  }
`;
