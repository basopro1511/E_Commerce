import playstation5 from "../assets/images/playstation5.png";

function CartComponent(){
    return(
        <>
              <div className="mt-7"></div>
            {/* Cart Product - Start */}
            <tbody className="grid h-18 grid-cols-4 items-center justify-center border border-gray-100 shadow-xs">
              <td className="flex items-center justify-center">
                <img src={playstation5} className="w-10" alt="" />
                <p className="">LCD Monitor</p>
              </td>
              <td>$500</td>
              <td className="flex items-center justify-center">
                <div className="flex h-10 items-center justify-center rounded-xl border p-3">
                  <p>01</p>
                  <div className="ml-3">
                    <svg
                      className="h-3 w-3 text-gray-800 transition-all duration-300 hover:scale-125 hover:cursor-pointer hover:text-red-500 dark:text-black"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 8"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                      />
                    </svg>
                    <svg
                      className="h-3 w-3 text-gray-800 transition-all duration-300 hover:scale-125 hover:cursor-pointer hover:text-red-500 dark:text-black"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 8"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                      />
                    </svg>
                  </div>
                </div>
              </td>
              <td>$650</td>
            </tbody>
            {/* Cart Product - End */}
        </>
    )
}
export default CartComponent;