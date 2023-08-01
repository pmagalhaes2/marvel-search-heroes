import { ParagraphContainer } from "./styles";

interface ParagraphProps {
  variant?: "soft-grey" | "medium-grey" | "grey" | "red";
  children: React.ReactNode;
  onClick?: () => void;
  isClicked?: boolean;
}

export const Paragraph = ({
  variant = "medium-grey",
  children,
  onClick,
  isClicked = false,
}: ParagraphProps) => {
  return (
    <ParagraphContainer
      variant={variant}
      onClick={onClick}
      isClicked={isClicked}
    >
      {children}
    </ParagraphContainer>
  );
};
