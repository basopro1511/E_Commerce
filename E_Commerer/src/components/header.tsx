function Header() {
  return (
    <>
   {/* Header Start */}
      <header className="m-auto box-border bg-black text-white">
        <div className="mr-auto ml-auto box-border flex h-12 w-3/4 items-center">
          <p className="flex-1 text-center text-xs md:text-base ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <span className="font-bold underline">Shop Now</span>
          </p>
          <div className="ml-auto flex items-center">
            <p>English</p>
            <svg
              className="ml-2 w-3 text-gray-800 dark:text-white"
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
      </header>
      {/* Header end */}

      {/* Nav Start */}
      <nav>
        <div className="m-auto mt-10 flex h-11 w-3/4">
          <p className="hidden text-2xl font-bold md:block">Exclusive</p>
          <ul className="mt-auto mb-auto ml-auto flex md:text-base gap-1 text-xs md:gap-5">
            <li className="hover:text-blue-800 hover:underline">Home</li>
            <li className="hover:text-blue-800 hover:underline">Contact</li>
            <li className="hover:text-blue-800 hover:underline">About</li>
            <li className="hover:text-blue-800 hover:underline">Sign Up</li>
          </ul>
          <div className="mt-auto mb-auto ml-auto flex">
            <div className="flex rounded-sm bg-gray-200 md:mr-2">
              <input
                placeholder=" What are you looking for?"
                className="h-8 w-20 md:w-50"
              ></input>
              <svg
                className="mt-auto mr-2 mb-auto h-6 w-6 text-gray-800"
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
                  stroke-width="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <svg
              className="m-auto h-6 w-6 text-gray-800 md:mr-2"
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
            <svg
              className="mt-auto mb-auto h-6 w-6 text-gray-800"
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
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
          </div>
        </div>
        <div className="mt-3 h-0.5 w-full bg-gray-400"></div>
      </nav>
      {/* Nav end */}
    </>
  );
}

export default Header;
