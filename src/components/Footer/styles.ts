import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-style: italic;
  color: ${({ theme }) => theme.colors.accent};
`;
