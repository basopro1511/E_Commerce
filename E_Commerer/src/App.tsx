import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Wishlist from "./pages/wishlist";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Detail from "./pages/productDetail";
import Account from "./pages/myAccount";
import About from "./pages/about";
import Contact from "./pages/contact";
import Error from "./pages/error";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/error" element={<Error />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
