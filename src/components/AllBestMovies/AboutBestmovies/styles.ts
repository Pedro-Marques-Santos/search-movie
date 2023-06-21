import { styled } from "styled-components";

export const ContentContainer = styled.div`
  width: 50%;
  display: flex;
  height: auto;
  max-height: 268.41px;
  min-height: 80px;
  background-image: linear-gradient(
    to right,
    var(--black) 1%,
    var(--black-500)
  );
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Container = styled.div`
  width: 100%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 27px;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: 0em;

  @media (max-width: 900px) {
    font-size: 23px;
    line-height: 20px;
  }

  @media (max-width: 800px) {
    font-size: 21px;
    line-height: 20px;
  }

  @media (max-width: 700px) {
    font-size: 14px;
    line-height: 15px;
  }

  @media (max-width: 550px) {
    text-align: center;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 450px) {
    font-size: 10px;
    line-height: 12px;
    text-align: center;
  }
`;

export const AboutMovie = styled.div`
  font-size: 16px;
  margin-top: 8px;

  min-height: 80px;
  max-height: 115px;
  overflow: auto;

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

  color: var(--gray-100);
  @media (max-width: 700px) {
    min-height: 50px;
    max-height: 80px;
  }

  @media (max-width: 800px) {
    font-size: 13.5px;
  }

  @media (max-width: 550px) {
    display: none;
  }
`;

export const AboutMovieLocationEnd = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
  height: 100%;

  @media (max-width: 550px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Youtube = styled.div`
  cursor: pointer;
  background: #ff0000;
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 1px 1px 14px #ff0000;
  @media (max-width: 800px) {
    font-size: 11.5px;
    width: 60px;
    height: 22px;
  }

  @media (max-width: 450px) {
    font-size: 9px;
    width: 50px;
    height: 12px;
  }
`;
