import Footer from "../components/footer";
import Header from "../components/header";
import Navigator from "../components/navigate";
import gamePad from "../assets/images/GamePad.png";
import playstation from "../assets/images/playstation5.png";
import Product from "../components/product";

function Detail() {
  return (
    <>
      <Header></Header>
      <main className="m-auto mt-10 mb-10 w-3/4">
        <Navigator></Navigator>
        <div className="mt-10 grid grid-cols-10 gap-6">
          <div className="col-span-3 grid gap-6 md:col-span-4 md:grid-rows-4 lg:col-span-2">
            <div className="flex items-center justify-center rounded-xl bg-gray-100 transition-all duration-300 hover:scale-95 hover:cursor-pointer hover:bg-gray-300">
              <img src={gamePad} alt="" />
            </div>
            <div className="flex items-center justify-center rounded-xl bg-gray-100 transition-all duration-300 hover:scale-95 hover:cursor-pointer hover:bg-gray-300">
              <img src={gamePad} alt="" />
            </div>
            <div className="flex items-center justify-center rounded-xl bg-gray-100 transition-all duration-300 hover:scale-95 hover:cursor-pointer hover:bg-gray-300">
              <img src={gamePad} alt="" />
            </div>
            <div className="flex items-center justify-center rounded-xl bg-gray-100 transition-all duration-300 hover:scale-95 hover:cursor-pointer hover:bg-gray-300">
              <img src={gamePad} alt="" />
            </div>
          </div>
          <div className="col-span-7 flex items-center justify-center rounded-xl bg-gray-100 md:col-span-6 lg:col-span-4">
            <img
              src={playstation}
              className="h-full max-h-[400px] w-full max-w-[400px] object-contain"
              alt=""
            />
          </div>
          <div className="col-span-10 md:col-span-10 lg:col-span-4 lg:px-2">
            <p className="mb-2 text-2xl font-semibold">Havic HV-G92 Gamepad</p>
            <div className="mb-6 flex">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-yellow-400"
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
                className="mr-2 h-5 w-5 text-yellow-400"
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
              <p className="text-[14px] text-gray-500">
                (150 Reviewes)<span className="mr-4 ml-4">|</span>{" "}
                <span className="text-xs text-green-500 md:text-[14px]">
                  In Stock
                </span>
              </p>
            </div>
            <p className="text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              voluptas doloribus dolorem officiis, laborum adipisci eos dolore
              excepturi doloremque recusandae inventore quis cupiditate ducimus
              ipsum molestiae cumque quos quam quibusdam.
            </p>
            <div className="mt-4 mb-4 border border-gray-300"></div>
            {/* Color, Size, Quantity Picker - Start */}
            <div className="mb-4 flex">
              <p className="mr-4 md:text-xl">Colors: </p>
              <label className="inline-flex cursor-pointer items-center">
                {/* 1. Ẩn radio gốc, bật peer */}
                <input
                  type="radio"
                  name="color"
                  value="red"
                  className="peer sr-only"
                />
                {/* 2. Vòng ngoài */}
                <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white transition peer-checked:scale-90 peer-checked:border-red-500">
                  {/* 3. Vòng nhỏ bên trong */}
                  <span className="h-4 w-4 rounded-full bg-red-500 transition peer-checked:bg-red-500" />
                </span>
                <span className="select-none">Red</span>
              </label>

              <label className="ml-4 inline-flex cursor-pointer items-center">
                {/* 1. Ẩn radio gốc, bật peer */}
                <input
                  type="radio"
                  name="color"
                  value="red"
                  className="peer sr-only"
                />
                {/* 2. Vòng ngoài */}
                <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white transition peer-checked:scale-90 peer-checked:border-blue-500">
                  {/* 3. Vòng nhỏ bên trong */}
                  <span className="h-4 w-4 rounded-full bg-blue-500 transition peer-checked:bg-blue-500" />
                </span>
                <span className="text-blue-500 select-none">Blue</span>
              </label>
            </div>
            <div className="mb-4 flex">
              <p className="mr-4 md:text-xl">Sizes: </p>
              <div className=" ">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="size"
                    value="xs"
                    className="peer sr-only"
                  />
                  <span className="mr-2 inline-block rounded border px-4 py-2 text-center text-sm font-medium transition select-none peer-not-checked:border-gray-300 peer-not-checked:bg-white peer-not-checked:text-gray-800 peer-checked:bg-red-500 peer-checked:text-white">
                    XS
                  </span>
                </label>
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="size"
                    value="s"
                    className="peer sr-only"
                  />
                  <span className="mr-1 inline-block rounded border px-4 py-2 text-center text-sm font-medium transition select-none peer-not-checked:border-gray-300 peer-not-checked:bg-white peer-not-checked:text-gray-800 peer-checked:bg-red-500 peer-checked:text-white">
                    S
                  </span>
                </label>{" "}
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="size"
                    value="m"
                    className="peer sr-only"
                  />
                  <span className="mr-2 inline-block rounded border px-4 py-2 text-center text-sm font-medium transition select-none peer-not-checked:border-gray-300 peer-not-checked:bg-white peer-not-checked:text-gray-800 peer-checked:bg-red-500 peer-checked:text-white">
                    M
                  </span>
                </label>
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="size"
                    value="l"
                    className="peer sr-only"
                  />
                  <span className="mr-2 inline-block rounded border px-4 py-2 text-center text-sm font-medium transition select-none peer-not-checked:border-gray-300 peer-not-checked:bg-white peer-not-checked:text-gray-800 peer-checked:bg-red-500 peer-checked:text-white">
                    L
                  </span>
                </label>
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="size"
                    value="xl"
                    className="peer sr-only"
                  />
                  <span className="mr-2 inline-block rounded border px-4 py-2 text-center text-sm font-medium transition select-none peer-not-checked:border-gray-300 peer-not-checked:bg-white peer-not-checked:text-gray-800 peer-checked:bg-red-500 peer-checked:text-white">
                    XL
                  </span>
                </label>
              </div>
            </div>
            <div className="grid grid-cols-10 gap-3">
              <div className="col-span-4 grid grid-cols-4">
                <div className="flex justify-center rounded-tl-xl rounded-bl-xl border border-gray-500 hover:scale-105 hover:cursor-pointer hover:bg-red-500">
                  <button className="text-2xl font-bold">-</button>
                </div>
                <div className="col-span-2 flex items-center justify-center border-t border-b border-gray-500 text-center">
                  <p className="text-xl font-semibold">2</p>
                </div>
                <div className="flex justify-center rounded-tr-xl rounded-br-xl border border-gray-500 hover:scale-105 hover:cursor-pointer hover:bg-red-500">
                  {" "}
                  <button className="text-2xl font-bold">+</button>
                </div>
              </div>
              <button className="col-span-4 h-10 rounded-xl border bg-red-500 text-white transition-all duration-300 hover:scale-95 hover:cursor-pointer hover:bg-red-600">
                Buy now
              </button>
              <div className="col-span-2 flex items-center justify-center rounded-lg border border-gray-500">
                <svg
                  className="h-6 w-6 text-gray-800 hover:text-red-500 dark:text-gray-700"
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
            </div>
            {/* Color, Size, Quantity Picker - End */}
            <div className="mt-4 rounded-xl border-2">
              <div className="flex">
                <svg
                  className="mt-auto mr-5 mb-auto ml-5 flex h-8 w-8 items-center justify-center text-gray-800 dark:text-black"
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
                    d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                  />
                </svg>
                <div className="p-2 pl-4">
                  <p className="text-xl font-semibold">Free Delivery</p>
                  <p className="text-xs underline hover:cursor-pointer hover:text-blue-800">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="flex border-t-2">
                <svg
                  className="mt-auto mr-5 mb-auto ml-5 flex h-8 w-8 items-center justify-center text-gray-800 dark:text-black"
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
                    d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
                  />
                </svg>
                <div className="p-2 pl-4">
                  <p className="text-xl font-semibold">Return Delivery</p>
                  <p className="text-xs">
                    Free 30 Days Delivery Returns.{" "}
                    <span className="underline hover:cursor-pointer hover:text-blue-800">
                      Detail
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related item - start */}
        <section className="mt-20">
          <div className="mb-10 flex">
            <div className="flex h-15 w-10 rounded-lg bg-red-500 text-red-500"></div>
            <p className="mt-auto mb-auto ml-4 w-30 font-bold text-red-500">
              Related Items
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5">
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
          </div>
        </section>
        {/* Related item - end */}
      </main>
      <Footer></Footer>
    </>
  );
}
export default Detail;
