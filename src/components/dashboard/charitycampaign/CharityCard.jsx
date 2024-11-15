import { Link } from 'react-router-dom';

const CharityCard = ({ id, name, location, image_url, campaign }) => {
  const { title, collected, target, campaign_image_url } = campaign;
  const progress = (collected / target) * 100;

  return (
    <div className="bg-white w-64 shadow-lg pb-10 flex flex-col p-4 rounded-lg cursor-pointer">
      <img
        src={campaign_image_url}
        alt="Campaign Image"
        className="w-full h-32 object-cover rounded-md"
      />

      <div className="flex items-center gap-3 mt-3">
        <img
          src={image_url}
          alt="Profile"
          className="w-8 h-8 object-cover rounded-full"
        />
        <div>
          <h1 className="font-bold">{name}</h1>
          <p className="text-xs text-[#45c517]">{location}</p>
        </div>
      </div>

      <h2 className="text-lg font-bold mt-4 mb-2">{title}</h2>
      <h3 className="text-xs text-[#45c517] mb-2">Terkumpul</h3>

      <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
        <div
          className="bg-[#45c517] h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-sm font-semibold text-gray-600 mb-4 text-center">
        Rp{collected.toLocaleString('id-ID')}/Rp{target.toLocaleString('id-ID')}
      </p>

      {/* Gunakan Link untuk navigasi */}
      <Link
        to={`/charity-transaction/${id}`}
        className="bg-[#45c517] text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 text-center"
      >
        Donasi Sekarang
      </Link>
    </div>
  );
};

export default CharityCard;
