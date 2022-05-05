import { FC } from "react";
import { ChatTeardropDots } from "phosphor-react";

import { Container } from "./styles";

export const Widget: FC = () => {
  return (
    <Container>
      <button>
        <ChatTeardropDots className="icon" />

        <span>
          <span />
          Feedback
        </span>
      </button>
    </Container>
  );
};
