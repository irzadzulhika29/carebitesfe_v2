const CartMealsItem = ({ item, onRemove, onClick }) => {
  const formatPrice = (price) => {
    return `Rp${Number(price).toLocaleString('id-ID')}`;
  };

  return (
    <div 
      onClick={onClick}
      className="flex items-center justify-between bg-white shadow-md p-3 rounded-md hover:shadow-lg transition-all duration-200 cursor-pointer"
    >
      {/* Product Image and Details */}
      <div className="flex items-center gap-4">
        <img
          src={item.image_url}
          alt={item.productName}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h3 className="font-bold">{item.productName}</h3>
          <p className="text-sm text-gray-600">
            {item.quantity} x {formatPrice(item.price)}
          </p>
          <p className="text-sm text-gray-500">
            Total: {formatPrice(item.price * item.quantity)}
          </p>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering parent onClick
          onRemove(item.id);
        }}
        className="text-red-500 hover:text-red-700 transition-colors duration-200"
      >
        Hapus
      </button>
    </div>
  );
};

export default CartMealsItem;