import "./App.css";
import ShopPage from "./components/shopPage/ShopPage";
import Nav from "./components/navBar/Nav";
import { Outlet } from "react-router-dom";
import tesfayedev from "./components/tesfayedev";

function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      <tesfayedev />
    </div>
  );
}

export default App;
