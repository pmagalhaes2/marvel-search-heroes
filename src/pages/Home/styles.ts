import { styled } from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;

  img {
    margin-bottom: 2rem;
    max-width: 80%;
  }

  h1 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.COLORS.grey};
    font-weight: ${({ theme }) => theme.FONTWEIGHT.bold};
  }

  p {
    color: ${({ theme }) => theme.COLORS["medium-grey"]};
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  row-gap: 3rem;
  grid-auto-flow: row dense;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    row-gap: 1rem;
    margin: 0 auto;
  }
`;
