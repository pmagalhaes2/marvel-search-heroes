import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 5rem;
  width: 100%;
  min-height: 100vh;
  background-color: ${({theme}) => theme.COLORS["soft-green"]};


  @media (max-width: 768px) {
    padding: 3rem;
  }
`;