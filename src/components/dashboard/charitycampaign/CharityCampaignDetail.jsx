import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Navbar from '../../dashboard/Navbar';
import charityData from '../../../assets/lembagasosial/lembagaSosialData.json';

const CharityCampaignDetail = () => {
  const { id } = useParams();
  const campaign = charityData.find((item) => item.id === parseInt(id));

  // Cek apakah campaign ditemukan
  if (!campaign) {
    return <p>Data tidak ditemukan</p>;
  }

  console.log("Campaign Data:", campaign); // Debugging untuk memastikan data terbaca

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <section className="bg-[#f4fef1] w-full pl-60 pt-20">
        <div className="flex-grow">
          <Navbar />
          <div className="mt-5 mx-10">
            <section className="bg-white shadow-md rounded-xl p-5">
              {/* Gambar Kampanye */}
              <img
                src={campaign.campaign_image_url}
                alt="Campaign Image"
                className="w-full h-72 object-cover rounded-md my-5"
              />

              {/* Nama dan Lokasi Yayasan */}
              <p className="my-2 font-semibold">{campaign.name}</p>
              <p className="my-2 font-semibold">{campaign.location}</p>

              {/* Judul Kampanye */}
              <h1 className="text-2xl font-bold">{campaign.campaign_title}</h1>



              {/* Deskripsi Kampanye */}
              <p className="text-gray-600 text-sm">{campaign.description}</p>

              {/* Informasi Terkumpul */}
              <div className="mt-5">
                <h3 className="text-lg font-bold">Terkumpul</h3>
                <p className="text-sm">
                  Rp{campaign.collected.toLocaleString('id-ID')} dari Rp{campaign.target.toLocaleString('id-ID')}
                </p>
                <div className="w-full bg-gray-300 rounded-full h-2.5 my-4">
                  <div
                    className="bg-[#45c517] h-2.5 rounded-full"
                    style={{ width: `${(campaign.collected / campaign.target) * 100}%` }}
                  ></div>
                </div>
                {/* Tombol Donasi */}
                <button className="bg-[#45c517] text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
                  Donasi Sekarang
                </button>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CharityCampaignDetail;
