// ShareMealsForm.jsx
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../../../components/dashboard/Sidebar";
import Navbar from "../../../components/dashboard/Navbar";
import kotaData from "../../../assets/sharemeals/kotaData.json";
import categoryList from "../../../../public/categoryList.json";

const ShareMealsForm = () => {
  const navigate = useNavigate();

  // State untuk form
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState("");
  const [images, setImages] = useState(Array(5).fill(null));
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedKota, setSelectedKota] = useState("");
  const [selectedKecamatan, setSelectedKecamatan] = useState("");
  const [selectedKelurahan, setSelectedKelurahan] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Data kategori
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    setCategoriesData(categoryList);
  }, []);

  // Data kecamatan dan kelurahan berdasarkan kota
  const kecamatanData = selectedKota ? kotaData[selectedKota] : {};
  const kelurahanData = selectedKecamatan ? kecamatanData[selectedKecamatan] : [];

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

  const handleDeleteImage = (index) => {
    const newImages = [...images];
    newImages[index] = null;
    setImages(newImages);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi form
    if (!productName || !productDescription || !price || !selectedCategory || !pickupLocation || !date || !time) {
      alert("Mohon lengkapi semua data yang diperlukan.");
      return;
    }


    // Reset form setelah berhasil
    setProductName("");
    setProductDescription("");
    setStock(0);
    setPrice("");
    setImages(Array(5).fill(null));
    setSelectedCategory("");
    setSelectedKota("");
    setSelectedKecamatan("");
    setSelectedKelurahan("");
    setPickupLocation("");
    setDate("");
    setTime("");

    navigate("/share-meals");
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <section className="bg-[#f4fef1] w-full pl-60 pt-20">
        <div className="flex-grow">
          <Navbar />
          <div className="mt-5 mx-10">
            <h1 className="text-[#45c517] text-2xl font-bold">Bagikan Produk</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="text-green-500 hover:cursor-pointer"
              viewBox="0 0 16 16"
              onClick={() => navigate(-1)}
            >
              <path
                fillRule="evenodd"
                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
              />
            </svg>

            <section className="p-3 rounded-md bg-white shadow-md mt-5">
              <h1 className="mb-5 text-xl font-semibold text-[#45c517]">Informasi Produk dan Pengambilan</h1>
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                {/* Nama Produk */}
                <div className="flex flex-col">
                  <label>Nama Produk</label>
                  <div className="relative">
                    <input
                      className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2 w-full"
                      type="text"
                      value={productName}
                      onChange={(e) => {
                        if (e.target.value.length <= 23) {
                          setProductName(e.target.value);
                        }
                      }}
                      maxLength={23}
                      placeholder="Nama Produk"
                      required
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                      {productName.length}/23
                    </span>
                  </div>
                </div>

                {/* Deskripsi Produk */}
                <div className="flex flex-col">
                  <label>Deskripsi Produk</label>
                  <textarea
                    placeholder="Deskripsi produk"
                    className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                    rows="5"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    required
                  ></textarea>
                </div>

                {/* Harga Produk */}
                <div className="flex flex-col">
                  <label>Harga Produk</label>
                  <input
                    className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Masukkan harga produk"
                    required
                  />
                </div>

                {/* Foto Produk */}
                <div className="flex flex-col mt-4">
                  <label>Foto Produk</label>
                  <div className="flex gap-4 mt-2">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="relative w-24 h-24 border rounded-md flex items-center justify-center"
                      >
                        {image ? (
                          <>
                            <img
                              src={image}
                              alt={`Foto ${index + 1}`}
                              className="w-full h-full object-cover rounded-md"
                            />
                            <button
                              className="absolute top-1 right-1 bg-[#45c517] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                              onClick={() => handleDeleteImage(index)}
                              type="button"
                            >
                              ×
                            </button>
                          </>
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

                {/* Kategori Produk */}
                <div className="flex flex-col">
                  <label>Kategori Produk</label>
                  <select
                    className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    required
                  >
                    <option value="">Pilih Kategori</option>
                    {categoriesData.map((category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Kota */}
                <div className="flex flex-col">
                  <label>Pilih Kota</label>
                  <select
                    className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                    value={selectedKota}
                    onChange={(e) => {
                      setSelectedKota(e.target.value);
                      setSelectedKecamatan("");
                      setSelectedKelurahan("");
                    }}
                    required
                  >
                    <option value="">Pilih Kota</option>
                    {Object.keys(kotaData).map((kota) => (
                      <option key={kota} value={kota}>
                        {kota}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Kecamatan */}
                <div className="flex flex-col">
                  <label>Pilih Kecamatan</label>
                  <select
                    className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                    value={selectedKecamatan}
                    onChange={(e) => {
                      setSelectedKecamatan(e.target.value);
                      setSelectedKelurahan("");
                    }}
                    disabled={!selectedKota}
                    required
                  >
                    <option value="">Pilih Kecamatan</option>
                    {selectedKota && Object.keys(kecamatanData).map((kecamatan) => (
                      <option key={kecamatan} value={kecamatan}>
                        {kecamatan}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Kelurahan */}
                <div className="flex flex-col">
                  <label>Pilih Kelurahan</label>
                  <select
                    className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                    value={selectedKelurahan}
                    onChange={(e) => setSelectedKelurahan(e.target.value)}
                    disabled={!selectedKecamatan}
                    required
                  >
                    <option value="">Pilih Kelurahan</option>
                    {selectedKecamatan && kelurahanData.map((kelurahan, index) => (
                      <option key={index} value={kelurahan}>
                        {kelurahan}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Alamat Lengkap */}
                <div className="flex flex-col">
                  <label>Alamat Lengkap</label>
                  <input
                    className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                    type="text"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    placeholder="Alamat Lengkap"
                    required
                  />
                </div>

                {/* Tanggal Pengambilan */}
                <div className="flex flex-col">
                  <label>Tanggal Pengambilan</label>
                  <input
                    className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                    type="date"
                    value={date}
                    onChange={handleDateChange}
                    required
                  />
                </div>

                {/* Jam Pengambilan */}
                <div className="flex flex-col">
                  <label>Jam Pengambilan</label>
                  <input
                    className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />
                </div>

                {/* Tombol Submit */}
                <button
                  className="py-2 text-white rounded-full w-32 bg-[#47cb18] mt-4 mb-5"
                  type="submit"
                >
                  Upload
                </button>
              </form>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShareMealsForm;