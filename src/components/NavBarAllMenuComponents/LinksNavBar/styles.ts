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

export const ContentLinkAndIcon = styled.a`
  display: flex;
  justify-content: start;
  &:first-child {
    margin-top: 20px;
  }
  margin-bottom: 14px;
  cursor: pointer;
  text-decoration: none;
`;

export const Icon = styled.div`
  margin-left: -3px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--white-200);
`;
