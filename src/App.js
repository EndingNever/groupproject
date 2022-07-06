import "./App.css";
import ShopPage from "./components/ShopPage";
import Nav from "./components/navBar/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
