import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Page from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Page />
  </StrictMode>
);