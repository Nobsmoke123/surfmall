import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useState } from "react";

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
              <h3 className="text-stone-600 text-sm font-bold bg-white text-center mb-1">
                Shopping Cart
              </h3>

              {cartCount > 0 ? (
                <div className="flex flex-col gap-1">
                  {cart.map((cartItem) => (
                    <div
                      key={cartItem.id}
                      className="bg-white w-full flex px-2 rounded-sm"
                    >
                      <img
                        src={cartItem.product.image}
                        alt={cartItem.product.name}
                        className="size-25 rounded-md object-contain"
                      />
                      <div className="flex-1">
                        <h2 className="text-black-100 text-sm font-bold mb-1">
                          {cartItem.product.name}
                        </h2>
                        <div className="flex justify-between mb-1">
                          <button
                            onClick={() => removeFromCart(cartItem.product)}
                            className="bg-blue-400 px-2 rounded-sm text-white text-sm font-bold"
                          >
                            -
                          </button>
                          <h2 className="text-sm font-bold text-black-100">
                            {cartItem.quantity}
                          </h2>
                          <button
                            onClick={() => addToCart(cartItem.product)}
                            className="bg-blue-400 px-2 rounded-sm text-white text-sm font-bold"
                          >
                            +
                          </button>
                        </div>
                        <h2 className="text-center text-black-100 font-bold">
                          ${cartItem.price.toFixed(2)}
                        </h2>
                      </div>
                    </div>
                  ))}
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
