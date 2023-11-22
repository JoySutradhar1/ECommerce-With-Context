import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <section className="mt-[64px] flex flex-col justify-start text-center pt-5 dark:bg-slate-800 min-h-[calc(100vh-64px)] px-12">
      <p className="text-2xl text-green-500 font-bold">
        Thank you for your purchase!
      </p>
      <p className="text-xl text-gray-500 dark:text-green-400">
        Your order has been placed and will be delivered to you within 24 hours.
      </p>
      <Link to="/">
        <button className="p-2 border-[0.5px] border-green-500 text-green-600 font-bold mt-4 hover:bg-green-600 hover:text-white transition-all duration-500">
          Continue Shopping
        </button>
      </Link>
    </section>
  );
};

export default Checkout;
