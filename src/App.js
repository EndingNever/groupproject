import "./App.css";
import ShopPage from "./components/shopPage/ShopPage";
import Nav from "./components/navBar/Nav";
import { Outlet } from "react-router-dom";
import CardsGrid from "./components/CardsGrid";

function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      <div className="copyright-text">
        <h5> Tesla © 2022 </h5>
        <h5>Privacy {'&'} Legal </h5>
        <h5>Locations</h5>
      </div>
    </div>
  );
}

export default App;
