import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Container from "./Context/Container";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Container>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>{" "}
    </BrowserRouter>
  </Container>,
  document.getElementById("root")
);
