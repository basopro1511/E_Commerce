import Footer from "../components/footer";
import Header from "../components/header";
import Navigator from "../components/navigate";

function Contact() {
  return (
    <>
      <Header></Header>
      <main className="m-auto mt-10 mb-10 grid h-auto w-3/4">
        <Navigator></Navigator>
        <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-8">
          <div className="border border-gray-200 p-10 shadow-xs lg:col-span-2">
            <div className="flex items-center">
              <div className="flex h-10 w-10 rounded-full bg-red-500">
                <svg
                  className="m-auto h-8 w-8 text-gray-800 dark:text-white"
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
                    d="m17.0896 13.371 1.1431 1.1439c.1745.1461.3148.3287.4111.5349.0962.2063.1461.4312.1461.6588 0 .2276-.0499.4525-.1461.6587-.0963.2063-.4729.6251-.6473.7712-3.1173 3.1211-6.7739 1.706-9.90477-1.4254-3.13087-3.1313-4.54323-6.7896-1.41066-9.90139.62706-.61925 1.71351-1.14182 2.61843-.23626l1.1911 1.19193c1.1911 1.19194.3562 1.93533-.4926 2.80371-.92477.92481-.65643 1.72741 0 2.38391l1.8713 1.8725c.3159.3161.7443.4936 1.191.4936.4468 0 .8752-.1775 1.1911-.4936.8624-.8261 1.6952-1.6004 2.8382-.4565ZM14 8.98134l5.0225-4.98132m0 0L15.9926 4m3.0299.00002v2.98135"
                  />
                </svg>
              </div>
              <p className="ml-5 font-medium">Call To Us</p>
            </div>
            <p className="mt-2 text-[14px]">
              We are available 24/7, 7 days a week
            </p>
            <p className="mt-2 text-[14px]">Phone: +333 333 333</p>
            <div className="mt-8 w-full border"></div>{" "}
            <div className="mt-10 flex items-center">
              <div className="flex h-10 w-10 rounded-full bg-red-500">
                <svg
                  className="m-auto h-6 w-6 text-gray-800 dark:text-white"
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
                    d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9"
                  />
                </svg>
              </div>
              <p className="ml-5 font-medium">Write To Us</p>
            </div>
            <p className="mt-2 text-[14px]">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="mt-2 text-[14px] text-wrap">
              Email: quochoangnguyen2003ct@gmail.com
            </p>
          </div>

          <div className="border border-gray-200 shadow-xs lg:col-span-6 p-10">
            <form action="" method="post" className="">
              <div className="grid grid-cols-3 gap-6 ">
                <input
                  type="text"
                  className="h-13 rounded-xl border border-gray-100 bg-gray-100"
                  placeholder=" Your name"
                ></input>
                <input
                  type="text"
                  className="h-13 rounded-xl border border-gray-100 bg-gray-100"
                  placeholder=" Your phone"
                ></input>
                <input
                  type="email"
                  className="h-13 rounded-xl border border-gray-100 bg-gray-100"
                  placeholder=" Your email"
                ></input>
              </div>
              <input type="text" className=" mt-10 w-full rounded-xl bg-gray-100 h-30 " placeholder="Your Message"></input>
              <button className="w-50 h-14 bg-red-500 mt-8 rounded-xl hover:bg-red-600 hover:scale-90 duration-300 transition-all cursor-pointer flex ml-auto text-white text-center items-center justify-center font-semibold"> Send Message</button>
            </form>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
export default Contact;
