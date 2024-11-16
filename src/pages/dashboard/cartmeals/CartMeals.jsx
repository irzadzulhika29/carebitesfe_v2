import Sidebar from "../../../components/dashboard/Sidebar";
import Navbar from "../../../components/dashboard/Navbar";
import CartMealsItem from "../../../components/dashboard/cartmeals/CartMealsItem";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CartMeals = () => {
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <section className="bg-[#f4fef1] w-full pl-60 pt-20">
        <div className="flex-grow">
          <Navbar />
          <h1 className="mt-5 mx-10 text-2xl font-bold text-[#45c517]">Keranjang Saya</h1>
          
          <section className="min-h-screen mx-10 my-5 rounded-md bg-white shadow-md p-5">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500">Keranjang masih kosong</p>
            ) : (
              <>
                {cartItems.map((item) => (
                  <CartMealsItem
                    key={item.id}
                    item={item}
                    onRemove={removeItem}
                  />
                ))}

                <div className="mt-5 flex justify-between items-center">
                  <h2 className="font-bold">Total:</h2>
                  <p className="text-xl font-bold">
                    {formatPrice(total)}
                  </p>
                </div>

                {/* Add Checkout Button */}
                <div className="mt-5 flex justify-end">
                  <Link 
                    to="/payment/checkout" 
                    state={{ 
                      cartItems,
                      total,
                      quantity: cartItems.reduce((sum, item) => sum + item.quantity, 0)
                    }}
                  >
                    <button className="bg-[#45c517] hover:bg-green-600 text-white px-6 py-2 rounded-full">
                      Checkout
                    </button>
                  </Link>
                </div>
              </>
            )}
          </section>
        </div>
      </section>
    </div>
  );
};

export default CartMeals;