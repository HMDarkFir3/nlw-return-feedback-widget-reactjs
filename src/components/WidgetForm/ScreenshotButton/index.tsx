import { useState, FC } from "react";
import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";

import { Loading } from "../../Loading";

import { Container, HasPhotoContainer } from "./styles";

interface Props {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export const ScreenshotButton: FC<Props> = (props) => {
  const { screenshot, onScreenshotTook } = props;

  const [isTakingScreenshot, setIsTakingScreenshot] = useState<boolean>(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    onScreenshotTook(base64image);

    setIsTakingScreenshot(false);
  }

  function handleClearScreenshot() {
    onScreenshotTook(null);
  }

  if (screenshot) {
    return (
      <HasPhotoContainer
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 180,
        }}
        type="button"
        onClick={handleClearScreenshot}
      >
        <Trash className="icon-trash" weight="fill" />
      </HasPhotoContainer>
    );
  }

  return (
    <Container type="button" onClick={handleTakeScreenshot}>
      {isTakingScreenshot ? <Loading /> : <Camera className="icon-camera" />}
    </Container>
  );
};
