import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Content = styled(Header)`
  padding: 2rem 5rem;
`;

export const CharacterContainer = styled.div`
  border-radius: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 4rem;
  background-color: ${({ theme }) => theme.COLORS["soft-green"]};

  @media (max-width: 768px) {
    width: 80%;
    height: 100%;
    padding: 1rem 2rem;
    gap: 1.5rem;
  }

  img {
    border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
    width: 40%;
  }
`;

export const DetailsContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: justify;
  gap: 2rem;

  h1 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.COLORS.grey};
    font-weight: ${({ theme }) => theme.FONTWEIGHT.bold};
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 50%;
  justify-content: space-between;
  align-items: flex-start;
  font-weight: ${({ theme }) => theme.FONTWEIGHT.bold};
  font-size: 0.875rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    width: fit-content;
  }
`;

export const ComicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  h3 {
    color: ${({ theme }) => theme.COLORS.grey};
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    column-gap: 1rem;
    row-gap: 3rem;
  }

  p {
    color: ${({theme}) => theme.COLORS.grey}
  }
`;
