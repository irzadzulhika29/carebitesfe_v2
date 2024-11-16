import React from 'react';

const CartMealsItem = ({ item, onRemove }) => {
  // Helper function for price formatting
  const formatPrice = (price) => {
    return `Rp${Number(price).toLocaleString('id-ID')}`;
  };

  return (
    <div className="flex items-center justify-between border-b py-4">
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
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700 transition-colors duration-200"
      >
        Hapus
      </button>
    </div>
  );
};

export default CartMealsItem;