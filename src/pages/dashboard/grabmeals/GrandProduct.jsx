import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import Sidebar from '../../../components/dashboard/Sidebar';
import Navbar from '../../../components/dashboard/Navbar';

const GrandProduct = () => {
    const { id } = useParams();
    const location = useLocation();
    const { cartItems, total: cartTotal } = location.state || {};
    const [product, setProduct] = useState(null);
    const [total, setTotal] = useState(0);
    const quantity = location.state?.quantity || 1;

    function formatPrice(price) {
        return `Rp${Number(price).toLocaleString('id-ID')}`;
    }

    useEffect(() => {
        if (cartItems) {
            // Handle cart items
            setTotal(cartTotal);
        } else {
            // Handle single product
            fetch('/productData.json')
                .then((response) => response.json())
                .then((data) => {
                    const foundProduct = data.find((item) => item.id === parseInt(id, 10));
                    setProduct(foundProduct);
                    if (foundProduct) {
                        const qty = location.state?.quantity || 1;
                        setTotal(foundProduct.price * qty);
                    }
                })
                .catch((error) => console.error('Error fetching data:', error));
        }
    }, [id, cartItems, cartTotal]);

    if (!product && !cartItems) return <p>Loading...</p>;

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <section className="bg-[#f4fef1] pl-60 pt-20 w-full">
                <div className="flex-grow">
                    <Navbar showSearchBar={true} />
                    <h1 className="mt-5 mx-10 text-2xl font-bold text-[#45c517] mb-3">Pembayaran</h1>
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

                    <section className="min-h-screen mx-5">
                        <div className="p-5 rounded-lg">
                            <div className="flex flex-col gap-4 p-4 border rounded-lg mb-4 bg-white shadow-md">
                                <h2 className="text-lg font-bold mb-4">Daftar Produk</h2>

                                {cartItems ? (
                                    // Render cart items
                                    cartItems.map((item) => (
                                        <div key={item.id} className="border-b pb-4 last:border-b-0">
                                            <div className='flex gap-3 items-center mb-3'>
                                                <img
                                                    src={item.photoProfile}
                                                    alt={item.owner}
                                                    className="w-10 h-10 object-cover rounded-full"
                                                />
                                                <p className="text-sm font-semibold">{item.owner}</p>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <img
                                                    src={item.image_url}
                                                    alt={item.productName}
                                                    className="w-28 h-20 object-cover rounded"
                                                />
                                                <div>
                                                    <h3 className="text-xl font-bold">{item.productName}</h3>
                                                    <p className="text-sm text-gray-600">
                                                        {item.quantity} x {formatPrice(item.price)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (

                                    <div>
                                        <div className='flex gap-3 items-center'>
                                            <img
                                                src={product?.photoProfile}
                                                alt={product?.owner}
                                                className="w-10 h-10 object-cover rounded-full"
                                            />
                                            <p className="text-sm font-semibold">{product?.owner}</p>
                                        </div>

                                        <div className="flex items-start gap-4 mt-4">
                                            <img
                                                src={product?.image_url}
                                                alt={product?.productName}
                                                className="w-28 h-20 object-cover rounded"
                                            />
                                            <div>
                                                <h3 className="text-xl font-bold">{product?.productName}</h3>
                                                <p className="text-sm text-gray-600">
                                                    {location.state?.quantity || 1} x {formatPrice(product?.price)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-5">
                                <h2 className="text-lg font-bold mb-4">Total Transaksi</h2>
                                <div className="flex justify-between">
                                    <h2>
                                        Total Harga : {cartItems
                                            ? cartItems.reduce((sum, item) => sum + item.quantity, 0)
                                            : quantity || 1} Produk
                                    </h2>
                                    <h2 className="text-xl font-bold">
                                        {formatPrice(total)}
                                    </h2>
                                </div>

                                <Link
                                    to={`/payment-product/${id || 'cart'}`}
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