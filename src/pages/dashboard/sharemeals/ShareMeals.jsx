import Sidebar from "../../../components/dashboard/Sidebar";
import Navbar from "../../../components/dashboard/Navbar";
import { motion } from "framer-motion";
import ManagementShareMeals from "../../../components/dashboard/sharemeals/ManagementShareMeals";
import { Link } from 'react-router-dom';
import WavingImage from '../../../assets/img/waving.png';

const ShareMeals = () => {


  return (
    <motion.div
      className="flex min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Sidebar />
      <section className="bg-[#f4fef1] w-full pl-60 pt-20">
        <div className="flex-grow">
          <Navbar />

          <h1 className="mt-5 mx-10 text-[#45c517] text-2xl font-bold">Share Meals</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="text-green-500 hover:cursor-pointer mx-10 bi bi-arrow-left-short"
            viewBox="0 0 16 16"
            onClick={() => window.history.back()}
          >
            <path
              fillRule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
            />
          </svg>

          <div className="mt-5 mx-10 flex min-h-screen flex-col gap-5">
            {/* kelola produk */}
            <section>
              <h1 className="mb-5 text-xl font-semibold text-[#45c517]">Produk yang anda bagikan</h1>
              <div className="flex gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <ManagementShareMeals key={index} />
                ))}
              </div>
            </section>

            <div className="fixed right-10 top-2/3 transform -translate-y-1/2 w-48">
              <Link to="/share-meals/form">
                <img className="w-full " src={WavingImage} alt="" />
                <button className="bg-[#47cb18] hover:bg-green-600 text-white px-6 py-2 rounded-full">
                  Bagikan Produk
                </button>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ShareMeals;
