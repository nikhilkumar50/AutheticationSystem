import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Background from "./components/Background.jsx";
import { Provider } from 'react-redux';
import { store } from './store';




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Background>
          <App />
        </Background>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
