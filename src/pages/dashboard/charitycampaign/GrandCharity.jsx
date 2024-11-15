import { useParams } from 'react-router-dom';
import { useState } from 'react';
import charityData from '../../../assets/lembagasosial/lembagaSosialData.json';
import Sidebar from '../../../components/dashboard/Sidebar';
import Navbar from '../../../components/dashboard/Navbar';

const GrandCharity = () => {
    const { id } = useParams();
    const campaign = charityData.find((item) => item.id === parseInt(id));
    if (!campaign) {
        return <p>Data tidak ditemukan</p>;
    }

    const [donationAmount, setDonationAmount] = useState('');
    const [selectedAmount, setSelectedAmount] = useState('');

    const handleNominalClick = (amount) => {
        setDonationAmount(formatNumber(amount));
        setSelectedAmount(amount);
    };

    const formatNumber = (num) => {
        return Number(num).toLocaleString('id-ID');
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
                        <div className='mb-5'>
                            <img className='w-full h-48 object-cover rounded-xl' src={campaign.campaign_image_url} alt="" />
                            <h1 className='font-semibold text-xl mt-5'>{campaign.campaign_title}</h1>
                        </div>

                        <h1 className="text-lg font-semibold text-[#45c517] mb-4">Pilih Nominal Donasi</h1>

                        {/* Pilihan Nominal */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <button
                                className={`border border-green-500 font-bold py-2 rounded-md text-center ${selectedAmount === '10000' ? 'bg-green-500 text-white' : 'text-green-600 hover:bg-green-100'
                                    }`}
                                onClick={() => handleNominalClick('10000')}
                            >
                                Rp10.000
                            </button>
                            <button
                                className={`border border-green-500 font-bold py-2 rounded-md text-center ${selectedAmount === '20000' ? 'bg-green-500 text-white' : 'text-green-600 hover:bg-green-100'
                                    }`}
                                onClick={() => handleNominalClick('20000')}
                            >
                                Rp20.000
                            </button>
                            <button
                                className={`border border-green-500 font-bold py-2 rounded-md text-center ${selectedAmount === '50000' ? 'bg-green-500 text-white' : 'text-green-600 hover:bg-green-100'
                                    }`}
                                onClick={() => handleNominalClick('50000')}
                            >
                                Rp50.000
                            </button>
                            <button
                                className={`border border-green-500 font-bold py-2 rounded-md text-center ${selectedAmount === '100000' ? 'bg-green-500 text-white' : 'text-green-600 hover:bg-green-100'
                                    }`}
                                onClick={() => handleNominalClick('100000')}
                            >
                                Rp100.000
                            </button>
                        </div>

                        {/* Input Nominal Pilihan */}
                        <h2 className="text-sm font-medium text-gray-700 mb-2">Atau Masukkan Nominal Donasi Pilihanmu</h2>
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
                        <button
                            className={`${donationAmount ? 'bg-[#45c517] text-white hover:bg-green-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                } font-bold py-3 rounded-md w-full text-center transition duration-300`}
                            disabled={!donationAmount}
                        >
                            Pilih Metode Pembayaran
                        </button>
                    </section>

                </div>
            </section>

        </div>
    );
};

export default GrandCharity;
