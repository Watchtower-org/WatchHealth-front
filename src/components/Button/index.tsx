import { Container } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return <Container {...props}>{children}</Container>;
};
