import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cart/CartContext";
import CartProduct from "../components/CartProduct";

const Cart = () => {
  const { cartItems, clearCart, checkoutCart, itemCount, total } =
    useContext(CartContext);

  return (
    <section className="mt-4  w-[100%]">
      {!cartItems?.length ? (
        <div className="text-center mt-[64px] pt-5 min-h-[calc(100vh-64px)] dark:bg-slate-800 w-[100%]">
          <p className="text-3xl font-extrabold dark:text-green-500">
            Shopping Cart({cartItems?.length})
          </p>
          <p className="text-xl font-semibold dark:text-green-400">
            Cart Is Empty.{" "}
            <Link to="/">
              <span className="underline cursor-pointer">Shop Now</span>
            </Link>
          </p>
        </div>
      ) : (
        <div className="mt-16">
          <div className="flex flex-col md:flex-row justify-between mt-[64px] gap-4 min-h-[calc(100vh-64px)] dark:bg-slate-800 py-5 px-2 sm:px-12">
            <div className="flex-[2] flex flex-col gap-2 mb-3">
              {cartItems?.map((product) => (
                <CartProduct key={product.id} product={product} />
              ))}
            </div>
            {/* Right  */}
            <div className="flex-1 flex flex-col items-center justify-center text-center border border-gray-400 py-3 h-[200px] sticky">
              <p className="text-xl dark:text-green-500">Total Items:</p>
              <p className="text-2xl font-bold dark:text-green-400">
                {itemCount}
              </p>
              <p className="text-xl dark:text-green-500">Total Payment:</p>
              <p className="text-2xl font-bold dark:text-green-400">${total}</p>
              <div className="mt-4">
                <button
                  className="px-2 border-[0.5px] border-red-400 bg-red-400 text-white font-bold text-xl"
                  onClick={() => clearCart()}
                >
                  Clear
                </button>
                <Link to="/checkout">
                  <button
                    className="ml-2 px-2 border-[0.5px] border-green-400 bg-green-400 text-white font-bold text-xl"
                    onClick={() => checkoutCart()}
                  >
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
