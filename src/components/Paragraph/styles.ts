import { styled } from "styled-components";

interface ParagraphProps {
  variant: "soft-grey" | "medium-grey" | "grey" | "red";
}

export const ParagraphContainer = styled.div<ParagraphProps>`
  display: flex;
  justify-content: space-around;
  color: ${({ variant, theme }) =>
    variant === "soft-grey"
      ? theme.COLORS["soft-grey"]
      : variant === "medium-grey"
      ? theme.COLORS["medium-grey"]
      : variant === "grey"
      ? theme.COLORS.grey
      : theme.COLORS.red};

  img {
    width: 1rem;
    height: 1rem;
  }
`;
