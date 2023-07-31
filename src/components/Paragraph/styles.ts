import { styled } from "styled-components";

interface ParagraphProps {
  variant: "soft-grey" | "medium-grey" | "grey" | "red";
}

export const ParagraphContainer = styled.div<ParagraphProps>`
  display: flex;
  align-items: center;
  color: ${({ variant, theme }) =>
    variant === "soft-grey"
      ? theme.COLORS["soft-grey"]
      : variant === "medium-grey"
      ? theme.COLORS["medium-grey"]
      : variant === "grey"
      ? theme.COLORS.grey
      : theme.COLORS.red};
  gap: 1rem;

  img {
    min-width: 1.5rem;
    height: 1.5rem;
  }
`;
