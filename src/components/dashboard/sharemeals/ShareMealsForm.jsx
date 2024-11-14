import { useState, useEffect } from "react";

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
  stock,
  increment,
  decrement,
  handleInputChange,
  productPhoto,
  setProductPhoto,
  price,
  setPrice, // Tambahkan sebagai props
}) => {
  const kecamatanData = selectedKota ? kotaData[selectedKota] : {};
  const [images, setImages] = useState(Array(5).fill(null));
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoriesData, setCategoriesData] = useState([]); // State untuk kategori

  // Mengambil data kategori dari public/categoryList.json
  useEffect(() => {
    fetch("/categoryList.json")
      .then((response) => response.json())
      .then((data) => setCategoriesData(data))
      .catch((error) => console.error("Gagal memuat kategori:", error));
  }, []);

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
    newImages[index] = null; // Set gambar pada index tertentu menjadi null
    setImages(newImages);
  };

  return (
    <section className="p-3 rounded-md bg-white shadow-md">
      <h1 className="mb-5 text-xl font-semibold text-[#45c517]">Informasi Produk dan Pengambilan</h1>
      <form className="flex flex-col gap-5">
        {/* Input Nama Produk */}
        <div className="flex flex-col">
          <label>Nama Produk</label>
          <input
            className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Nama Produk"
          />
        </div>

        <div className="flex flex-col">
          <label>Deskripsi Produk</label>
          <textarea
            placeholder="Deskripsi produk"
            className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
            rows="5"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label>Harga Produk</label>
          <input
            className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value.replace(/\D/g, ""))}
            placeholder="Masukkan harga produk"
          />
        </div>

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

        <div className="flex flex-col">
          <label>Alamat Lengkap</label>
          <input
            className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            placeholder="Alamat Lengkap"
          />
        </div>

        <div className="flex flex-col">
          <label>Tanggal Pengambilan</label>
          <input
            className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label>Jam Pengambilan</label>
          <input
            className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <button
          className="py-2 text-white rounded-full w-32 bg-[#47cb18] mt-4 mb-5"
          type="submit"
        >
          Upload
        </button>
      </form>
    </section>
  );
};

export default ShareMealsForm;
