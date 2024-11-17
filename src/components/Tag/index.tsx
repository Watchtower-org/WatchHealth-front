import { Container } from "./styles";

interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isSelected: boolean;
}

export const Tag = ({ text, isSelected, ...props }: TagProps) => {
  return (
    <Container isSelected={isSelected} {...props}>
      {text}
    </Container>
  );
};
