import { useCart } from "../context/CartContext";
import type { Product } from "../types/Product";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  return (
    <div className="bg-white rounded-lg shadow-xl p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="size-50 object-cover rounded-md mb-4 mx-auto flex-1"
      />

      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-sm text-gray-500 mb-2">{product.description}</p>
      <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
      <button
        className="bg-blue-600 text-white text-sm font-bold px-4 py-4 rounded-sm hover:bg-green-500 mt-4"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
