import { useEffect, useState } from 'react';
import Sidebar from "../../../components/dashboard/Sidebar";
import Navbar from "../../../components/dashboard/Navbar";
import ProductCard from "../../../components/dashboard/grabmeals/ProductCard";
import CategoryCard from "../../../components/dashboard/CategoryCard";
import { motion } from 'framer-motion';

const GrabMeals = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Data Fetching
  useEffect(() => {
    // Fetch Products
    fetch('/productData.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching product data:', error));

    // Fetch Categories
    fetch('/categoryList.json')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching category data:', error));
  }, []);

  // Filter Icon Component
  const FilterIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      className="fill-current text-[#45c517] hover:cursor-pointer bi bi-filter-square-fill"
      viewBox="0 0 16 16"
    >
      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm.5 5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1M4 8.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m2 3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
    </svg>
  );

  return (
    <motion.div
      className="flex min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Sidebar />

      <section className="bg-[#f4fef1]  pl-60 pt-20">
        <div className="flex-grow mb-5">
          {/* Header Section */}
          <Navbar showSearchBar={true} />
          <h1 className="mt-5 mx-10 text-2xl font-bold text-[#45c517]">
            Grab Meals
          </h1>

          {/* Main Content */}
          <section className="min-h-screen mx-10">
            {/* Categories Section */}
            <div className="flex items-center gap-3">
              <FilterIcon />
              <div className="overflow-x-auto whitespace-nowrap max-w-full">
                <CategoryCard categories={categories} />
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex gap-5 justify-between flex-wrap">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </motion.div>
  );
};

export default GrabMeals;
