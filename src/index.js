import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import AppContextProvider from "./context/AppContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Router>
    <AppContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </AppContextProvider>
  </Router>
  // </React.StrictMode>
);
