import { styled } from "styled-components";

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  img {
    width: 15rem;
    height: 15rem;
    border-bottom: 4px solid ${({ theme }) => theme.COLORS.red};
    cursor: pointer;
    margin-bottom: 1rem;
  }
  
  h4 {
      color: ${({ theme }) => theme.COLORS.grey};
      font-weight: ${({ theme }) => theme.FONTWEIGHT.bold};
      width: 70%;
    }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    img {
      width: 1.2rem;
      height: 1.2rem;
      border: none;
    }
  }
`;
