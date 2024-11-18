import { useState } from "react";
import SidebarAdmin from "../../../../components/dashboard/admin/SidebarAdmin";
import Navbar from "../../../../components/dashboard/Navbar";
import lembagaSosialData from "../../../../assets/lembagasosial/lembagaSosialData.json";
import { useNavigate } from "react-router-dom";

const CampaignVerif = () => {
  const [activeTab, setActiveTab] = useState("Draft");
  const navigate = useNavigate();
  const handleDetailClick = (id) => {
    navigate(`/campaign-detail-verif/${id}`);
  };

  const campaigns = {
    Draft: [lembagaSosialData[0]],     // Data ke-1 masuk ke Draft
    Accepted: [lembagaSosialData[1]],  // Data ke-2 masuk ke Accepted
    Rejected: [lembagaSosialData[2]],  // Data ke-3 masuk ke Rejected
  };

  return (
    <div className="flex min-h-screen">
      <SidebarAdmin />

      <section className="bg-[#f4fef1] w-full pl-60 pt-20">
        <div className="flex-grow">
          <Navbar />
          <h1 className="mt-5 mx-10 text-2xl text-[#45c517] font-bold">
            Verifikasi Charity
          </h1>
          <section className="min-h-screen mx-10 my-5 p-5 rounded-md bg-white shadow-md">
            {/* Tabs */}
            <div className="font-semibold flex gap-7">
              <p
                className={`cursor-pointer ${activeTab === "Draft"
                  ? "border-b-[2px] border-[#45c517] text-[#45c517]"
                  : "text-gray-500"
                  }`}
                onClick={() => setActiveTab("Draft")}
              >
                Draft
              </p>
              <p
                className={`cursor-pointer ${activeTab === "Accepted"
                  ? "border-b-[2px] border-[#45c517] text-[#45c517]"
                  : "text-gray-500"
                  }`}
                onClick={() => setActiveTab("Accepted")}
              >
                Accepted
              </p>
              <p
                className={`cursor-pointer ${activeTab === "Rejected"
                  ? "border-b-[2px] border-[#45c517] text-[#45c517]"
                  : "text-gray-500"
                  }`}
                onClick={() => setActiveTab("Rejected")}
              >
                Rejected
              </p>
            </div>
            {/* Table */}
            <div className="p-4">
              <table className="table-fixed w-full border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="px-4 py-2 font-semibold w-2/6">Username</th>
                    <th className="px-4 py-2 font-semibold w-1/12">ID</th>
                    <th className="px-4 py-2 font-semibold w-1/6">Kategori</th>
                    <th className="px-4 py-2 font-semibold w-1/4">Judul Charity</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns[activeTab].map((campaign, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 flex items-center gap-3">
                        <img
                          src={campaign.image_url}
                          alt="Profile"
                          className="w-10 h-10 rounded-full"
                        />
                        <span className="block truncate">{campaign.name}</span>
                      </td>
                      <td className="px-4 py-2">{campaign.id}</td>
                      <td className="px-4 py-2">{campaign.category}</td>
                      <td className="px-4 py-2">
                        <span className="block truncate">{campaign.campaign_title}</span>
                      </td>
                      <td className="px-4 py-2 text-right">
                        <button
                          onClick={() => handleDetailClick(campaign.id)}
                          className="bg-[#45c517] text-white w-32 py-2 rounded-full hover:opacity-90 text-sm font-medium"
                        >
                          Lihat Detail
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default CampaignVerif;
