import { useState } from "react";

import {
  Container,
  Content,
  CTA,
  LetMeReadFirst,
  ImageContainer,
} from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { ArrowRight } from "@phosphor-icons/react";

import fundo from "../../assets/Fundo.png";

export const Home = () => {
  const [email, setEmail] = useState("");

  const emailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <Container>
      <Content>
        <h1>Watch Health</h1>
        <h3>Para agregar e visualizar dados da saúde no Brasil.</h3>
        <p>
          Tudo o que você precisa para se manter informado sobre o que acontece
          na área da saúde no Brasil, 100% gratuito, diariamente na sua caixa de
          entrada.
        </p>

        <CTA>
          <Input
            placeholder="Digite seu melhor email"
            onChange={emailChange}
            type="email"
            value={email}
          />
          <a href={`/newsletter/${email}`}>
            <Button>Inscreva-se</Button>
          </a>
        </CTA>

        <LetMeReadFirst>
          <a href="/posts">deixe-me ler primeiro</a>
          <ArrowRight color="#2196F3" size={20} />
        </LetMeReadFirst>
      </Content>
      <ImageContainer>
        <img src={fundo} alt="bg-image" />
      </ImageContainer>
    </Container>
  );
};
