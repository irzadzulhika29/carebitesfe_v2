
import Sidebar from "../../../components/dashboard/Sidebar";
import Navbar from "../../../components/dashboard/Navbar";
import { useState, useEffect } from 'react';



const CartMeals = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(items);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce((sum, item) =>
    sum + (item.price * item.quantity), 0
  );

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
                  <div key={item.id} className="flex items-center justify-between border-b py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image_url}
                        alt={item.productName}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-bold">{item.productName}</h3>
                        <p className="text-sm text-gray-600">
                          {item.quantity} x Rp{Number(item.price).toLocaleString('id-ID')}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Hapus
                    </button>
                  </div>
                ))}

                <div className="mt-5 flex justify-between items-center">
                  <h2 className="font-bold">Total:</h2>
                  <p className="text-xl font-bold">
                    Rp{total.toLocaleString('id-ID')}
                  </p>
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