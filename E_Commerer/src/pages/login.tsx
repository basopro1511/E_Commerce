import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

function Login() {
  return (
    <>
      <Header></Header>
      <main className="m-auto mt-10 mb-10 grid h-auto w-3/4 grid-cols-1 gap-10 md:grid-cols-2">
        <div className=" ">
          {" "}
          <img
            className="rounded-2xl"
            src="https://previews.123rf.com/images/bloomua/bloomua1405/bloomua140500011/28469406-online-shopping-and-e-commerce-concept-web-store-market-with-purchasing-product-process-via.jpg"
            alt=""
          />
        </div>
        <div className="m-auto flex w-full md:ml-10">
          <form
            action=""
            method="post"
            className="m-auto mb-20 w-full lg:mt-20"
          >
            <p className="mb-2 text-3xl font-medium lg:text-4xl">
              Login to Exclusive
            </p>
            <p>Enter your details below</p>
            <input
              type="text"
              name=""
              id=""
              className="mt-4 mb-7 h-8 w-full border-b-2 lg:mt-10"
              placeholder="Email or Phone Number"
            />
            <input
              type="password"
              name=""
              id=""
              className="h-8 w-full border-b-2"
              placeholder="Password"
            />
            <Link to="/register">
              <p className="mt-4">
                If you dont have account.{" "}
                <span className="cursor-pointer underline hover:text-blue-800">
                  Register here !
                </span>{" "}
              </p>{" "}
            </Link>

            <div className="mt-4 grid grid-cols-2">
              <button
                type="button"
                className="h-10 w-32 lg:h-14 lg:w-36 rounded-xl bg-red-500 text-white transition-all duration-300 hover:scale-90 hover:bg-red-600"
              >
                Log in
              </button>
              <div className="mt-auto mb-auto flex">
                <p className="ml-auto text-red-500 underline hover:cursor-pointer hover:text-red-600">
                  Forgert Password?
                </p>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
export default Login;
