import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  padding: 20px;
  background-color: white;
  position: relative;

  width: 350px;
  height: 300px;
  cursor: pointer;

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.secondary};
  }

  h4 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.8rem;
    color: #333;
  }
`;

export const Description = styled.p`
  font-size: 1.6rem;
  margin-bottom: 1rem;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  line-height: 1.5;
  max-height: calc(1.5em * 4);
  word-break: break-word;
`;

export const Source = styled.div`
  display: flex;
  margin-top: 1rem;
  font-size: 1.6rem;
  font-style: italic;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.secondary};
  position: absolute;

  bottom: 20px;
`;
