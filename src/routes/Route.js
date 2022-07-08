//The router

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import ShopPage from "../components/shopPage/ShopPage";
import TestPage from "../pages/TestPage";
import Cart from "../components/cart/Cart";

export default function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<ShopPage />} />
          <Route
            // exact
            path='category/:productCategory/'
            element={<TestPage />}
          />
          <Route
            // exact
            path='category/:productCategory/:subCategory'
            element={<TestPage />}
          />
          <Route
            // exact
            path='category/:productCategory/:subCategory/:option'
            element={<TestPage />}
          />
          <Route
            // exact
            path='search/:searchValue'
            element={<TestPage />}
          />
          <Route exact path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}
