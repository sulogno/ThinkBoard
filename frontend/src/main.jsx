import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from "./App.jsx";
import {Toaster} from "react-hot-toast"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster/>
    </BrowserRouter> 
  </React.StrictMode>
);
