
import Navbar from '../../../components/dashboard/Navbar';
import Sidebar from '../../../components/dashboard/Sidebar';
import { useState } from "react";

const CharityCampaignForm = () => {

    const [images, setImages] = useState(Array(5).fill(null));

    const handleFileChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newImages = [...images];
                newImages[index] = reader.result;
                setImages(newImages);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteImage = (index) => {
        const newImages = [...images];
        newImages[index] = null;
        setImages(newImages);
    };

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <section className="bg-[#f4fef1] w-full pl-60 pt-20">
                <div className="flex-grow">
                    <Navbar />
                    <h1 className="mt-5 text-[#45c517] mx-10 text-2xl font-bold">Charity Campaign</h1>
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
                    <div className="mt-5 p-3 rounded-md bg-white mb-5 shadow-md mx-10 flex min-h-screen flex-col gap-5">
                        <h1 className='text-xl text-[#45c517] font-semibold'>Informasi Campaign</h1>
                        <form className='flex flex-col gap-5' action="">
                            <div className="flex flex-col">
                                <label>Nama Campaign</label>
                                <input
                                    className=" rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                                    type="text"

                                    placeholder="Deskripsi Campaign"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label>Deskripsi Campaign</label>
                                <textarea
                                    placeholder="Konten Artikel"
                                    className="rounded-2xl pl-3 border-2 border-green-300 p-3 mt-2 h-48 overflow-y-auto"
                                ></textarea>
                            </div>

                            <div className="flex flex-col">
                                <label>Kategori Campaign</label>
                                <select className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2">
                                    <option value="" disabled selected>Pilih Kategori Campaign</option>
                                    <option value="opsi1">Opsi 1</option>
                                    <option value="opsi2">Opsi 2</option>
                                    <option value="opsi3">Opsi 3</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label>Target Campaign</label>
                                <input
                                    className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                                    type="text"
                                    placeholder="Masukkan harga produk"
                                />
                            </div>

                            <div className='flex gap-5 justify-between'>
                                <div className="w-1/2 flex-col flex">
                                    <label htmlFor="waktuAwal">Waktu Awal Campaign</label>
                                    <input
                                        type="date"
                                        id="waktuAwal"
                                        className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                                    />
                                </div>

                                <div className="w-1/2 flex-col flex">
                                    <label htmlFor="waktuAkhir">Waktu Akhir Campaign</label>
                                    <input
                                        type="date"
                                        id="waktuAkhir"
                                        className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                                    />
                                </div>


                            </div>
                            <div className="flex flex-col">
                                <label>Foto Campaign</label>
                                <div className="flex gap-4 mt-2">
                                    {images.map((image, index) => (
                                        <div key={index} className="relative w-24 h-24 border rounded-md flex items-center justify-center">
                                            {image ? (
                                                <>
                                                    <img src={image} alt={`Foto ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                                                    <button
                                                        onClick={() => handleDeleteImage(index)}
                                                        className="absolute top-1 right-1 bg-[#45c517] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                                                        type="button"
                                                    >
                                                        ×
                                                    </button>
                                                </>
                                            ) : (
                                                <label className="flex flex-col items-center justify-center cursor-pointer text-gray-500 bg-gray-100 w-full h-full rounded-md">
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) => handleFileChange(e, index)}
                                                        className="hidden"
                                                    />
                                                    <span className="text-xs">Tambah Foto {index + 1}</span>
                                                </label>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button
                                className="py-2 text-white rounded-full w-32 bg-[#47cb18] mt-4 mb-5"
                                type="submit"
                            >
                                Upload
                            </button>
                        </form>
                    </div>

                </div>

            </section >
        </div >
    )
}

export default CharityCampaignForm;
