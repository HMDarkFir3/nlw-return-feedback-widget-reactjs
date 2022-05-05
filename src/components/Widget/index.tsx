import { FC } from "react";
import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";

import { Container } from "./styles";

export const Widget: FC = () => {
  return (
    <Container>
      <Popover.Panel>Teste</Popover.Panel>

      <Popover.Button className="popover-button">
        <ChatTeardropDots className="icon" />
        <span>
          <span />
          Feedback
        </span>
      </Popover.Button>
    </Container>
  );
};
