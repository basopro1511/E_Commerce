import { Link } from "react-router-dom";
import gamepad from "../assets/images/GamePad.png";

function Product() {
  return (
    <>
      {" "}
      <div className="snap-start">
        {/* Cart with discount - START */}
        <div className="group relative mt-4 mr-10 mb-10 h-auto w-68 max-w-68">
          <div className="flex h-61 items-center justify-center bg-gray-200">
            <div className="absolute mr-50 mb-49 flex h-7 w-14 justify-center rounded-2xl bg-red-500 font-semibold text-white">
              -40%
            </div>
            <div className="absolute mb-39 ml-54">
              <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-white transition-all duration-300 hover:scale-95 hover:bg-gray-400">
                <svg
                  className="h-6 w-6 rounded-full text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                  />
                </svg>
              </div>
              <Link to={"/detail"}>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-all duration-300 hover:scale-95 hover:bg-gray-400">
                {" "}
                <svg
                  className="h-6 w-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-width="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="currentColor"
                    stroke-width="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div></Link>
            </div>
            <div className="absolute inset-x-0 bottom-21 h-12 translate-y-1 transform bg-black text-center opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <p className="mt-2 items-center font-semibold text-white transition-transform duration-300 hover:scale-125">
                Add to cart
              </p>
            </div>
            <div className="flex justify-center">
              <img src={gamepad} className="w-40" alt="gamepad" />
            </div>{" "}
          </div>
          <div className="mt-2">
            <p className="font-bold">HAVIT HV-G92 Gamepad</p>
            <p className="text-lg font-medium text-red-500">
              $120{" "}
              <span className="ml-2 text-lg text-gray-500 line-through">
                $160
              </span>
            </p>
            {/* Rating start - Start */}
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  className="h-6 w-6 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              ))}
              <svg
                className="h-6 w-6 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                />
              </svg>
              <p className="ml-2 text-base font-bold text-gray-500">(88)</p>
            </div>
            {/* Rating start - end */}
          </div>
        </div>
        {/* Cart with discount - END */}{" "}
      </div>{" "}
    </>
  );
}

export default Product;
