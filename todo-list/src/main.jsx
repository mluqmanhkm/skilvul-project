//library
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//style
import "./assets/plugins/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

//react redux
import { Provider } from "react-redux";
import Store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={Store}>
    <App />
  </Provider>
  // </React.StrictMode>,
);
