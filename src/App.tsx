import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { useProducts } from "./context/ProductContext";

const App = () => {
  const { products, loading, error } = useProducts();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">🛒 Product Catalog </h1>
        {loading && (
          <p className="text-white text-sm font-semibold"> Loading...</p>
        )}

        {error && <p className="text-white text-sm font-semibold">{error}</p>}

        <ProductList products={products} />
      </div>
    </>
  );
};

export default App;
