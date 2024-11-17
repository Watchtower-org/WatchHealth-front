import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors.secondary};
  }

  h3 {
    font-size: 24px;
    margin-bottom: 20px;
    font-style: italic;
    color: #333;
  }
`;

export const SubscribeContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input {
    height: 60px;
  }

  & > button {
    height: 60px;
  }
`;

export const CitySelect = styled.select`
  border-radius: 5px;
  height: 60px;

  cursor: pointer;
  font-size: 1.6rem;
  padding: 10px;
  color: #333;
`;

export const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;
