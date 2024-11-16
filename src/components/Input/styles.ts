import styled from "styled-components";

export const Container = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  height: 100%;
  width: 500px;
  font-size: 1.6rem;
`;
