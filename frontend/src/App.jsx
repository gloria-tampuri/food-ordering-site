import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="w-[80%] m-auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/order" element={<PlaceOrder />}></Route>
      </Routes>
    </div>
  );
};

export default App;
