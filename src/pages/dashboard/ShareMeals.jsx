import React, { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Navbar from "../../components/dashboard/Navbar";
import ShareMealsForm from "../../components/dashboard/sharemeals/ShareMealsForm";
import kotaData from "../../assets/sharemeals/kotaData.json"; // Import JSON
import { motion } from "framer-motion"; // Add this import

const ShareMeals = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(""); // Tambahkan state untuk harga
  const [productPhoto, setProductPhoto] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [selectedKota, setSelectedKota] = useState("");
  const [selectedKecamatan, setSelectedKecamatan] = useState("");
  const [selectedKelurahan, setSelectedKelurahan] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

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
            <ShareMealsForm
              productName={productName}
              setProductName={setProductName}
              productDescription={productDescription}
              setProductDescription={setProductDescription}
              stock={stock}
              increment={() => setStock(stock + 1)}
              decrement={() => setStock(stock > 0 ? stock - 1 : 0)}
              handleInputChange={(e) => setStock(Number(e.target.value))}
              price={price}
              setPrice={setPrice}
              productPhoto={productPhoto}
              setProductPhoto={setProductPhoto}
              pickupLocation={pickupLocation}
              setPickupLocation={setPickupLocation}
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              selectedKota={selectedKota}
              setSelectedKota={setSelectedKota}
              selectedKecamatan={selectedKecamatan}
              setSelectedKecamatan={setSelectedKecamatan}
              selectedKelurahan={selectedKelurahan}
              setSelectedKelurahan={setSelectedKelurahan}
              kotaData={kotaData}
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ShareMeals;
