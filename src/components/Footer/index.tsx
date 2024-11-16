import { Container } from "./styles";

import { InstagramLogo, XLogo } from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <Container>
      <p>Saúde em Foco - Sua fonte confiável de informação sobre saúde.</p>
      <a href="/#">
        <XLogo />
      </a>
      <a href="/#">
        <InstagramLogo />
      </a>
    </Container>
  );
};
