import styled from "styled-components";

export const Container = styled.button`
  height: 100%;
  padding: 10px 24px;
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
