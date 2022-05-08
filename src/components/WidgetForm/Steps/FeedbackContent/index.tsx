import { useState, FC } from "react";
import { ArrowLeft } from "phosphor-react";

import { CloseButton } from "../../../CloseButton";
import { ScreenshotButton } from "../../ScreenshotButton";

import { feedbackTypes, FeedbackTypeProps } from "../..";

import { Container, Header, Form, Footer } from "./styles";

interface Props {
  feedbackType: FeedbackTypeProps;
  onRestartFeedback: () => void;
}

export const FeedbackContent: FC<Props> = (props) => {
  const { feedbackType, onRestartFeedback } = props;

  const [screenshot, setScreenshot] = useState<string | null>(null);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

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
      </Header>

      <CloseButton />

      <Form>
        <textarea placeholder="Conte com detalhes o que está acontecendo..." />

        <footer>
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button className="button-submit-feedback" type="submit">
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
