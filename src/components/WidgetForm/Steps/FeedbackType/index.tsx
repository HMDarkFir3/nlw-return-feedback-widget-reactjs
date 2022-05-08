import { FC } from "react";

import { CloseButton } from "../../../CloseButton";

import { feedbackTypes, FeedbackTypeProps } from "../..";

import { Container, Header, Card, Footer } from "./styles";

interface Props {
  onFeedbackTypeChange: (type: FeedbackTypeProps) => void;
}

export const FeedbackType: FC<Props> = (props) => {
  const { onFeedbackTypeChange } = props;

  return (
    <Container>
      <Header>
        <span>Deixe seu feedback</span>

        <CloseButton />
      </Header>

      <Card>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              onClick={() => onFeedbackTypeChange(key as FeedbackTypeProps)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </Card>

      <Footer>
        <span>
          Feito com ♥ pela <a href="http://rocketseat.com.br">Rocketseat</a>{" "}
        </span>
      </Footer>
    </Container>
  );
};
