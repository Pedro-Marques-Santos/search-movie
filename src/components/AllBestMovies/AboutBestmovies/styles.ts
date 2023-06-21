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
  }

  @media (max-width: 800px) {
    font-size: 21px;
  }

  @media (max-width: 700px) {
    font-size: 17px;
    line-height: 25px;
  }
`;

export const AboutMovie = styled.div`
  font-size: 16px;
  margin-top: 8px;
  text-align: justify;
`;

export const AboutMovieLocationEnd = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
  height: 100%;
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
`;
