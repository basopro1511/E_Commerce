import banner from "../assets/images/banner.png";
import promote from "../assets/images/Promote.png";
import playstation5 from "../assets/images/playstation5.png";
import arrivel2 from "../assets/images/Arrivel2.png";


import ButtonViewAll from "../components/ButtonViewAll";
import Devider from "../components/devider";
import Header from "../components/header";
import Product from "../components/product";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Header></Header>
      {/* Main start  */}
      <main>
        {/* Section Start */}
        <section className="m-auto mt-8 grid h-auto w-3/4 grid-cols-4 gap-10">
          <div className="border-gray-400 md:border-r-1">
            <ul className="h-auto w-auto">
              <li className="flex cursor-pointer items-center rounded-xl text-xs hover:bg-gray-200 md:h-8 md:text-base">
                Woman fashion{" "}
                <svg
                  className="mr-5 ml-auto w-2 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 8 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                  />
                </svg>
              </li>
              {/* Dropdown */}
              <ul className="absolute hidden w-auto rounded-xl bg-gray-300 md:w-80">
                <li className="rounded-xl p-1 hover:bg-gray-400">
                  Old School Style
                </li>
                <li className="rounded-xl p-1 hover:bg-gray-400">High Hell</li>
              </ul>
              {/* Dropdown */}

              <li className="mt-1 flex cursor-pointer items-center rounded-xl text-xs font-normal hover:bg-gray-200 md:h-8 md:text-base">
                Man's Fashion{" "}
                <svg
                  className="mr-5 ml-auto w-2 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 8 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                  />
                </svg>
              </li>
              <li className="mt-1 flex cursor-pointer items-center rounded-xl text-xs font-normal hover:bg-gray-200 md:h-8 md:text-base">
                Electronic
              </li>
              <li className="mt-1 flex cursor-pointer items-center rounded-xl text-xs font-normal hover:bg-gray-200 md:h-8 md:text-base">
                Home & Lifestyle
              </li>
              <li className="mt-1 flex cursor-pointer items-center rounded-xl text-xs font-normal hover:bg-gray-200 md:h-8 md:text-base">
                Medicine
              </li>
              <li className="mt-1 flex cursor-pointer items-center rounded-xl text-xs font-normal hover:bg-gray-200 md:h-8 md:text-base">
                Sport & Outdoor
              </li>
              <li className="mt-1 flex cursor-pointer items-center rounded-xl text-xs font-normal hover:bg-gray-200 md:h-8 md:text-base">
                Baby's & Toys
              </li>
              <li className="mt-1 flex cursor-pointer items-center rounded-xl text-xs font-normal hover:bg-gray-200 md:h-8 md:text-base">
                Groceries & Pets
              </li>
              <li className="mt-1 flex cursor-pointer items-center rounded-xl text-xs font-normal hover:bg-gray-200 md:h-8 md:text-base">
                Health & Beauty
              </li>
            </ul>
          </div>
          <div
            className="relative col-span-3 grid bg-black md:grid-cols-2"
            id="default-carousel"
            data-carousel="slide"
          >
            <div className="mt-2 pl-20 font-bold text-white md:pl-30">
              <p className="mb-2 text-base md:mt-10 md:mb-10">
                Iphone 14 Series
              </p>
              <p className="mb-2 text-xl md:mb-9 md:text-5xl">
                Up to 10% <br></br> off Voucher
              </p>
              <p className="underline">Shop now </p>
            </div>
            <div data-carousel-item>
              <img src={banner} alt="" className=" " />
            </div>
          </div>
        </section>
        {/* Section End */}

        {/* Section Start - Flash sales*/}
        <section className="m-auto mt-12 h-auto w-3/4">
          <div className="flex h-10 w-5 rounded-lg bg-red-500 text-red-500 md:h-20 md:w-10">
            <p className="mt-auto mb-auto ml-8 font-bold md:ml-15">Todays</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <p className="mt-auto mr-2 text-xl font-semibold md:text-4xl">
              Flash Sales
            </p>
            {/* Time flash sales */}
            <div className="mt-0 flex ">
              <div className="mr-2 w-12">
                <p className="text-xs">Days</p>
                <p className="text-xl font-bold md:text-4xl">03</p>
              </div>
              <span className="mt-auto mr-2 text-5xl text-red-500">:</span>
              <div className="mr-2 w-12">
                <p className="text-xs">Hours</p>
                <p className="text-xl font-bold md:text-4xl">23</p>
              </div>
              <span className="mt-auto mr-2 text-5xl text-red-500">:</span>
              <div className="w-12">
                <p className="text-xs">Minutes</p>
                <p className="text-xl font-bold md:text-4xl">19</p>
              </div>
              <span className="mt-auto mr-2 text-5xl text-red-500">:</span>
              <div className="w-12">
                <p className="text-xs">Seconds</p>
                <p className="text-xl font-bold md:text-4xl">56</p>
              </div>
            </div>
            {/* Time flash sales END */}

            {/* Next, Back icon START */}
            <div className="mt-auto mb-auto ml-auto flex">
              <svg
                className="h-11 w-11 cursor-pointer rounded-full bg-gray-200 text-black hover:scale-95 hover:bg-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14M5 12l4-4m-4 4 4 4"
                />
              </svg>

              <svg
                className="ml-2 h-11 w-11 cursor-pointer rounded-full bg-gray-200 text-black hover:scale-95 hover:bg-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </div>
            {/* Next, Back icon End */}
          </div>
          {/* Product with sale - Start */}
          <div className="flex overflow-x-auto">
            <div className="flex-shrink-0 snap-start">
              <Product />
            </div>
            <div className="flex-shrink-0 snap-start">
              <Product />
            </div>
            <div className="flex-shrink-0 snap-start">
              <Product />
            </div>
            <div className="flex-shrink-0 snap-start">
              <Product />
            </div>
            <div className="flex-shrink-0 snap-start">
              <Product />
            </div>
          </div>
          {/* Product with sale - End */}
          <ButtonViewAll></ButtonViewAll>
        </section>
        {/* Section End */}
        <Devider></Devider>
        {/* Section Start */}
        <section className="m-auto h-auto w-3/4">
          <div className="flex h-20 w-10 rounded-lg bg-red-500 text-red-500">
            <p className="mt-auto mb-auto ml-15 font-bold">Categories</p>
          </div>
          <div className="flex">
            <p className="mt-auto mr-2 text-4xl font-semibold">
              Browse By Category
            </p>
            {/* Next, Back icon START */}
            <div className="mt-auto mb-auto ml-auto flex">
              <svg
                className="h-11 w-11 cursor-pointer rounded-full bg-gray-200 text-black hover:scale-95 hover:bg-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14M5 12l4-4m-4 4 4 4"
                />
              </svg>
              <svg
                className="ml-2 h-11 w-11 cursor-pointer rounded-full bg-gray-200 text-black hover:scale-95 hover:bg-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </div>
            {/* Next, Back icon End */}
          </div>
          <div className="gap- grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7">
            {/* CATEGORY COMPONENT - START*/}
            <div className="mt-10 mr-8 h-37 w-43 rounded-xl border-2 border-gray-500 text-center">
              <div className="mt-7 mr-auto ml-auto flex h-auto w-auto items-center justify-center">
                <svg
                  className="h-15 w-15 text-gray-800 dark:text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p className="mt-4">Phones</p>
            </div>
            {/* CATEGORY COMPONENT - END*/}

            {/* CATEGORY COMPONENT - START*/}
            <div className="mt-10 mr-8 h-37 w-43 rounded-xl border-2 border-gray-500 text-center">
              <div className="mt-7 mr-auto ml-auto flex h-auto w-auto items-center justify-center">
                <svg
                  className="h-15 w-15 text-gray-800 dark:text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p className="mt-4">Phones</p>
            </div>
            {/* CATEGORY COMPONENT - END*/}

            {/* CATEGORY COMPONENT - START*/}
            <div className="mt-10 mr-8 h-37 w-43 rounded-xl border-2 border-gray-500 text-center">
              <div className="mt-7 mr-auto ml-auto flex h-auto w-auto items-center justify-center">
                <svg
                  className="h-15 w-15 text-gray-800 dark:text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p className="mt-4">Phones</p>
            </div>
            {/* CATEGORY COMPONENT - END*/}
            {/* CATEGORY COMPONENT - START*/}
            <div className="mt-10 mr-8 h-37 w-43 rounded-xl border-2 border-gray-500 text-center">
              <div className="mt-7 mr-auto ml-auto flex h-auto w-auto items-center justify-center">
                <svg
                  className="h-15 w-15 text-gray-800 dark:text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p className="mt-4">Phones</p>
            </div>
            {/* CATEGORY COMPONENT - END*/}
            {/* CATEGORY COMPONENT - START*/}
            <div className="mt-10 mr-8 h-37 w-43 rounded-xl border-2 border-gray-500 text-center">
              <div className="mt-7 mr-auto ml-auto flex h-auto w-auto items-center justify-center">
                <svg
                  className="h-15 w-15 text-gray-800 dark:text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p className="mt-4">Phones</p>
            </div>
            {/* CATEGORY COMPONENT - END*/}
            {/* CATEGORY COMPONENT - START*/}
            <div className="mt-10 mr-8 h-37 w-43 rounded-xl border-2 border-gray-500 text-center">
              <div className="mt-7 mr-auto ml-auto flex h-auto w-auto items-center justify-center">
                <svg
                  className="h-15 w-15 text-gray-800 dark:text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p className="mt-4">Phones</p>
            </div>
            {/* CATEGORY COMPONENT - END*/}
            {/* CATEGORY COMPONENT - START*/}
            <div className="mt-10 mr-8 h-37 w-43 rounded-xl border-2 border-gray-500 text-center">
              <div className="mt-7 mr-auto ml-auto flex h-auto w-auto items-center justify-center">
                <svg
                  className="h-15 w-15 text-gray-800 dark:text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p className="mt-4">Phones</p>
            </div>
            {/* CATEGORY COMPONENT - END*/}
          </div>
        </section>
        {/* Section End */}
        <Devider></Devider>

        {/* Best Seller Start */}
        <section className="m-auto w-3/4">
          <div className="flex h-20 w-10 rounded-lg bg-red-500 text-red-500">
            <p className="mt-auto mb-auto ml-15 w-30 font-bold">This month</p>
          </div>
          <div className="flex">
            <p className="mt-auto mr-2 text-4xl font-semibold">
              Best Selling Products
            </p>
            {/* Next, Back icon START */}
            <div className="mt-auto mb-auto ml-auto flex">
              <button className="h-14 w-40 rounded-2xl border bg-red-500 text-white duration-300 hover:scale-90 hover:bg-red-600">
                View All Products
              </button>
            </div>
            {/* Next, Back icon End */}
          </div>
          <div className="mt-4 flex">
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
          </div>
        </section>
        {/* Best Seller End */}
        <Devider></Devider>
        {/* Áside promote banner Start */}
        <aside className="m-auto grid w-3/4 md:grid-cols-2">
          <div className="bg-black px-4 py-10 md:px-30 md:py-30">
            <p className="mb-5 font-bold text-green-400">Categories</p>
            <p className="text-xl font-bold text-white md:text-5xl">
              Enhance Your <br /> Music Experience
            </p>
            <div className="mt-8 grid gap-1 md:grid-cols-5 grid-cols-2">
              <div className="mr-4 h-15 w-15 rounded-full border bg-white">
                <p className="mt-2 items-center text-center font-bold">05 </p>
                <p className="text-center text-xs">Days</p>
              </div>
              <div className="mr-4 h-15 w-15 rounded-full border bg-white">
                <p className="mt-2 items-center text-center font-bold">23 </p>
                <p className="text-center text-xs">Hours</p>
              </div>
              <div className="mr-4 h-15 w-15 rounded-full border bg-white">
                <p className="mt-2 items-center text-center font-bold">59 </p>
                <p className="text-center text-xs">Minutes</p>
              </div>
              <div className="mr-4 h-15 w-15 rounded-full border bg-white">
                <p className="mt-2 items-center text-center font-bold">35 </p>
                <p className="text-center text-xs">Seconds</p>
              </div>
            </div>
            <button className="mt-8 h-14 w-1/2 md:w-43 rounded-2xl bg-green-400 font-semibold text-white transition-all duration-300 hover:scale-90 hover:bg-green-600">
              {" "}
              Buy now
            </button>
          </div>
          <div className="flex items-center justify-center bg-black">
            <div className="">
              <img src={promote} className="w-3/4 md:w-full" alt="" />
            </div>
          </div>
          {/* 
          <div className="relative flex items-center justify-center bg-black">
            <div className="absolute inset-0 z-0 bg-gradient-to-l from-white via-black/70 to-transparent"></div>
            <div className="relative z-10 flex h-full items-center justify-end px-10">
              <img src={promote} alt="speaker" className="w-[400px]" />
            </div>{" "}
          </div> */}
        </aside>
        {/* Áside promote banner End */}

        <Devider></Devider>

        {/* Section Start */}
        <section className="m-auto h-auto w-3/4">
          <div className="flex h-20 w-10 items-center rounded-lg bg-red-500 text-red-500">
            <p className="ml-14 font-bold">Our Product</p>
          </div>
          <div className="flex">
            <p className="mt-auto mr-2 text-4xl font-semibold">
              Explore Our Product
            </p>
            {/* Next, Back icon START */}
            {/* Next, Back icon End */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
          </div>
          <ButtonViewAll></ButtonViewAll>
        </section>
        {/* Section End */}

        <Devider></Devider>

        {/* Section Start */}
        <section className="m-auto mb-15 h-auto w-3/4">
          <div className="flex h-20 w-10 items-center rounded-lg bg-red-500 text-red-500">
            <p className="ml-14 font-bold">Featured</p>
          </div>
          <div className="flex">
            <p className="mt-auto mr-2 text-4xl font-semibold">New Arrivel</p>
          </div>
          <div className="mt-10 grid h-150 grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative rounded-2xl border bg-black text-white">
              <div className="absolute bottom-0 z-1 px-10 py-10">
                <p className="text-2xl font-semibold">PlayStation 5</p>
                <p className="mt-4 mb-4">
                  Black and White version for the PS5 <br /> coming out an sale
                </p>
                <a className="text-xl font-semibold underline hover:cursor-pointer hover:text-blue-900">
                  Shop Now
                </a>
              </div>
              <div className="absolute bottom-0 z-0">
                <img
                  src={playstation5}
                  className="mr-auto ml-auto w-1/2 md:w-3/4 lg:w-3/4"
                  alt=""
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative col-span-2 h-auto rounded-2xl border bg-[#0d0d0d] text-white">
                <div className="absolute bottom-0 z-1 px-5 py-4 md:px-10 md:py-10">
                  <p className="text-2xl font-semibold">Women's Collections</p>
                  <p className=" md:mt-4 md:mb-4">
                    Featured Woman Collections That <br /> Give You Another Vibe
                  </p>
                  <a className="text-xl font-semibold underline hover:cursor-pointer hover:text-blue-900">
                    Shop Now
                  </a>
                </div>{" "}
                <div className="absolute bottom-0 z-0">
                  <img
                    src={arrivel2}
                    className="mr-auto ml-auto w-3/7 md:w-3/2 lg:w-3/5"
                    alt=""
                  />
                </div>
              </div>
              <div className="relative rounded-2xl border bg-black text-white">
                <div className="absolute bottom-0 z-1 px-5 py-4 md:px-10 md:py-10">
                  <p className="text-xl md:text-2xl font-semibold">Speaker</p>
                  <p className="text-xs md:mt-4 md:mb-4">Amazon Wireless speakers</p>
                  <a className="md:text-xl font-semibold underline hover:cursor-pointer hover:text-blue-900">
                    Shop Now
                  </a>
                </div>{" "}
                <div className="absolute bottom-0 z-0">
                  <img
                    src=""
                    className="mr-auto ml-auto w-3/7 md:w-3/2 lg:w-3/5"
                    alt=""
                  />
                </div>
              </div>
              <div className="relative rounded-2xl border bg-black text-white">
                <div className="absolute bottom-0 z-1 px-5 py-4 md:px-10 md:py-10">
                  <p className="text-2xl font-semibold">Perfume</p>
                  <p className="text-xs md:mt-4 md:mb-4">GUCCI INTENSE OUD EDP</p>
                  <a className="md:text-xl font-semibold underline hover:cursor-pointer hover:text-blue-900">
                    Shop Now
                  </a>
                </div>{" "}
                <div className="absolute bottom-0 z-0">
                  <img
                    src=""
                    className="mr-auto ml-auto w-3/7 md:w-3/2 lg:w-3/5"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section End */}

        {/* Section Start */}
        <section className="m-auto grid h-auto w-3/4 grid-cols-1 gap-10 py-20 md:grid-cols-3 lg:px-60">
          <div className="text-center">
            <div className="m-auto flex h-20 w-20 rounded-full bg-gray-300">
              <div className="m-auto h-15 w-15 rounded-full bg-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-auto mt-4 w-3/5"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="#ffffff"
                    d="M48 0C21.5 0 0 21.5 0 48L0 368c0 26.5 21.5 48 48 48l16 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L48 0zM416 160l50.7 0L544 237.3l0 18.7-128 0 0-96zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                  />
                </svg>
              </div>
            </div>
            <p className="font-bold">MONEY BACK GUARANTEE</p>
            <p className="">We return money within 30 days</p>
          </div>
          <div className="text-center">
            <div className="m-auto flex h-20 w-20 rounded-full bg-gray-300">
              <div className="m-auto h-15 w-15 rounded-full bg-black">
                <svg
                  className="m-auto mt-2 w-3/4 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.079 6.839a3 3 0 0 0-4.255.1M13 20h1.083A3.916 3.916 0 0 0 18 16.083V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z"
                  />
                </svg>
              </div>
            </div>
            <p className="font-bold">MONEY BACK GUARANTEE</p>
            <p className="">We return money within 30 days</p>
          </div>{" "}
          <div className="text-center">
            <div className="m-auto flex h-20 w-20 rounded-full bg-gray-300">
              <div className="m-auto h-15 w-15 rounded-full bg-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-auto mt-2 w-10"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fcfcfc"
                    d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"
                  />
                </svg>
              </div>
            </div>
            <p className="font-bold">MONEY BACK GUARANTEE</p>
            <p className="">We return money within 30 days</p>
          </div>{" "}
        </section>
        {/* Section End */}
      </main>
      {/* Main end */}
            <Footer></Footer>
    </>
  );
}

export default Home;
