import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import ProductForm from "../../components/dashboard/sharemeals/ProductForm";
import PickupForm from "../../components/dashboard/sharemeals/PickupForm";
import { saveAs } from "file-saver";
import kotaData from "../../assets/sharemeals/kotaData.json"; // Import JSON

const ShareMeals = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState("");
  const [productPhoto, setProductPhoto] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [selectedKota, setSelectedKota] = useState("");
  const [selectedKecamatan, setSelectedKecamatan] = useState("");
  const [selectedKelurahan, setSelectedKelurahan] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleAddCategory = () => {
    if (selectedCategory.trim() === "") {
      alert("Kategori tidak boleh kosong!");
      return;
    }
    if (categories.includes(selectedCategory)) {
      alert("Kategori sudah ada!");
      return;
    }
    setCategories([...categories, selectedCategory]);
    setSelectedCategory("");
  };

  const handleRemoveCategory = (category) => {
    setCategories(categories.filter((cat) => cat !== category));
  };

  const handleDownloadJson = () => {
    const productData = {
      productName,
      productDescription,
      categories,
      stock,
      price,
      productPhoto,
      pickupLocation,
      kota: selectedKota,
      kecamatan: selectedKecamatan,
      kelurahan: selectedKelurahan,
      date,
      time,
    };
    const blob = new Blob([JSON.stringify(productData, null, 2)], { type: "application/json" });
    saveAs(blob, "productData.json");
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <section className="bg-[#f4fef1] w-full pl-60 pt-20">
        <div className="flex-grow">
          <Navbar />
          <h1 className="mt-5 mx-10 text-2xl font-bold">Share Meals</h1>
          <div className="mt-5 mx-10 flex min-h-screen flex-col gap-5">
            <ProductForm
              productName={productName}
              setProductName={setProductName}
              productDescription={productDescription}
              setProductDescription={setProductDescription}
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              handleAddCategory={handleAddCategory}
              handleRemoveCategory={handleRemoveCategory}
              stock={stock}
              increment={() => setStock(stock + 1)}
              decrement={() => setStock(stock > 0 ? stock - 1 : 0)}
              handleInputChange={(e) => setStock(Number(e.target.value))}
              price={price}
              handlePriceChange={(e) => setPrice(e.target.value.replace(/\D/g, ""))}
              productPhoto={productPhoto}
              setProductPhoto={setProductPhoto}
            />
            <PickupForm
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
            <button
              className="py-2 text-white rounded-full w-32 bg-[#47cb18] mt-4  mb-5"
              onClick={handleDownloadJson}
            >
              Unduh JSON
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShareMeals;
