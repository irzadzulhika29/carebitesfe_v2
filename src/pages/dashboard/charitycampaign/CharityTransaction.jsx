import { useParams } from 'react-router-dom';
import { useState } from 'react';
import charityData from '../../../assets/lembagasosial/lembagaSosialData.json';
import Sidebar from '../../../components/dashboard/Sidebar';
import Navbar from '../../../components/dashboard/Navbar';
import { Link } from 'react-router-dom';

const CharityTransaction = () => {
    const { id } = useParams();
    const campaign = charityData.find((item) => item.id === parseInt(id));

    if (!campaign) {
        return <p>Data tidak ditemukan</p>;
    }

    const [donationAmount, setDonationAmount] = useState('');
    const [selectedAmount, setSelectedAmount] = useState('');

    const formatNumber = (num) => Number(num).toLocaleString('id-ID');

    const handleNominalClick = (amount) => {
        setDonationAmount(formatNumber(amount));
        setSelectedAmount(amount);
    };

    const handleInputChange = (e) => {
        const value = e.target.value.replace(/\./g, '').replace(/[^0-9]/g, '');
        const numericValue = value ? parseInt(value, 10) : '';
        setDonationAmount(numericValue ? formatNumber(numericValue) : '');
    };

    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <section className="bg-[#f4fef1] w-full pl-60 pt-20">
                <div className="flex-grow">
                    <Navbar />
                    <section className="min-h-screen mx-10 my-5 rounded-md bg-white shadow-md p-6">
                        {/* Header Kampanye */}
                        <div className="mb-5">
                            <img
                                className="w-full h-48 object-cover rounded-xl"
                                src={campaign.campaign_image_url}
                                alt={campaign.campaign_title}
                            />
                            <h1 className="font-semibold text-xl mt-5">{campaign.campaign_title}</h1>
                        </div>

                        {/* Pilihan Nominal */}
                        <h1 className="text-lg font-semibold text-[#45c517] mb-4">Pilih Nominal Donasi</h1>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {['10000', '20000', '50000', '100000'].map((amount) => (
                                <button
                                    key={amount}
                                    className={`border border-[#45c517] font-bold py-2 rounded-md text-center ${selectedAmount === amount
                                            ? 'bg-[#45c517] text-white'
                                            : 'text-green-600 hover:bg-green-100'
                                        }`}
                                    onClick={() => handleNominalClick(amount)}
                                >
                                    Rp{formatNumber(amount)}
                                </button>
                            ))}
                        </div>

                        {/* Input Nominal Pilihan */}
                        <h2 className="text-sm font-medium text-gray-700 mb-2">
                            Atau Masukkan Nominal Donasi Pilihanmu
                        </h2>
                        <div className="relative mb-6">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">Rp</span>
                            <input
                                type="text"
                                placeholder="0"
                                value={donationAmount}
                                onChange={handleInputChange}
                                className="pl-8 border border-green-500 w-full rounded-md py-2 text-gray-700 focus:outline-none focus:ring focus:ring-green-300"
                            />
                        </div>

                        {/* Tombol Pilih Metode Pembayaran */}
                        <Link
                            to={`/payment-charity/${id}`}
                            state={{ total: parseInt(donationAmount.replace(/\./g, '')) }}
                        >
                            <button
                                className={`${donationAmount
                                        ? 'bg-[#45c517] text-white hover:bg-green-600'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    } font-bold py-3 rounded-full w-full text-center transition duration-300`}
                                disabled={!donationAmount}
                            >
                                Pilih Metode Pembayaran
                            </button>
                        </Link>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default CharityTransaction;
