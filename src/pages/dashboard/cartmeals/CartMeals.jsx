import Sidebar from "../../../components/dashboard/Sidebar";
import Navbar from "../../../components/dashboard/Navbar";
import CartMealsItem from "../../../components/dashboard/cartmeals/CartMealsItem";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CartMeals = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Existing functions
  function getCartFromStorage() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  function saveCartToStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function calculateTotal(items) {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  function removeItem(productId) {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    saveCartToStorage(updatedCart);
  }

  function formatPrice(price) {
    return `Rp${Number(price).toLocaleString('id-ID')}`;
  }

  useEffect(() => {
    const items = getCartFromStorage();
    setCartItems(items);
  }, []);

  const total = calculateTotal(cartItems);
  const handleItemClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <section className="bg-[#f4fef1] w-full pl-60 pt-20">
        <div className="flex-grow">
          <Navbar />
          <h1 className="mt-5 mx-10 text-2xl font-bold text-[#45c517]">Keranjang Saya</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="text-green-500 hover:cursor-pointer mx-10 bi bi-arrow-left-short"
            viewBox="0 0 16 16"
            onClick={() => window.history.back()}
          >
            <path
              fillRule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
            />
          </svg>

          <section className="min-h-screen mx-5 rounded-md p-5">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500">Keranjang masih kosong</p>
            ) : (
              <div className="flex w-full gap-8">
                {/* Left side - Cart Items */}
                <div className="flex-1 flex flex-col gap-4">
                  {cartItems.map((item) => (
                    <CartMealsItem
                      key={item.id}
                      item={item}
                      onRemove={removeItem}
                      onClick={() => handleItemClick(item.id)}
                    />
                  ))}
                </div>

                {/* Right side - Checkout Summary */}
                <div className="shadow-md w-1/3 h-fit bg-white rounded-lg p-4">
                  <h2 className="text-md text-[#45c517] font-semibold mb-4">Ringkasan Pesanan</h2>

                  <div className="flex justify-between items-center border-t pt-4">
                    <h2 className="font-bold">Total:</h2>
                    <p className="text-md font-bold">
                      {formatPrice(total)}
                    </p>
                  </div>

                  <div className="mt-5">
                    <Link
                      to="/payment/checkout"
                      state={{
                        cartItems,
                        total,
                        quantity: cartItems.reduce((sum, item) => sum + item.quantity, 0)
                      }}
                      className="block"
                    >
                      <button className="w-full bg-[#45c517] hover:bg-green-600 text-white px-6 py-2 rounded-full">
                        Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </section>

        </div>
      </section>
    </div>
  );
};

export default CartMeals;