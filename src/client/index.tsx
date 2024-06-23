import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./styles/app.scss";

// Reload the window whenever esbuild sends the changes event
// EventSource is used to look for server sent events.
new EventSource("/esbuild").addEventListener("change", () => location.reload());

const root = ReactDom.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
