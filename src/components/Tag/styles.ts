import styled from "styled-components";

interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled.button<ContainerProps>`
  background-color: ${({ theme, isSelected }) =>
    !isSelected ? "white" : theme.colors.secondary};
  padding: 10px 20px;
  border-radius: 10px;
  color: ${({ theme, isSelected }) =>
    isSelected ? "white" : theme.colors.secondary};

  border: ${({ theme, isSelected }) =>
    isSelected ? "none" : theme.colors.secondary};
`;
