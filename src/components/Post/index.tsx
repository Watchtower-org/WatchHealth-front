import { Container, Source, Description } from "./styles";

import dayjs from "dayjs";

export interface PostType {
  title: string;
  description: string;
  pubDate: string;
  link: string;
  source: string;
}

interface PostProps {
  post: PostType;
}

export const Post = ({ post }: PostProps) => {
  const { title, description, pubDate, source } = post;

  const handlePostClick = () => {
    window.open(post.link, "_blank");
  };

  return (
    <Container onClick={handlePostClick}>
      <h4>{title}</h4>
      <Description>{description}</Description>
      <Source>
        <p>{dayjs(pubDate).format("DD/MM/YYYY HH:mm")}</p>{" "}
        <p>{` - ${source}`}</p>
      </Source>
    </Container>
  );
};
