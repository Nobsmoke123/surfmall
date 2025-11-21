import type { CartProduct } from "../types/Cart";
import type { Product } from "../types/Product";

const CartItem = ({
  cartItem,
  removeFromCart,
  addToCart,
}: {
  cartItem: CartProduct;
  removeFromCart: (item: Product) => void;
  addToCart: (item: Product) => void;
}) => {
  return (
    <div key={cartItem.id} className="bg-white w-full flex px-2 rounded-sm">
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
  );
};

export default CartItem;
