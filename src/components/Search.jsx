import { FiSearch } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";

const Search = () => {
  const { search, setSearch } = useContext(CartContext);
  return (
    <div className="flex items-center border border-gray-600 px-2 dark:border-white">
      <input
        type="text"
        placeholder="Search Product"
        className="border-none outline-none bg-transparent p-1 dark:text-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FiSearch size="20px" className="cursor-pointer dark:text-white" />
    </div>
  );
};

export default Search;
