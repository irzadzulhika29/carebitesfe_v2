import { useParams, useNavigate } from "react-router-dom";
import SidebarAdmin from "../../../../components/dashboard/admin/SidebarAdmin";
import Navbar from "../../../../components/dashboard/Navbar";
import lembagaSosialData from "../../../../assets/lembagasosial/lembagaSosialData.json";

const CampaignDetailVerif = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const campaign = lembagaSosialData.find(item => item.id === parseInt(id));

    if (!campaign) return <div>Campaign not found</div>;


    return (
        <div className="flex min-h-screen">
            <SidebarAdmin />
            <section className="bg-[#f4fef1] w-full pl-60 pt-20">
                <div className="flex-grow">
                    <Navbar />
                    <div className="mx-10 mt-5 flex items-center gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="text-green-500 hover:cursor-pointer bi bi-arrow-left-short transition-transform hover:scale-110"
                            viewBox="0 0 16 16"
                            onClick={() => navigate(-1)}
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                            />
                        </svg>
                        <h1 className="text-2xl font-bold text-[#45c517]">Detail Campaign</h1>
                    </div>

                    <section className="mx-10 my-5 bg-white rounded-xl shadow-md p-6">
                        {/* Campaign Image */}
                        <img
                            src={campaign.campaign_image_url}
                            alt={campaign.campaign_title}
                            className="w-full h-64 object-cover rounded-xl mb-6"
                        />

                        {/* Campaign Info */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Nama Lembaga
                                    </label>
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={campaign.image_url}
                                            alt={campaign.name}
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <span className="text-gray-800">{campaign.name}</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Judul Campaign
                                    </label>
                                    <input
                                        value={campaign.campaign_title}
                                        className="w-full rounded-lg border-2 border-green-200 px-4 py-2 bg-gray-50"
                                        readOnly
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Kategori
                                    </label>
                                    <input
                                        value={campaign.category}
                                        className="w-full rounded-lg border-2 border-green-200 px-4 py-2 bg-gray-50"
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Target Donasi
                                    </label>
                                    <input
                                        value={`Rp${campaign.target.toLocaleString('id-ID')}`}
                                        className="w-full rounded-lg border-2 border-green-200 px-4 py-2 bg-gray-50"
                                        readOnly
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Periode Campaign
                                    </label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            value={campaign.start_date}
                                            className="w-full rounded-lg border-2 border-green-200 px-4 py-2 bg-gray-50"
                                            readOnly
                                        />
                                        <input
                                            value={campaign.end_date}
                                            className="w-full rounded-lg border-2 border-green-200 px-4 py-2 bg-gray-50"
                                            readOnly
                                        />
                                    </div>
                                </div>

                               
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mt-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Deskripsi Campaign
                            </label>
                            <textarea
                                value={campaign.description}
                                className="w-full rounded-lg border-2 border-green-200 px-4 py-2 bg-gray-50 min-h-[100px]"
                                readOnly
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-8 flex justify-end gap-4">
                            <button className="px-6 py-2 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-50">
                                Tolak
                            </button>
                            <button className="px-6 py-2 rounded-full bg-[#45c517] text-white hover:bg-green-600">
                                Terima
                            </button>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default CampaignDetailVerif;