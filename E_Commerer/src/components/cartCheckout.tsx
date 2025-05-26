import playstation5 from "../assets/images/playstation5.png";

function CartCheckout(){
    return(
        <>
              <div className="mb-2 md:mb-4 lg:mb-10 flex items-center lg:pl-20">
              <img src={playstation5} className="mr-3 w-10" alt="" />
              <p className="repeat">LCD Monitor</p>
              <p className="ml-auto font-bold">$650</p>
            </div>
        </>
    )
}
export default CartCheckout;