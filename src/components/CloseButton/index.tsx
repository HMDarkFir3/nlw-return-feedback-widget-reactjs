import { FC } from "react";
import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

import { Container } from "./styles";

export const CloseButton: FC = () => {
  return (
    <Container>
      <Popover.Button
        className="close-button-popover-button"
        title="Fechar formulário de feedback"
      >
        <X className="icon-x" />
      </Popover.Button>
    </Container>
  );
};
