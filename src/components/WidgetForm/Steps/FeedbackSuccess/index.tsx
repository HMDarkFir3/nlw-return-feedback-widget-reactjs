import { FC } from "react";

import { CloseButton } from "../../../CloseButton";

import { Container, Header, Footer } from "./styles";

import succesSvg from "../../../../assets/Success.svg";

interface Props {
  onRestartFeedback: () => void;
}

export const FeedbackSuccess: FC<Props> = (props) => {
  const { onRestartFeedback } = props;

  return (
    <Container>
      <Header>
        <CloseButton />
      </Header>

      <div>
        <img src={succesSvg} alt="Imagem de sucesso" />

        <span>Agradecemos o feedback!</span>

        <button type="button" onClick={onRestartFeedback}>
          Quero enviar outro feedback
        </button>
      </div>

      <Footer>
        <span>
          Feito com ♥ pela <a href="http://rocketseat.com.br">Rocketseat</a>{" "}
        </span>
      </Footer>
    </Container>
  );
};
