import { createContext, useState, useEffect, useContext } from "react";
import type { Product } from "../types/Product";

export const ProductContext = createContext<{
  products: Product[];
  loading: boolean;
  error: string;
}>({
  products: [],
  loading: false,
  error: "",
});

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProductsAsync = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/products");

        if (!response.ok) {
          // Handle HTTP error status codes
          const errorText = await response.text();
          throw new Error(
            `HTTP error! Status: ${response.status}, Message: ${errorText}`
          );
        }

        const data = await response.json();
        setProduct(() => [...data]);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductsAsync();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom Hook
export const useProducts = () => {
  return useContext(ProductContext);
};
