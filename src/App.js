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
    </div>
  );
}

export default App;
