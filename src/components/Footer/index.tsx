import { Container, LinksContainer, RssIcon } from "./styles";

import { RssSimple } from "@phosphor-icons/react";

import config from "../../config";

export const Footer = () => {
  const accessRss = () => {
    window.location.href = config.apiUrl + "/rss/covid?uf=MG";
  };

  return (
    <Container>
      <LinksContainer>
        <a href="https://bsky.app/profile/watchtower-org.bsky.social">
          BlueSky
        </a>
        <a href="https://iris.to/npub12nj6nlsvgd0awt6qf87hn7mzp9s6830ku4mmmuus5pc2lss6fl6scaswgx">
          Iris
        </a>

        <RssIcon onClick={accessRss}>
          <RssSimple size={22} color="white" weight="bold" />
        </RssIcon>
      </LinksContainer>
    </Container>
  );
};
