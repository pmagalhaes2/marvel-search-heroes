import styled from "styled-components";

interface InputProps {
  variant: "primary" | "secondary";
}

export const InputContainer = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  width: 100%;

  input {
    margin: 2rem 0 5rem;
    padding: 1rem 4rem;
    width: 60%;
    border: none;
    border-radius: 2rem;
    color: ${({ theme }) => theme.COLORS.grey};
    font-size: 1rem;
    outline: none;
    font-family: inherit;
    background: url("/images/Search.svg") no-repeat center left 20px;
    background-color: ${({ theme, variant }) =>
      variant === "primary" ? theme.COLORS["soft-red"] : theme.COLORS.white};

    &::placeholder {
      color: ${({ theme, variant }) =>
        variant === "primary" ? theme.COLORS.red : theme.COLORS["medium-grey"]};
    }
  }
`;
