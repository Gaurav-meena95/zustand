import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {BrowserRouter,Routes,Route} from "react-router";
import Store from "./pages/store.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>} ></Route>
    <Route path="/store" element={<Store/>} ></Route>
  </Routes>
  </BrowserRouter>

);
