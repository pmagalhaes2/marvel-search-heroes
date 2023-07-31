import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 5rem;
  width: 100%;
  background-color: ${({theme}) => theme.COLORS["soft-green"]};
`;