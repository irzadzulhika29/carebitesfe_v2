import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Navbar from '../../dashboard/Navbar';
import charityData from '../../../assets/lembagasosial/lembagaSosialData.json';
import { useNavigate } from 'react-router-dom';

const formatPrice = (price) => `Rp ${Number(price).toLocaleString('id-ID')}`;

const CharityCampaignDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const campaign = charityData.find((item) => item.id === parseInt(id));

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
            <section className="bg-white shadow-md rounded-xl p-5 mb-5">
              {/* Gambar Kampanye */}
              <img
                src={campaign.campaign_image_url}
                alt="Campaign Image"
                className="w-full h-72 object-cover rounded-md my-5"
              />

              {/* Nama dan Lokasi Yayasan */}
              <div className='my-5 flex gap-3 items-center'>
                <img className='min-w-10 h-10 object-cover rounded-full' src={campaign.image_url} alt="" />
                <div>
                  <p className=" font-semibold">{campaign.name}</p>
                  <p className=" ">{campaign.location}</p>
                </div>
              </div>


              {/* Judul Kampanye */}
              <h1 className="text-2xl font-bold">{campaign.campaign_title}</h1>

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
              
              </div>
            </section>



            <section className='mb-5 bg-white shadow-md rounded-xl p-5'>
              <h1 className='text-xl font-semibold text-[#45c517] border-b-[1px] pb-2 border-[#45c517] '>Informasi Campaign</h1>
              <div className='mt-5'>
                <h1 className='font-semibold'>Deskripsi Campaign</h1>
                <p>{campaign.description}</p>
              </div>

              <div className='mt-5'>
                <h1 className='font-semibold'>Kategori Campaign</h1>
                <p>{campaign.category}</p>
              </div>

              <div className='mt-5'>
                <h1 className='font-semibold'>Target Campaign</h1>
                <p>{formatPrice(campaign.target)}</p>
              </div>

              <div className='mt-5'>
                <h1 className='font-semibold'>Durasi Campaign</h1>
                <p>Mulai: {campaign.start_date}</p>
                <p>Selesai: {campaign.end_date}</p>
              </div>

              <button
                className='bg-[#45c517] text-white w-full p-2 hover:bg-green-600 rounded-full mt-5 transition duration-300'
                onClick={() => navigate(`/charity-transaction/${campaign.id}`)}
              >
                Donasi Sekarang
              </button>

            </section>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CharityCampaignDetail;
