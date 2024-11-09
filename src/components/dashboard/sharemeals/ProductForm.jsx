import React from "react";

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
}) => (
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
      {/* Deskripsi Produk */}
      <div className="flex flex-col">
        <label>Deskripsi Produk</label>
        <textarea
          className="border rounded p-3 mt-2 h-32 resize-none"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
      </div>
      {/* Kategori */}
      <div className="flex flex-col">
        <label>Kategori Produk</label>
        <div className="flex items-center mt-2">
          <input
            type="text"
            className="border rounded p-2 flex-grow"
            placeholder="Masukkan kategori produk"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
          <button
            type="button"
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleAddCategory}
          >
            Tambah
          </button>
        </div>
        {categories.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold">Kategori yang Dipilih:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-200 px-3 py-1 rounded-full"
                >
                  <span>{category}</span>
                  <button
                    type="button"
                    className="ml-2 text-red-500"
                    onClick={() => handleRemoveCategory(category)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Jumlah Produk */}
      <div className="flex items-center space-x-2">
        <label>Jumlah Produk</label>
        <button type="button" onClick={decrement} className="bg-[#45c517] text-white px-4 py-1 rounded-md">
          -
        </button>
        <input
          type="text"
          value={stock}
          onChange={handleInputChange}
          className="w-16 text-center border border-gray-300 rounded-md"
        />
        <button type="button" onClick={increment} className="bg-[#45c517] text-white px-4 py-1 rounded-md">
          +
        </button>
      </div>
      {/* Harga Produk */}
      <div className="flex flex-col mt-4 w-full">
        <label>Harga Produk</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">Rp</span>
          <input
            className="border w-full rounded p-1 mt-2 pl-8"
            type="text"
            value={price}
            onChange={handlePriceChange}
            placeholder="0"
          />
        </div>
      </div>
      {/* Foto Produk */}
      <div className="flex flex-col mt-4">
        <label>Foto Produk</label>
        <input
          className="border rounded p-1 mt-2"
          type="text"
          value={productPhoto}
          onChange={(e) => setProductPhoto(e.target.value)}
        />
      </div>
    </form>
  </section>
);

export default ProductForm;
