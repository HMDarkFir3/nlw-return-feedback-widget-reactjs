import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";

import { DARK } from "./themes/dark";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={DARK}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
