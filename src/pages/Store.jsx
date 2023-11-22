import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cart/CartContext";
import ProductCard from "../components/ProductCard";
// import { products } from "../data";

const Store = () => {
  const { search } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <main className="px-12 py-5 mt-[64px] min-h-[calc(100vh-64px)] dark:bg-slate-800">
      <div className="text-center">
        <h1 className="text-3xl font-bold dark:text-green-500">
          Browse the Store!
        </h1>
        <p className="text-xl dark:text-green-400">
          New Arrivals for you! Check out our selection of products.
        </p>
      </div>
      <div className="mt-5 grid grid-cols-16 gap-7">
        {products.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        ).length ? (
          products
            .filter((item) =>
              item.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        ) : (
          <div className="mt-5 flex justify-start">
            <p className="text-3xl font-extrabold dark:text-green-500">
              Oops, No Product Found!
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Store;
