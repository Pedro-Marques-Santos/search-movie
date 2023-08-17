import { styled } from "styled-components";

export const Container = styled.div`
  color: var(--white-200);
  display: flex;
  flex-direction: column;

  h5 {
    margin-top: 35px;
    margin-bottom: 20px;

    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: 81%;
    letter-spacing: 0.75px;
    color: var(--gray-600);
  }
`;

export const Category = styled.a`
  cursor: pointer;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 14px;
  text-decoration: none;
  color: var(--white-200);
`;
