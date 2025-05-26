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
          <Route path="/E_Commerce/home" element={<Home />}></Route>
          <Route path="/E_Commerce" element={<Login />}></Route>
          <Route path="/E_Commerce/register" element={<Register />}></Route>
          <Route path="/E_Commerce/wishlist" element={<Wishlist />}></Route>
          <Route path="/E_Commerce/cart" element={<Cart />}></Route>
          <Route path="/E_Commerce/checkout" element={<Checkout />}></Route>
          <Route path="/E_Commerce/detail" element={<Detail />}></Route>
          <Route path="/E_Commerce/account" element={<Account />}></Route>
          <Route path="/E_Commerce/about" element={<About />}></Route>
          <Route path="/E_Commerce/contact" element={<Contact />}></Route>
          <Route path="/E_Commerce/error" element={<Error />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
