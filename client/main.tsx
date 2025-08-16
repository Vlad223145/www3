import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root")!;

// Check if root already exists to prevent multiple createRoot calls
if (!container._reactRootContainer) {
  const root = createRoot(container);
  root.render(<App />);
}
