import { Container } from "./styles";

type ButtonProps = {
  children: string;
};

export const Button = ({ children }: ButtonProps) => {
  return <Container>{children}</Container>;
};
