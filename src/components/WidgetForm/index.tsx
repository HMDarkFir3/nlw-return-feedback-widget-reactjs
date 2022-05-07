import { useState, FC } from "react";

import { CloseButton } from "../CloseButton";
import { FeedbackType } from "./Steps/FeedbackType";

import { Container } from "./styles";

import bugSvgUrl from "../../assets/Bug.svg";
import ideaSvgUrl from "../../assets/Idea.svg";
import thoughtSvgUrl from "../../assets/Thought.svg";

export const feedbackTypes = {
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

export type FeedbackTypeProps = keyof typeof feedbackTypes;

export const WidgetForm: FC = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypeProps | null>(
    null
  );

  return (
    <Container>
      {!feedbackType ? (
        <FeedbackType onFeedbackTypeChange={setFeedbackType} />
      ) : (
        <p>Hello World</p>
      )}

      <footer>
        <span>
          Feito com ♥ pela <a href="http://rocketseat.com.br">Rocketseat</a>{" "}
        </span>
      </footer>
    </Container>
  );
};
