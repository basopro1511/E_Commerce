function Navigator() {
  return (
    <>
      {location.pathname === "/about" && (
        <p className="text-gray-700">
          Home / <span className="text-black">About</span>
        </p>
      )}
       {location.pathname === "/contact" && (
        <p className="text-gray-700">
          Home / <span className="text-black">Contact</span>
        </p>
      )}
       {location.pathname === "/cart" && (
        <p className="text-gray-700">
          Home / <span className="text-black">Cart</span>
        </p>
      )}
       {location.pathname === "/checkout" && (
        <p className="text-gray-700">
          Home / <span className="text-black">Checkout  </span>
        </p>
      )}
    </>
  );
}
export default Navigator;
