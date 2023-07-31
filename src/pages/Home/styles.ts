import { styled } from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  img {
    margin-bottom: 2rem;
  }

  h1 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.COLORS.grey};
    font-weight: ${({ theme }) => theme.FONTWEIGHT.bold};
  }

  p {
    color: ${({ theme }) => theme.COLORS["medium-grey"]};
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  row-gap: 3rem;
`;
