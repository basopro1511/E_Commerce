import { Link } from "react-router-dom";
import CartComponent from "../components/cart";
import Footer from "../components/footer";
import Header from "../components/header";
import Navigator from "../components/navigate";
function Cart() {
  return (
    <>
      <Header></Header>
      <main className="m-auto mt-10 w-3/4">
    <Navigator></Navigator>
        <div>
          <table className="mt-10 mb-10 w-full text-center">
            <thead className="grid h-18 grid-cols-4 items-center justify-center border border-gray-100 shadow-xs">
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </thead>
            <CartComponent></CartComponent>
            <CartComponent></CartComponent>
            <CartComponent></CartComponent>
            <CartComponent></CartComponent>
          </table>
          <div className="mb-4 flex">
            <button className="h-14 w-44 rounded-xl border transition-all duration-300 hover:scale-95 hover:bg-gray-100">
              Return to shop
            </button>
            <button className="ml-auto h-14 w-30 rounded-xl border transition-all duration-300 hover:scale-95 hover:bg-gray-100">
              Update Cart
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-60">
            <div className="flex">
              <input
                type="text"
                placeholder="Coupon Code"
                className="h-15 w-70 rounded-xl border"
              />
              <button className="ml-2 h-15 w-40 rounded-xl bg-red-500 text-white transition-all duration-300 hover:scale-95 hover:bg-red-600">
                Apply Coupon
              </button>
            </div>
            <div className="rounded-xl border-2 mb-12">
              <div className="mt-6 mr-5 ml-5">
                <p className="mb-2 text-xl font-medium">Cart Total</p>
                <div className="mt-4 flex">
                  <p className="">Sub Total:</p>
                  <p className="ml-auto font-medium">$1750</p>
                </div>
                <div className="mt-4 mb-4 w-full border"></div>
                <div className="mt-4 flex">
                  <p className="">Shipping:</p>
                  <p className="ml-auto font-medium">Free</p>
                </div>
                <div className="mt-4 mb-4 w-full border"></div>
                <div className="mt-4 flex">
                  <p className="">Total:</p>
                  <p className="ml-auto font-medium">$1750</p>
                </div>
                <Link to="/checkout">
                <button className="m-auto flex h-15 p-2 w-auto mb-4 mt-4 items-center justify-center rounded-2xl border bg-red-500 transition-all duration-300 text-white hover:scale-95 hover:bg-red-600">
                  Process to Checkout
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
export default Cart;
