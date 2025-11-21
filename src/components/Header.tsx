import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import CartItem from "./CartItem";

const Header = () => {
  const { cart, cartCount, amount, addToCart, removeFromCart } = useCart();
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartDropDown = () => {
    setIsCartVisible((prevState) => !prevState);
  };

  return (
    <>
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl text-black-100 font-semibold">
          SurfMall 🌊 🛒{" "}
        </h1>
        <div className="relative">
          <FaShoppingCart
            className="text-2xl text-gray-700 hover:text-blue-700"
            onClick={toggleCartDropDown}
          />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs size-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
          {isCartVisible && (
            <div className="w-70 h-100 overflow-y-scroll bg-gray-200 absolute -right-3 top-11 rounded-b-md px-0.5 py-0.5">
              <h3 className="text-stone-600 text-sm font-bold bg-white text-center">
                Shopping Cart
              </h3>
              <hr className="bg-slate-100 border border-slate-200" />
              {cartCount > 0 ? (
                <div className="flex flex-col justify-between">
                  <div className=" bg-white flex justify-between mb-1 py-2">
                    <p className="text-stone-600 text-sm font-bold text-center">
                      Total:
                    </p>
                    <p className="text-stone-600 text-sm font-bold text-center">
                      ${amount.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 flex-1">
                    {cart.map((cartItem) => (
                      <CartItem
                        key={cartItem.id}
                        cartItem={cartItem}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                      />
                    ))}
                  </div>
                  <button className="bg-blue-400 mt-1 rounded-b-md px-3 text-white text-md font-bold">
                    Checkout
                  </button>
                </div>
              ) : (
                <div className="w-full h-full flex  flex-col justify-center items-center gap-2">
                  <FaShoppingCart className="text-5xl text-gray-700 hover:text-white" />
                  <p className="text-md font-semi-bold text-black-100">
                    Cart is empty!
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
