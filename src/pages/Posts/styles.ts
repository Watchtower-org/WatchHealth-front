import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
  width: 100%;
`;

export const IconButton = styled.a`
  width: 40px;
  height: 40px;

  border-radius: 50%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 32px 0 56px 0;

  position: relative;

  a {
    position: absolute;
    left: 0;
  }

  h1 {
    font-size: 2.4rem;
    font-weight: 500;
    color: #333;
  }
`;

export const PostsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 24px;
`;
