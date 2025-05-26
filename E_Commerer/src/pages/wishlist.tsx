import Footer from "../components/footer";
import Header from "../components/header";
import Product from "../components/product";

function Wishlist() {
  return (
    <>
      <Header></Header>
      <main className="m-auto mt-10 w-3/4">
        <div className="flex">
          <p className="text-xl font-semibold">Wishlist(4)</p>
          <button
            type="button"
            className="ml-auto h-13 w-50 rounded-2xl border transition-all duration-300 hover:scale-90 hover:bg-gray-100"
          >
            {" "}
            Move All To Bag
          </button>
        </div>
        <section className="grid md:grid-cols-2 lg:grid-cols-5">
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </section>

        <section className="mt-10">
          <div className="flex mb-10">
            <div className="flex h-15 w-10 rounded-lg bg-red-500 text-red-500"></div>
            <p className="mt-auto mb-auto ml-4 w-30 font-bold">Just for you</p>
            <div className="mt-auto mb-auto ml-auto flex">
              <button className="h-14 w-40 rounded-2xl border text-black duration-300 hover:scale-90 hover:bg-gray-100">
                See All
              </button>
            </div>{" "}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5">
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
export default Wishlist;
