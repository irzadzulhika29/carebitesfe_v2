// HomeDashboard.jsx
import Sidebar from "../../components/dashboard/Sidebar";
import Navbar from "../../components/dashboard/Navbar";
import ProductCard from "../../components/dashboard/grabmeals/ProductCard";
import { useEffect, useState } from 'react';


const GrabMeals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/productData.json')  // Pastikan path menuju productData.json benar
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <section className="bg-[#f4fef1] w-full pl-60 pt-20">
        <div className="flex-grow">
          <Navbar showSearchBar={true} />

          <h1 className="mt-5 mx-10 text-2xl font-bold">Grab Meals</h1>
          <h1 className="mx-10 my-2">Enjoy It!</h1>
          <section className="min-h-screen mx-10 my-5">
            <div className="flex gap-5 justify-between flex-wrap">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default GrabMeals;
