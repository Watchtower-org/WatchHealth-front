import { useState } from "react";

import { Input } from "../../components/Input";
import {
  Container,
  SubscribeContainer,
  CitySelect,
  TagsContainer,
} from "./styles";

import { useParams } from "react-router-dom";

import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";

import citiesJson from "../../assets/cities.json";
import { toast } from "react-toastify";
import { api } from "../../services/api";

import ufs from "./uf";
import { tags } from "./tags";
import { eachTagToPortuguese } from "./tags";

import { useNavigate } from "react-router-dom";

export const NewsLetter = () => {
  const { email: paramEmail } = useParams<{ email: string }>();
  const [selectedCity, setSelectedCity] = useState<{
    name: string;
    code: string;
    uf: string;
  }>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState(paramEmail || "");
  const [selectedTags, setSelectedTags] = useState<string[]>(["LAW"]);
  const navigate = useNavigate();

  const emailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeCity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(JSON.parse(event.target.value));
  };

  const changeTags = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const subscribe = (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedCity || name.length === 0 || email.length === 0) {
      toast.warning("Preencha todos os campos");
      return;
    }

    try {
      const body = {
        name,
        email,
        ibgecode: selectedCity.code.toString(),
        city: selectedCity.name,
        uf: ufs[selectedCity.uf],
        dengue: selectedTags.includes("DENGUE"),
        covid: selectedTags.includes("COVID"),
        bidding: selectedTags.includes("BIDDING"),
        news: selectedTags.includes("NEWS"),
        law: selectedTags.includes("LAW"),
      };

      api.post("/user", body);

      toast.success("Inscrição realizada com sucesso");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao se inscrever");
    }
  };

  return (
    <Container>
      <h1>Watch Health</h1>
      <h3>Formulário de Inscrição</h3>
      <SubscribeContainer onSubmit={subscribe}>
        <Input
          placeholder="Digite seu nome"
          onChange={nameChange}
          value={name}
        />
        <Input
          placeholder="Digite seu melhor email"
          onChange={emailChange}
          type="email"
          value={email}
        />
        <CitySelect onChange={changeCity}>
          <option>Selecione sua cidade</option>
          {citiesJson.map((city) => (
            <option
              key={city["Código Município Completo"]}
              value={JSON.stringify({
                name: city["Nome_Município"],
                code: city["Código Município Completo"],
                uf: city["Nome_UF"],
              })}
            >
              {city["Nome_Município"]}
            </option>
          ))}
        </CitySelect>
        <TagsContainer>
          {tags.map((tag) => (
            <Tag
              key={tag}
              text={eachTagToPortuguese[tag]}
              isSelected={selectedTags.includes(tag)}
              onClick={() => changeTags(tag)}
              type="button"
            />
          ))}
        </TagsContainer>
        <Button type="submit">Inscrever-se</Button>
      </SubscribeContainer>
    </Container>
  );
};
