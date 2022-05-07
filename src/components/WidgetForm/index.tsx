import { FC } from "react";

import { CloseButton } from "../CloseButton";

import { Container, Card } from "./styles";

import bugSvgUrl from "../../assets/Bug.svg";
import ideaSvgUrl from "../../assets/Idea.svg";
import thoughtSvgUrl from "../../assets/Thought.svg";

const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugSvgUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaSvgUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtSvgUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export const WidgetForm: FC = () => {
  return (
    <Container>
      <header>
        <span>Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <Card key={key}>
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </Card>
          );
        })}
      </div>

      <footer>
        <span>
          Feito com ♥ pela <a href="http://rocketseat.com.br">Rocketseat</a>{" "}
        </span>
      </footer>
    </Container>
  );
};
