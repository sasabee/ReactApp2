import React from "react";
import ReactDom from "react-dom/client"
import "./indexreact.css";
import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>);