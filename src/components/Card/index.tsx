import { CardContent } from "./styles";

type Props = {
  children: React.ReactNode;
};

export const Card = ({ children }: Props) => {
  return <CardContent>{children}</CardContent>;
};
