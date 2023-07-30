import { CardContainer } from "./styles";

type Props = {
  children: React.ReactNode;
};

export const Card = ({ children }: Props) => {
  return <CardContainer>{children}</CardContainer>;
};
