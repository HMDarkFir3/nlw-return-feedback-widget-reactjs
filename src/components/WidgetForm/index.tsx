import { useState, FC } from "react";

import { FeedbackType } from "./Steps/FeedbackType";
import { FeedbackContent } from "./Steps/FeedbackContent";
import { FeedbackSuccess } from "./Steps/FeedbackSuccess";

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
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  function handleFeedbackSent() {
    setFeedbackSent(true);
  }

  return (
    <Container>
      {feedbackSent ? (
        <FeedbackSuccess onRestartFeedback={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackType onFeedbackTypeChange={setFeedbackType} />
          ) : (
            <FeedbackContent
              feedbackType={feedbackType}
              onRestartFeedback={handleRestartFeedback}
              onFeedbackSent={handleFeedbackSent}
            />
          )}
        </>
      )}
    </Container>
  );
};
