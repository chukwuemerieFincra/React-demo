import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./Routes.jsx";
import { ToastContainer, toast } from "react-toastify";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <AppRoutes />
  </StrictMode>,
);
