
import Sidebar from "./components/Sidebar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainScreen from "./screens/MainScreen";
import BrunMint from "./screens/BrunMint";
import BuySell from "./screens/BuySell";
import Options from "./screens/Options";
import PortfolioAutomatization from "./screens/PortfolioAutomatization";
import Popular from "./screens/Popular";
import Messages from "./screens/Messages";

function App() {

  return (
    <BrowserRouter>
    <Sidebar></Sidebar>
      <Routes>
        <Route
          path="/"
          element={
            <div id="app">
              <MainScreen></MainScreen>
            </div>
          }
        ></Route>
        <Route
          path="/mint_burn"
          element={
            <div id="app">
              <BrunMint></BrunMint>
            </div>
          }
        ></Route>
        <Route
          path="/buy_sell"
          element={
            <div id="app">
              <BuySell></BuySell>
            </div>
          }
        ></Route>
        <Route
          path="/options"
          element={
            <div id="app">
              <Options></Options>
            </div>
          }
        ></Route>
        <Route
          path="/portfolio_automatization"
          element={
            <div id="app">
              <PortfolioAutomatization></PortfolioAutomatization>
            </div>
          }
        ></Route>
        <Route
          path="/popular"
          element={
            <div id="app">
            <Popular></Popular>
            </div>
          }
        ></Route>
        <Route
          path="/messages"
          element={
            <div id="app">
            <Messages></Messages>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
