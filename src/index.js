import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import WishesContext from "./context/WishesContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <WishesContext>
      <ThemeProvider>
        <CSSReset />
        <App />
      </ThemeProvider>
    </WishesContext>
  </React.StrictMode>,
  document.getElementById("root")
);
