import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 650px;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors.secondary};
  }

  h3 {
    font-size: 2.6rem;
    margin-bottom: 1rem;
    max-width: 450px;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 3rem;
  }
`;

export const CTA = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  a {
    height: 100%;
  }
`;

export const LetMeReadFirst = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  margin-top: 3rem;

  a {
    color: #2196f3;
    font-size: 1.8rem;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;
