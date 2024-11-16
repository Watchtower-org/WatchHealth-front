import { Container } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export const Input = ({ placeholder, ...props }: InputProps) => {
  return <Container placeholder={placeholder} {...props} />;
};
