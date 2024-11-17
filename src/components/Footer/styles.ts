import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-style: italic;
  color: ${({ theme }) => theme.colors.accent};
  border-top: 1px solid #ccc;
`;

export const RssIcon = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.accent};
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  a {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: underline;
    font-style: italic;
  }
`;
