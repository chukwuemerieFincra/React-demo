import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Context from "./hooks/context/userContext.jsx";
import MariaContext from "./hooks/context/userContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MariaContext>
      <ThemeContext>
        <App />
      </ThemeContext>
    </MariaContext>
  </StrictMode>
);
