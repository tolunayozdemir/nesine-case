import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"

const rootNode = document.getElementById("root");

if (!rootNode) throw Error("Root element should be added to index.html");

createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
