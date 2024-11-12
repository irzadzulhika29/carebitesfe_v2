import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from "../../dashboard/Sidebar";
import Navbar from "../../dashboard/Navbar";

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Default pembelian 1
  const [total, setTotal] = useState(0); // Total harga

  useEffect(() => {
    fetch('/productData.json')
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((item) => item.id === parseInt(id, 10));
        setProduct(foundProduct);
        if (foundProduct) {
          setTotal(foundProduct.price * 1); // Default total = harga x 1
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  const handleIncrease = () => {
    if (quantity < product.stok) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      setTotal(newQuantity * product.price);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotal(newQuantity * product.price);
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <section className="bg-[#f4fef1] w-full pl-60 pt-20">
        <div className="flex-grow">
          <Navbar />

          <div className="mx-10 mt-5 flex">
            <div className="flex gap-5">
              <div className="flex flex-col gap-5">
                <img src={product.image_url} alt={product.name} className="w-48 h-48 object-cover rounded-xl" />
                <div className="flex items-center gap-3 text-center">
                  <img src={product.photoProfile} alt={product.photoProfile} className="w-8 h-8 object-cover block rounded-full" />
                  <p className="text-xs font-semibold">{product.owner}</p>
                </div>
              </div>

              <div className="w-1/2">
                <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>
                <h3 className="text-2xl font-bold mb-4">Rp{product.price}</h3>
                <h1 className="bg-[#47cb18] text-white text-xs rounded text-center w-28 py-1">Hingga : {product.timeOver} WIB</h1>
                <p className="w-18 mt-10 text-lg text-[#47cb18]">Deskripsi</p>

                <div className="flex flex-col mt-5 mb-5">
                  <h1 className="font-bold text-xs">Detail Produk</h1>
                  <p className="text-xs">{product.category}</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="font-bold text-xs">Deskripsi Produk</h1>
                  <p className="text-xs">{product.description}</p>
                </div>
              </div>
            </div>

            <div className="min-w-[280px] max-h-64 rounded-xl p-5 bg-white shadow-md flex flex-col">
              <h1 className="font-bold text-lg mb-4">Jumlah pembelian</h1>
              {/* Kontrol Jumlah */}
              <div className="flex justify-between items-center">
                <div className="flex items-center border rounded-lg py-2 px-3 mb-4">
                  <button onClick={handleDecrease} className="text-green-600 text-2xl font-bold px-2">
                    -
                  </button>
                  <span className="text-green-600 text-xl font-bold mx-4">{quantity}</span>
                  <button onClick={handleIncrease} className="text-green-600 text-2xl font-bold px-2">
                    +
                  </button>
                </div>
                <p className="text-gray-500 text-sm mb-4">Sisa stok: {product.stok}</p>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center w-full mb-4">
                <span className="text-gray-700">Total</span>
                <span className="text-black font-bold">Rp{total.toLocaleString()}</span>
              </div>

              {/* Tombol */}
              <div className="flex justify-between gap-2">
                <button className="bg-green-600 w-28 text-white px-3 py-1 rounded-lg">Beli</button>
                <button className="border w-28 border-green-600 py-1 text-green-600 px-3 rounded-lg">
                  + Keranjang
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailProduct;
