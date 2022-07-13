import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Route from "./routes/Route";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Route />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
