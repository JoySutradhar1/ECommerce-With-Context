import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import CartState from "./context/cart/CartState";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Store from "./pages/Store";

const App = () => {
  return (
    <CartState>
      <Navbar />
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </CartState>
  );
};

export default App;
