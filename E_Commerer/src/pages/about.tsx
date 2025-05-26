import Footer from "../components/footer";
import Header from "../components/header";
import Navigator from "../components/navigate";
import BussinesMan1 from "../assets/images/Bussinesmannobg.png";

function About() {
  return (
    <>
      <Header></Header>
      <main className="m-auto mt-10 mb-10 grid h-auto w-3/4">
        <Navigator></Navigator>
        <section className="mt-10 mb-10 grid h-auto grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="mt-auto mb-auto items-center justify-center">
            <p className="mb-4 text-2xl font-bold md:mb-4 md:text-3xl lg:mb-8 lg:text-5xl">
              Our Story
            </p>
            <p className="mb-2 md:mb-4 lg:mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et,
              nesciunt quibusdam. Reprehenderit, adipisicing elit. Et, nesciunt
              quibusdam. Reprehenderit, adipisicing elit. Et, nesciunt
              quibusdam. Reprehenderit, adipisicing elit. Et, nesciunt
              quibusdam. Reprehenderit, soluta iusto vitae fugiat, provident nam
              voluptas perferendis natus inventore a minus! Ab cumque corporis
              placeat consequatur dolor!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              numquam, quas doloribus tenetur reiciendis sint vel temporibus,
              adipisci laudantium consectetur similique. Dolorum aliquid dolorem
              tempore culpa quasi ducimus, neque eius!
            </p>
          </div>
          <img
            src="https://image-tc.galaxy.tf/wijpeg-5hwpt4qbfrteko9t5pkqcyqn3/shopping-resize_standard.jpg?crop=69%2C0%2C1783%2C1337"
            className="rounded-2xl"
            alt=""
          />
        </section>
        <section className="mt-10 grid gap-6 lg:grid-cols-4">
          <div className="h-auto items-center justify-center rounded-xl border border-gray-300 text-center">
            <div className="m-auto mt-4 flex h-20 w-20 rounded-full bg-gray-300">
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
            </div>{" "}
            <p className="mt-2 text-3xl font-bold">10.5k</p>
            <p className="mb-4">Sallers active our site</p>
          </div>
          <div className="h-auto items-center justify-center rounded-xl border-gray-500 bg-red-500 text-center">
            <div className="m-auto mt-4 flex h-20 w-20 rounded-full bg-red-300">
              <div className="m-auto h-15 w-15 rounded-full bg-white">
                <svg
                  className="m-auto mt-2 w-3/4 dark:text-black"
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
            </div>{" "}
            <p className="mt-2 text-3xl font-bold text-white">33k</p>
            <p className="mb-4 text-white">Monthly Product Sale</p>
          </div>{" "}
          <div className="h-auto items-center justify-center rounded-xl border border-gray-300 text-center">
            <div className="m-auto mt-4 flex h-20 w-20 rounded-full bg-gray-300">
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
            </div>{" "}
            <p className="mt-2 text-3xl font-bold">44.5k</p>
            <p className="mb-4">Customer active in our site</p>
          </div>{" "}
          <div className="h-auto items-center justify-center rounded-xl border border-gray-300 text-center">
            <div className="m-auto mt-4 flex h-20 w-20 rounded-full bg-gray-300">
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
            </div>{" "}
            <p className="mt-2 text-3xl font-bold">25k</p>
            <p className="mb-4">SAnual gross sale in our site</p>
          </div>
        </section>

        <section className="mt-20 grid gap-20 lg:grid-cols-3">
          <div className="">
            <div className="flex items-center justify-center rounded-xl bg-gray-100">
              <img src={BussinesMan1} className="mt-10 w-[250px]" alt="" />
            </div>
            <p className="mt-4 mb-1 text-3xl font-medium">Nguyen Quoc Hoang</p>
            <p className="mb-1">Founder & Charmain</p>
            <div className="flex">
              <svg
                className="h-6 w-6 text-gray-800 dark:text-black"
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
                className="h-6 w-6 text-gray-800 dark:text-black"
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
                className="h-6 w-6 text-gray-800 dark:text-black"
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
            </div>
          </div>

          <div className="">
            <div className="flex items-center justify-center rounded-xl bg-gray-100">
              <img src={BussinesMan1} className="mt-10 w-[250px]" alt="" />
            </div>
            <p className="mt-4 mb-1 text-3xl font-medium">Nguyen Quoc Hoang</p>
            <p className="mb-1">Founder & Charmain</p>
            <div className="flex">
              <svg
                className="h-6 w-6 text-gray-800 dark:text-black"
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
                className="h-6 w-6 text-gray-800 dark:text-black"
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
                className="h-6 w-6 text-gray-800 dark:text-black"
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
            </div>
          </div>

          <div className="">
            <div className="flex items-center justify-center rounded-xl bg-gray-100">
              <img src={BussinesMan1} className="mt-10 w-[250px]" alt="" />
            </div>
            <p className="mt-4 mb-1 text-3xl font-medium">Nguyen Quoc Hoang</p>
            <p className="mb-1">Founder & Charmain</p>
            <div className="flex">
              <svg
                className="h-6 w-6 text-gray-800 dark:text-black"
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
                className="h-6 w-6 text-gray-800 dark:text-black"
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
                className="h-6 w-6 text-gray-800 dark:text-black"
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
            </div>
          </div>
        </section>

          {/* Section Start */}
        <section className="m-auto grid h-auto grid-cols-1 gap-30 mt-10 py-20 md:grid-cols-3 lg:px-60">
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
      <Footer></Footer>
    </>
  );
}
export default About;
