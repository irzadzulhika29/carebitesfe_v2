import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from "../../dashboard/Sidebar";
import Navbar from "../../dashboard/Navbar";

const DetailProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const handlePurchase = () => {
    // Kirim quantity sebagai state ke halaman Payment
    navigate(`/payment/${id}`, { state: { quantity } });
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <section className="bg-[#f4fef1] pl-60 pt-20">
        <div className="mt-5 flex-grow">
          <Navbar showSearchBar={true} />
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

          <section className="min-h-screen mx-10">

            <div className="flex mt-5 gap-5 justify-between">
              <div className="flex gap-10 p-5 shadow-md rounded-xl min-h-96 bg-white">
                {/* Produk */}
                <div className="flex flex-col min-w-48 gap-5">
                  <img src={product.image_url} alt={product.name} className="w-48 h-48 object-cover rounded-xl" />
                  <div className="flex items-center gap-3">
                    <img src={product.photoProfile} alt={product.photoProfile} className="w-8 h-8 object-cover rounded-full" />
                    <p className="text-xs font-semibold">{product.owner}</p>
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2">{product.productName}</h1>
                  <h3 className="text-2xl font-bold mb-2">Rp{Number(product.price).toLocaleString('id-ID')}</h3>
                  <h1 className="bg-[#e2f7db] text-xs rounded text-center w-28 py-1 mb-4">
                    Hingga : {product.timeOver} WIB
                  </h1>
                  <p className="text-lg text-[#47cb18] mb-4">Deskripsi</p>
                  <div className="flex flex-col mb-4">
                    <h1 className="font-bold text-xs">Detail Produk</h1>
                    <p className="text-xs">{product.category}</p>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-bold text-xs">Deskripsi Produk</h1>
                    <p className="text-xs">{product.description}</p>
                  </div>
                </div>
              </div>

              {/* Pembayaran */}
              <div className="flex-1 max-w-72 max-h-64 rounded-xl p-5 bg-white shadow-md flex flex-col">
                <h1 className="font-bold text-lg mb-4">Jumlah pembelian</h1>

                {/* Kontrol Jumlah */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center border rounded-lg py-2 px-3">
                    <button onClick={handleDecrease} className="text-green-600 text-2xl font-bold px-2">-</button>
                    <span className="text-green-600 text-xl font-bold mx-4">{quantity}</span>
                    <button onClick={handleIncrease} className="text-green-600 text-2xl font-bold px-2">+</button>
                  </div>
                  <p className="text-gray-500 text-sm">Sisa stok: {product.stok}</p>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center w-full mb-4">
                  <span className="text-gray-700">Total</span>
                  <span className="text-black font-bold">Rp{total.toLocaleString()}</span>
                </div>

                {/* Tombol */}
                <div className="flex justify-between gap-2">
                  <button onClick={handlePurchase} className="bg-green-600 w-28 text-white px-3 py-1 rounded-lg">Beli</button>
                  <button className="border w-28 border-green-600 py-1 text-green-600 px-3 rounded-lg">+ Keranjang</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default DetailProduct;
