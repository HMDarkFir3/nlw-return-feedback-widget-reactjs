import "styled-components";
import { DARK } from "../../themes/dark";

type CustomTheme = typeof DARK;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
