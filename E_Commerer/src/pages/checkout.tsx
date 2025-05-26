import Footer from "../components/footer";
import Header from "../components/header";
import Navigator from "../components/navigate";
import CartCheckout from "../components/cartCheckout";

function Checkout() {
  return (
    <>
      <Header></Header>
      <main className="m-auto mt-10 w-3/4">
        <Navigator></Navigator>
        <div className="mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 md:gap-20">
          <div className="">
            <p className="mb-8 text-4xl font-bold">Billing Details</p>
            <form action="" method="post">
              <div className="mb-4">
                <label htmlFor="" className="text-base text-gray-700">
                  First Name
                </label>
                <br></br>
                <input
                  type="text"
                  className="mt-2 h-12 w-full rounded-lg bg-gray-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="text-base text-gray-700">
                  Company Name
                </label>
                <br></br>
                <input
                  type="text"
                  className="mt-2 h-12 w-full rounded-lg bg-gray-200"
                />
              </div>{" "}
              <div className="mb-4">
                <label htmlFor="" className="text-base text-gray-700">
                  Street Address
                </label>
                <br></br>
                <input
                  type="text"
                  className="mt-2 h-12 w-full rounded-lg bg-gray-200"
                />
              </div>{" "}
              <div className="mb-4">
                <label htmlFor="" className="text-base text-gray-700">
                  Apartment, floor, etc. (option)
                </label>
                <br></br>
                <input
                  type="text"
                  className="mt-2 h-12 w-full rounded-lg bg-gray-200"
                />
              </div>{" "}
              <div className="mb-4">
                <label htmlFor="" className="text-base text-gray-700">
                  Town / City
                </label>
                <br></br>
                <input
                  type="text"
                  className="mt-2 h-12 w-full rounded-lg bg-gray-200"
                />
              </div>{" "}
              <div className="mb-4">
                <label htmlFor="" className="text-base text-gray-700">
                  Phone Number
                </label>
                <br></br>
                <input
                  type="text"
                  className="mt-2 h-12 w-full rounded-lg bg-gray-200"
                />
              </div>{" "}
              <div className="mb-4">
                <label htmlFor="" className="text-base text-gray-700">
                  Email Address
                </label>
                <br></br>
                <input
                  type="text"
                  className="mt-2 h-12 w-full rounded-lg bg-gray-200"
                />
              </div>
            </form>
          </div>
          <div className="mt-10 md:mt-0 lg:mt-0">
            <div className="mt-24 hidden md:block lg:block"></div>
            {/* Cart-Checkout - Start */}
            <CartCheckout></CartCheckout>
            <CartCheckout></CartCheckout>
            <CartCheckout></CartCheckout>
            <CartCheckout></CartCheckout>
            <CartCheckout></CartCheckout>
            {/* Cart-Checkout - End */}
            <div className="mt-6 lg:pl-20">
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
              <div>
                <div className="mt-4 flex items-center">
                  <input type="radio" name="cash" id="1" />{" "}
                  <p className="ml-2">Bank</p>
                  <img
                    src="https://cdn.freebiesupply.com/logos/large/2x/visa-logo-svg-vector.svg"
                    className="ml-auto w-10"
                    alt=""
                  />
                  <img
                    src="https://cdn.freebiesupply.com/logos/large/2x/mastercard-4-logo-svg-vector.svg"
                    className="w-10"
                    alt=""
                  />
                  <img
                    src="https://brandlogos.net/wp-content/uploads/2022/04/bidv-logo-brandlogos.net_-512x512.png"
                    className="w-10"
                    alt=""
                  />
                  <img
                    src="https://developers.momo.vn/v3/vi/assets/images/square-8c08a00f550e40a2efafea4a005b1232.png"
                    className="w-10"
                    alt=""
                  />
                  <img
                    src="https://vinadesign.vn/uploads/images/2023/05/vnpay-logo-vinadesign-25-12-57-55.jpg"
                    className="w-10"
                    alt=""
                  />
                </div>
                <div className="flex items-center">
                  <input type="radio" name="cash" id="2" />{" "}
                  <p className="ml-2">Cash on delivery</p>
                </div>{" "}
              </div>
              <div className="mt-4 grid grid-cols-2 md:w-full">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="h-10 w-full rounded-xl border md:h-15"
                />
                <button className="ml-auto h-10 w-30 rounded-xl bg-red-500 text-white transition-all duration-300 hover:scale-95 hover:bg-red-600 md:h-15 md:w-40">
                  Apply Coupon
                </button>
              </div>
              <button className="mt-4 mb-4 flex h-15 w-40 items-center justify-center rounded-2xl border bg-red-500 p-2 text-white transition-all duration-300 hover:scale-95 hover:bg-red-600">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
export default Checkout;
