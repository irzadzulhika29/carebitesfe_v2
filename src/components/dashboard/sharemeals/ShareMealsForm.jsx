
import React, { useState } from "react";

const ShareMealsForm = ({
  pickupLocation,
  setPickupLocation,
  date,
  setDate,
  time,
  setTime,
  selectedKota,
  setSelectedKota,
  selectedKecamatan,
  setSelectedKecamatan,
  selectedKelurahan,
  setSelectedKelurahan,
  kotaData,
  productName,
  setProductName,
  productDescription,
  setProductDescription,
  categories,
  selectedCategory,
  setSelectedCategory,
  handleAddCategory,
  handleRemoveCategory,
  stock,
  increment,
  decrement,
  handleInputChange,
  price,
  handlePriceChange,
  productPhoto,
  setProductPhoto,
}) => {
  const kecamatanData = selectedKota ? kotaData[selectedKota] : {};
  const [images, setImages] = useState(Array(5).fill(null));

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...images];
        newImages[index] = reader.result;
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="p-3 rounded-md bg-white shadow-md">
      <h1 className="mb-5 text-xl font-bold">Informasi Produk dan Pengambilan</h1>
      <form className="flex flex-col gap-5">
        {/* Product Information Section */}
        <div className="flex flex-col">
          <label>Nama Produk</label>
          <input
            className="border rounded p-1 mt-2"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="flex flex-col mt-4">
          <label>Foto Produk</label>
          <div className="flex gap-4 mt-2">
            {images.map((image, index) => (
              <div
                key={index}
                className="w-24 h-24 border rounded-md flex items-center justify-center relative"
              >
                {image ? (
                  <img
                    src={image}
                    alt={`Foto ${index + 1}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <label className="flex flex-col items-center justify-center cursor-pointer text-gray-500 bg-gray-100 w-full h-full rounded-md">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, index)}
                      className="hidden"
                    />
                    <span className="text-xs">Tambah Foto {index + 1}</span>
                  </label>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pickup Information Section */}
        <div className="flex flex-col">
          <label>Kota</label>
          <select
            className="border rounded p-1 mt-2"
            value={selectedKota}
            onChange={(e) => {
              setSelectedKota(e.target.value);
              setSelectedKecamatan("");
              setSelectedKelurahan("");
            }}
          >
            <option value="">-- Pilih Kota --</option>
            {Object.keys(kotaData).map((kota, index) => (
              <option key={index} value={kota}>
                {kota}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label>Kecamatan</label>
          <select
            className="border rounded p-1 mt-2"
            value={selectedKecamatan}
            onChange={(e) => {
              setSelectedKecamatan(e.target.value);
              setSelectedKelurahan("");
            }}
            disabled={!selectedKota}
          >
            <option value="">-- Pilih Kecamatan --</option>
            {Object.keys(kecamatanData).map((kecamatan, index) => (
              <option key={index} value={kecamatan}>
                {kecamatan}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label>Kelurahan</label>
          <select
            className="border rounded p-1 mt-2"
            value={selectedKelurahan}
            onChange={(e) => setSelectedKelurahan(e.target.value)}
            disabled={!selectedKecamatan}
          >
            <option value="">-- Pilih Kelurahan --</option>
            {selectedKecamatan &&
              kecamatanData[selectedKecamatan]?.map((kelurahan, index) => (
                <option key={index} value={kelurahan}>
                  {kelurahan}
                </option>
              ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label>Alamat Lengkap</label>
          <input
            className="border rounded p-1 mt-2"
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label>Tanggal Pengambilan</label>
          <input
            className="border rounded p-1 mt-2"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label>Jam Pengambilan</label>
          <input
            className="border rounded p-1 mt-2"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default ShareMealsForm;
