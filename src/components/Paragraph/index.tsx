import { ParagraphContainer } from "./styles";

interface ParagraphProps {
  variant?: "soft-grey" | "medium-grey" | "grey" | "red";
  children: React.ReactNode;
}

export const Paragraph = ({
  variant = "medium-grey",
  children,
}: ParagraphProps) => {
  return <ParagraphContainer variant={variant}>{children}</ParagraphContainer>;
};
