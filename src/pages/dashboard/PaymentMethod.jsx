import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../../components/dashboard/Sidebar';
import Navbar from '../../components/dashboard/Navbar';

const PaymentMethod = () => {
    const location = useLocation();
    const { total } = location.state || {};

    // State untuk metode pembayaran yang dipilih
    const [selectedMethod, setSelectedMethod] = useState({
        method: "Mandiri Virtual Account",
        logo: "https://www.cdnlogo.com/logos/b/21/bank-mandiri.svg",
        code: "499207558109",
    });

    // Daftar Virtual Account
    const virtualAccounts = [
        {
            method: "BCA Virtual Account",
            logo: "https://storage.googleapis.com/rxstorage/Payment/06%20-%20BCA%20Logo.png",
            code: "123456789012",
        },
        {
            method: "BRI Virtual Account",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUA2kqUQIf_RTz3evvjkgAjnKC_piTxR0RUg&s",
            code: "987654321098",
        },
        {
            method: "Mandiri Virtual Account",
            logo: "https://www.cdnlogo.com/logos/b/21/bank-mandiri.svg",
            code: "499207558109",
        },
    ];

    // Daftar E-Wallet
    const eWallets = [
        {
            method: "Gopay",
            logo: "https://i.pinimg.com/736x/94/3c/97/943c971903518e53ffd324dd51e46a90.jpg",
            code: "0895386809300",
        },
        {
            method: "OVO",
            logo: "https://bucket.utua.com.br/img/2021/05/27718b01-design-sem-nome.png",
            code: "0895386809300",
        },
    ];

    // Fungsi untuk menangani perubahan metode pembayaran
    const handleSelectMethod = (method) => {
        setSelectedMethod(method);
    };

    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <section className="bg-[#f4fef1] w-full pl-60 pt-20">
                <div className="flex-grow">
                    <Navbar showSearchBar={true} />
                    <h1 className="mt-5 mx-10 text-2xl font-bold text-[#45c517]">Metode Bayar</h1>
                    <section className="min-h-screen mx-10 my-5 ">
                        <div className="flex gap-5">
                            {/* Daftar Metode Pembayaran */}
                            <div className="py-5 rounded-xl p-5 w-[60%] bg-white shadow-md">
                                {/* Virtual Account Section */}
                                <h1 className="text-xl font-semibold text-[#45c517]">Virtual Account</h1>
                                <div className="mt-5 space-y-3">
                                    {virtualAccounts.map((method) => (
                                        <div
                                            key={method.method}
                                            className="flex items-center justify-between border-b pb-3"
                                        >
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={method.logo}
                                                    alt={method.method}
                                                    className="w-8 rounded-full border h-8 object-cover"
                                                />
                                                <span className="text-gray-700">{method.method}</span>
                                            </div>
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value={method.method}
                                                className="accent-green-600 w-5 h-5"
                                                onChange={() => handleSelectMethod(method)}
                                                checked={selectedMethod.method === method.method}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* E-Wallet Section */}
                                <h1 className="mt-8 text-xl font-semibold text-[#45c517]">E-Wallet</h1>
                                <div className="mt-5 space-y-3">
                                    {eWallets.map((method) => (
                                        <div
                                            key={method.method}
                                            className="flex items-center justify-between border-b pb-3"
                                        >
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={method.logo}
                                                    alt={method.method}
                                                    className="w-8 rounded-full border h-8 object-cover"
                                                />
                                                <span className="text-gray-700">{method.method}</span>
                                            </div>
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value={method.method}
                                                className="accent-green-600 w-5 h-5"
                                                onChange={() => handleSelectMethod(method)}
                                                checked={selectedMethod.method === method.method}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-5 text-gray-600 text-sm">
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Pembayaran Virtual Account hanya dapat dilakukan via Mobile Banking</li>
                                        <li>Pastikan nominal pembayaran sudah sesuai dengan Total Harga transaksimu</li>
                                        <li>
                                            Setelah Anda melakukan pembayaran, mohon klik tombol konfirmasi pembayaran
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Detail Pembayaran */}
                            <div className="w-[40%] max-h-[340px] p-5 bg-white shadow-md rounded-xl space-y-5">
                                {/* Total Harga Section */}
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">Total Harga</h2>
                                    <p className="text-xl font-bold text-black">
                                        Rp{total?.toLocaleString('id-ID')}
                                    </p>
                                </div>

                                {/* Kode Bayar Section */}
                                <div className="mb-5">
                                    <h2 className="text-lg font-semibold text-gray-800">Kode Bayar</h2>
                                    <div className="flex items-center gap-3 mt-5">
                                        <img
                                            src={selectedMethod.logo}
                                            alt={selectedMethod.method}
                                            className="w-8 rounded-full border h-8 object-cover"
                                        />
                                        <span className="text-gray-700 font-semibold">
                                            {selectedMethod.method}
                                        </span>
                                    </div>

                                    <div className="mt-5 flex items-center border border-green-500 rounded-lg py-2 px-3 bg-gray-50">
                                        <span className="text-md font-bold text-gray-900 flex-grow">
                                            {selectedMethod.code}
                                        </span>
                                        <button
                                            className="text-green-600 font-semibold"
                                            onClick={() => navigator.clipboard.writeText(selectedMethod.code)}
                                        >
                                            Salin Kode
                                        </button>
                                    </div>
                                </div>

                                <div className="hover:cursor-pointer hover:bg-green-600 bg-[#45c517] p-1 py-2 text-center rounded-full">
                                    <h1 className="text-white text-base font-semibold">Konfirmasi Pembayaran</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default PaymentMethod;
