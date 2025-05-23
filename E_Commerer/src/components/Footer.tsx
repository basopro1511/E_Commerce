import appStore from "../assets/images/Appstore.png";
import ggPlayIcon from "../assets/images/Ggplay.png";
import QR from "../assets/images/QR.png";

function Footer() {
  return (
    <>
      {" "}
      {/* Footer Start  */}
      <footer className="bg-black text-white">
        <div className="m-auto grid h-auto w-3/4 grid-cols-2 gap-6 pt-20 md:grid-cols-2 lg:grid-cols-5">
          <div className="">
            <p className="mb-5 text-2xl font-bold">EXCLUSIVE</p>
            <p className="mb-5 text-xl font-medium">Subscribe</p>
            <p className="mb-5">Get 10% off your first order</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your email"
              className="h-10 w-3/4 rounded-lg border"
            />
          </div>
          <div className="">
            <p className="mb-5 text-2xl font-bold">Support</p>
            <p className="mb-5">227 Phong Dien, Can Tho, Viet Nam</p>
            <p className="mb-5">quochoangnguyen2003ct@ gmail.com</p>
            <p className="mb-5">+0333 744 591</p>
          </div>
          <div className="">
            <p className="mb-5 text-2xl font-bold">Account</p>
            <p className="mb-5 hover:cursor-pointer hover:text-blue-800 hover:underline">
              My Account
            </p>
            <p className="mb-5 hover:cursor-pointer hover:text-blue-800 hover:underline">
              Login / Register
            </p>
            <p className="mb-5 hover:cursor-pointer hover:text-blue-800 hover:underline">
              Cart
            </p>
            <p className="mb-5 hover:cursor-pointer hover:text-blue-800 hover:underline">
              Wishlist
            </p>
            <p className="mb-5 hover:cursor-pointer hover:text-blue-800 hover:underline">
              Shop
            </p>
          </div>
          <div className="">
            {" "}
            <p className="mb-5 text-2xl font-bold">Quick Link</p>
            <p className="mb-5 hover:cursor-pointer hover:text-blue-800 hover:underline">
              Privacy Policy
            </p>
            <p className="mb-5 hover:cursor-pointer hover:text-blue-800 hover:underline">
              Term of Use
            </p>
            <p className="mb-5 hover:cursor-pointer hover:text-blue-800 hover:underline">
              FAQ
            </p>
            <p className="mb-5 hover:cursor-pointer hover:text-blue-800 hover:underline">
              Contact
            </p>
          </div>
          <div className="">
            <p className="mb-5 text-2xl font-bold">Download App</p>
            <p className="mb-2 text-xs text-gray-500">
              Save $3 with App New User Only
            </p>
            <div className="grid grid-cols-2 gap-3">
              <img src={QR} className="w-full" alt="" />
              <div className="grid grid-cols-1">
                <div className="">
                  <img src={ggPlayIcon} alt="" />
                </div>
                <div>
                  <img src={appStore} alt="" />
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-4">
              <svg
                className="h-6 w-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                className="h-6 w-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                className="h-6 w-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                className="h-6 w-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clip-rule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="m-auto mt-10 pb-10 text-center text-gray-700">
          Copyright Rimel 2022. All right reserved
        </div>
      </footer>
      {/* Footer End */}
    </>
  );
}
export default Footer;
