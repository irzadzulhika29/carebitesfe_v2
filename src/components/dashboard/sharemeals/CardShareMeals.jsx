// CardShareMeals.jsx
import { Link } from "react-router-dom";

const CardShareMeals = ({ product }) => {
  return (
    <div className='hover:cursor-pointer w-52 pb-3 bg-white shadow-md rounded-xl p-4'>
      <p className="font-semibold mb-2">{product.productName}</p>
      <img className="object-cover w-full h-32 rounded-md" src={product.image_url} alt={product.productName} />
      <div className="my-2">
        <p className="text-sm ">Sisa Stok: <span className="text-[#45c517]">{product.stok}</span></p>
        <div className="duration-300 transition w-full flex gap-3 my-2">
          <Link to={`/share-meals/update/${product.id}`}>
            <button className="duration-300 transition hover:bg-green-600 bg-[#45c517] text-white px-3 rounded-xl">Edit</button>
          </Link>
          <button className="duration-300 transition hover:bg-[#45c517] hover:text-white bg-white border border-[#45c517] text-[#45c517] px-3 rounded-xl">Hapus</button>
        </div>
      </div>
    </div>
  );
};

export default CardShareMeals;