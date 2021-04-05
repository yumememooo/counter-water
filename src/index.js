import { StrictMode } from "react";
import ReactDOM from "react-dom";
import reset from 'react-style-reset';
import { injectGlobal } from '@emotion/css';
injectGlobal(reset, {
});

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
