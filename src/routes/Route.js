//The router

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import ShopPage from "../components/shopPage/ShopPage";
import TestPage from "../pages/TestPage";
import ProductPage from "../components/productPage/ProductPage";
import Cart from "../components/cart/Cart";
import Checkout from "../components/checkoutPage/Checkout";

export default function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<ShopPage />} />
          <Route
            // exact
            path='category/:productCategory/'
            element={<ProductPage />}
          />
          <Route
            // exact
            path='category/:productCategory/:subCategory'
            element={<ProductPage />}
          />
          <Route
            // exact
            path='category/:productCategory/:subCategory/:option'
            element={<ProductPage />}
          />
          <Route
            // exact
            path='search/:searchValue'
            element={<ProductPage />}
          />
          <Route
            // exact
            path='checkout'
            element={<Checkout />}
          />
          <Route exact path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}
