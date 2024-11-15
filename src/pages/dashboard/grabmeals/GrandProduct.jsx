import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import Sidebar from '../../../components/dashboard/Sidebar';
import Navbar from '../../../components/dashboard/Navbar';

const GrandProduct = () => {
    const { id } = useParams();
    const location = useLocation();
    const initialQuantity = location.state?.quantity || 1;
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(initialQuantity);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetch('/productData.json')
            .then((response) => response.json())
            .then((data) => {
                const foundProduct = data.find((item) => item.id === parseInt(id, 10));
                setProduct(foundProduct);
                if (foundProduct) {
                    setTotal(foundProduct.price * quantity);
                }
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [id, quantity]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <section className="bg-[#f4fef1] pl-60 pt-20 w-full">
                <div className="flex-grow">
                    <Navbar showSearchBar={true} />
                    <h1 className="mt-5 mx-10 text-2xl font-bold text-[#45c517] mb-3">Pembayaran</h1>

                    <section className="min-h-screen mx-5">
                        <div className="p-5 rounded-lg ">
                            <div className="flex flex-col gap-4 p-4 border rounded-lg mb-4 bg-white shadow-md">
                                <h2 className="text-lg font-bold mb-4">Daftar Produk</h2>
                                <div className='flex gap-3 items-center '>
                                    <img
                                        src={product.photoProfile}
                                        alt={product.owner}
                                        className="w-10 h-10 object-cover rounded-full"
                                    />
                                    <p className="text-sm font-semibold">{product.owner}</p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <img
                                        src={product.image_url}
                                        alt={product.productName}
                                        className="w-28 h-20 object-cover rounded"
                                    />
                                    <div>
                                        <h3 className="text-xl font-bold">{product.productName}</h3>
                                        <p className="text-sm text-gray-600">
                                            {quantity} x Rp{Number(product.price).toLocaleString('id-ID')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-5">
                                <h2 className="text-lg font-bold mb-4">Total Transaksi</h2>
                                <div className="flex justify-between">
                                    <h2>Total Harga : {quantity} Barang</h2>
                                    <h2 className="text-xl font-bold">
                                        Rp{total.toLocaleString('id-ID')}
                                    </h2>
                                </div>

                                {/* Pilih metode pembayaran */}
                                <Link
                                    to={`/payment-product/${id}`}
                                    state={{ total }}
                                >
                                    <div className="flex justify-end mt-3">
                                        <button className="bg-[#45c517] hover:bg-green-600 text-xs text-white font-bold py-2 px-4 rounded-full">
                                            Pilih Metode Pembayaran
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default GrandProduct;
