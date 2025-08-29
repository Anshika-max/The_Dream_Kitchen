import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// ✅ Import bootstrap CSS globally
import "bootstrap/dist/css/bootstrap.min.css";
// ✅ Import bootstrap JS if you need dropdowns, modals, tooltips, etc.
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
