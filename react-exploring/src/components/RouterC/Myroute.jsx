import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Navc from "./Navc";
import Order from "./Order";
import { useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";
const LazyAbout = lazy(() => import("./About"));

function Myroute() {
  const navigate = useNavigate();
  const handleOrder = () => {
    navigate("order");
  };
  return (
    <>
      <Navc />
      <button onClick={handleOrder}>Order</button>
      <Routes>
        <Route path="/" Component={Home} />
        <Route
          path="/about"
          element={
            <Suspense fallback="errorrr">
              <LazyAbout></LazyAbout>
            </Suspense>
          }
        />
        <Route path="/order" Component={Order} />
      </Routes>
    </>
  );
}

export default Myroute;
