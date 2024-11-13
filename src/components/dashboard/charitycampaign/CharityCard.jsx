import React from 'react';

const CharityCard = () => {
  return (
    <div className="bg-slate-100 w-64 shadow-lg h-64 flex flex-col items-center p-4 rounded-lg">
      <h1 className="text-lg font-semibold text-gray-700 mb-2">Donasi Untuk Amba</h1>
      <p className="text-sm text-gray-600 mb-4 text-center">
        Bantu kami untuk memberikan bantuan yang dibutuhkan oleh Amba. Setiap donasi sangat berarti.
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
        Donasi Sekarang
      </button>
    </div>
  );
};

export default CharityCard;
