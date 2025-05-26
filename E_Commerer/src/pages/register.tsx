import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

function Register() {
  return (
    <>
      <Header></Header>
      <main className="m-auto mt-10 mb-10 grid h-auto w-3/4 grid-cols-1 md:grid-cols-2 gap-10">
            <div className=" ">
          {" "}
          <img
            className="rounded-2xl"
            src="https://previews.123rf.com/images/bloomua/bloomua1405/bloomua140500011/28469406-online-shopping-and-e-commerce-concept-web-store-market-with-purchasing-product-process-via.jpg"
            alt=""
          />
        </div>
        <div className="m-auto flex">
          <form action="" method="post" className="m-auto h-auto">
            <p className="mb-2 text-3xl lg:text-4xl font-medium">Create an Account</p>
            <p>Enter your details below</p>
            <input
              type="text"
              name=""
              id=""
              className="mt-4 mb-7 h-8 w-full border-b-2 lg:mt-10"
              placeholder="Name"
            />
            <input
              type="text"
              name=""
              id=""
              className="mb-7 h-8 w-full border-b-2"
              placeholder="Email or Phone Number"
            />
            <input
              type="password"
              name=""
              id=""
              className="h-8 w-full border-b-2"
              placeholder="Password"
            />
            <div className="grid grid-cols-1">
              <button
                type="button"
                className="mt-10 h-14 w-full rounded-2xl bg-red-500 text-white transition-all duration-300 hover:scale-90 hover:bg-red-600"
              >
                Log in
              </button>
              <button
                type="button"
                className="mt-2 h-14 w-full rounded-2xl border text-black transition-all duration-300 hover:scale-90 hover:bg-gray-100"
              >
                Sign up with Google
              </button>
              <p className="m-auto mt-10">
                Already have account?{" "}
                <Link to="/">
                  <span className="cursor-pointer font-semibold underline hover:text-blue-800">
                    Log in
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
export default Register;
