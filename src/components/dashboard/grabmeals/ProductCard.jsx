import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`}>
            <div className="hover:scale-110 transition duration-300 hover:cursor-pointer w-52 bg-white rounded-md shadow-md">
                <div className="flex items-start">
                    <div className="p-2 w-full">
                        <div className='flex gap-3 mb-3 items-center'>
                            <img src={product.photoProfile} alt={product.photoProfile} className="w-6 h-6 object-cover block rounded-full" />
                            <h1 className="text-xs font-semibold">{product.owner}</h1>
                        </div>

                        <img
                            className="rounded w-full h-28 mb-3 object-cover"
                            src={product.image_url}
                            alt={product.name}
                        />
                        <h1 className="font-bold">{product.productName}</h1>
                        <h1 className="mb-2 text-xs">{product.location}</h1>
                        <h1 className="text-md font-bold">Rp{Number(product.price).toLocaleString('id-ID')}</h1>

                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;
