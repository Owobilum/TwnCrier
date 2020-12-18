import React from "react";
import ReactDOM from "react-dom";
import { NewsDataProvider } from "./utils/newsData";
import App from "./App";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <NewsDataProvider>
      <App />
    </NewsDataProvider>
  </React.StrictMode>,
  rootElement
);
