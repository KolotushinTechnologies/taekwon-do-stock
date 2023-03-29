// Import Engine
import React from "react";
import ReactDOM from "react-dom/client";

// Import Engine Routing
import { BrowserRouter } from "react-router-dom";

// Import Pages And Components For App
import App from "./App";

// Import Styles
import "./styles/globals.css";

// Create root variable for ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Root Render
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
