import { useEffect, useState } from "react";
import type { Product } from "./types/Product";

const App = () => {
  const [products, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProductsAsync = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5001/products");

        if (!response.ok) {
          // Handle HTTP error status codes
          const errorText = await response.text();
          throw new Error(
            `HTTP error! Status: ${response.status}, Message: ${errorText}`
          );
        }
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductsAsync();
  }, []);

  return <div className="text-black text-3xl">Welcome to React!</div>;
};

export default App;
