import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root")!;

// Prevent multiple root creation during hot reload
if (!(window as any).__reactRoot) {
  const root = createRoot(container);
  (window as any).__reactRoot = root;
  root.render(<App />);
}
