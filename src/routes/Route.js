//The router

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";

export default function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
        </Route>
      </Routes>
    </Router>
  );
}