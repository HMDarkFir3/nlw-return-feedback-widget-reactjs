import { FC } from "react";
import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";

import { WidgetForm } from "../WidgetForm";

import { Container } from "./styles";

export const WidgetButton: FC = () => {
  return (
    <Container>
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="widget-button-popover-button">
        <ChatTeardropDots className="icon-chat-teardrop-dots" />
        <span>
          <span />
          Feedback
        </span>
      </Popover.Button>
    </Container>
  );
};
