import { useState, FC, FormEvent } from "react";
import { ArrowLeft } from "phosphor-react";

import { CloseButton } from "../../../CloseButton";
import { ScreenshotButton } from "../../ScreenshotButton";

import { feedbackTypes, FeedbackTypeProps } from "../..";

import { Container, Header, Form, Footer } from "./styles";

interface Props {
  feedbackType: FeedbackTypeProps;
  onRestartFeedback: () => void;
  onFeedbackSent: () => void;
}

export const FeedbackContent: FC<Props> = (props) => {
  const { feedbackType, onRestartFeedback, onFeedbackSent } = props;

  const [comment, setComment] = useState<string>("");
  const [screenshot, setScreenshot] = useState<string | null>(null);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    onFeedbackSent();
  }

  return (
    <Container>
      <Header>
        <button type="button" onClick={onRestartFeedback}>
          <ArrowLeft weight="bold" className="icon-arrow-left" />
        </button>

        <img
          src={feedbackTypeInfo.image.source}
          alt={feedbackTypeInfo.image.alt}
        />
        <span>{feedbackTypeInfo.title}</span>

        <CloseButton />
      </Header>

      <Form onSubmit={handleSubmitFeedback}>
        <textarea
          placeholder="Conte com detalhes o que está acontecendo..."
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />

        <footer>
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            className="button-submit-feedback"
            type="submit"
            disabled={comment.length === 0}
          >
            Enviar feedback
          </button>
        </footer>
      </Form>

      <Footer>
        <span>
          Feito com ♥ pela <a href="http://rocketseat.com.br">Rocketseat</a>{" "}
        </span>
      </Footer>
    </Container>
  );
};
