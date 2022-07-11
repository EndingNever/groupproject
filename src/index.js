import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import "./index.scss";
import App from "./App";
import Route from "./routes/Route";
=======
import "./index.css";
import Route from "./routes/Route";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./app/store";
>>>>>>> 251a206e8f6963de6d9dc73875182db09bcdc789

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Route />
    </Provider>
  </React.StrictMode>
);
