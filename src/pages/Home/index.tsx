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
          <Input placeholder="Coloque seu melhor email" type="email" />
          <Button>Inscreva-se</Button>
        </CTA>

        <LetMeReadFirst>
          <a href="/posts">deixe-me ler primeiro</a>
          <ArrowRight color="#CCC" size={20} />
        </LetMeReadFirst>
      </Content>
      <ImageContainer>
        <img src={fundo} alt="bg-image" />
      </ImageContainer>
    </Container>
  );
};
