import { useEffect, useState } from "react";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";

import { toast } from "react-toastify";

import { Container, PostsContainer, Header, IconButton } from "./styles";

import { Loading } from "../../components/Loading";
import { Post } from "../../components/Post";

import { PostType } from "../../components/Post/index";

import { ArrowLeft } from "@phosphor-icons/react";

const proxy = "https://cors-anywhere.herokuapp.com/";
const GOV_RSS_URL =
  "https://www.gov.br/pt-br/noticias/saude-e-vigilancia-sanitaria/ultimas-noticias/RSS";
const CNN_RSS_URL = "https://www.cnnbrasil.com.br/saude/feed";
const BV_SMS_RSS_URL = "https://bvsms.saude.gov.br/feed/";

export const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const govResponse = await axios.get(proxy + GOV_RSS_URL, {
          headers: { Accept: "application/rss+xml, application/atom+xml" },
        });

        const cnnResponse = await axios.get(proxy + CNN_RSS_URL, {
          headers: { Accept: "application/rss+xml, application/atom+xml" },
        });

        const bvsmsResponse = await axios.get(proxy + BV_SMS_RSS_URL, {
          headers: { Accept: "application/rss+xml, application/atom+xml" },
        });

        const parser = new XMLParser();
        const domParser = new DOMParser();

        const govFeedData = parser.parse(govResponse.data);
        const cnnFeedData = parser.parse(cnnResponse.data);
        const bvsmsFeedData = parser.parse(bvsmsResponse.data);

        const govItems = govFeedData["rdf:RDF"].item;
        const cnnItems = cnnFeedData.rss.channel.item;
        const bvsmsItems = bvsmsFeedData.rss.channel.item;

        const govPosts = govItems.map((item: any) => ({
          title: item.title,
          link: item.link,
          description: item.description,
          pubDate: item["dc:date"],
          source: "Governo Federal",
        }));

        const cnnPosts = cnnItems.map((item: any) => ({
          title: domParser.parseFromString(item.title, "text/html")
            .documentElement.textContent,
          link: item.link,
          description: domParser.parseFromString(item.description, "text/html")
            .documentElement.textContent,
          pubDate: item.pubDate,
          source: "CNN Brasil",
        }));

        const bvsmsPosts = bvsmsItems.map((item: any) => ({
          title: domParser.parseFromString(item.title, "text/html")
            .documentElement.textContent,
          link: item.link,
          description: domParser.parseFromString(item.description, "text/html")
            .documentElement.textContent,
          pubDate: item.pubDate,
          source: "Governo Federal",
        }));

        const sortedPosts = [...govPosts, ...cnnPosts, ...bvsmsPosts].sort(
          (a, b) =>
            new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
        );

        setPosts(sortedPosts);
        setLoading(false);
      } catch (error) {
        toast.error("Houve algum erro! Tente novamente mais tarde!");
        console.log(error);
      }
    })();
  }, []);

  if (loading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <IconButton href="/">
          <ArrowLeft size={30} />
        </IconButton>
        <h1>Últimas Notícias sobre a Saúde no País</h1>
      </Header>
      <PostsContainer>
        {posts.map((post) => (
          <Post key={post.title} post={post} />
        ))}
      </PostsContainer>
    </Container>
  );
};
