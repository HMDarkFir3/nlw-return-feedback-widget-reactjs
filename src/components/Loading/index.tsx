import { FC } from "react";
import { CircleNotch } from "phosphor-react";

import { Container } from "./styles";

export const Loading: FC = () => {
  return (
    <Container>
      <CircleNotch className="icon-circle-notch" weight="bold" />
    </Container>
  );
};
