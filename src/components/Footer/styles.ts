import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 10rem;
  background-color: ${({ theme }) => theme.COLORS.red};
 
  p {
    color: ${({ theme }) => theme.COLORS.white};
  }
`;
