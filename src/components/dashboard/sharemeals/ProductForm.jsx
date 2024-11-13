import React, { useState } from "react";

const ProductForm = ({
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
      <h1 className="mb-5 text-xl font-bold">Informasi Produk</h1>
      <form className="flex flex-col gap-5">
        {/* Nama Produk */}
        <div className="flex flex-col">
          <label>Nama Produk</label>
          <input
            className="border rounded p-1 mt-2"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        
        {/* Foto Produk */}
        <div className="flex flex-col mt-4">
          <label>Foto Produk</label>
          <div className="flex gap-4 mt-2">
            {images.map((image, index) => (
              <div key={index} className="w-24 h-24 border rounded-md flex items-center justify-center relative">
                {image ? (
                  <img src={image} alt={`Foto ${index + 1}`} className="w-full h-full object-cover rounded-md" />
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
        
      </form>
    </section>
  );
};

export default ProductForm;
