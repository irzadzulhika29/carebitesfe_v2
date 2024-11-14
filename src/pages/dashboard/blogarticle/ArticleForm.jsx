
import Navbar from '../../../components/dashboard/Navbar';
import Sidebar from '../../../components/dashboard/Sidebar';
import { useState } from "react";

const ArticleForm = () => {
    const [image, setImage] = useState(null); // Hanya satu gambar, jadi gunakan state untuk satu gambar saja

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // Set image ke state
        };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <section className="bg-[#f4fef1] w-full pl-60 pt-20">
                <div className="flex-grow">
                    <Navbar />
                    <h1 className="mt-5 text-[#45c517] mx-10 text-2xl font-bold">Blog & Article</h1>

                    <div className="mt-5 p-3 rounded-md bg-white mb-5 shadow-md mx-10 flex min-h-screen flex-col gap-5">
                        <h1 className='text-xl text-[#45c517] font-semibold'>Form Artikel</h1>
                        <form className='flex flex-col gap-5' action="">

                            <div className="flex flex-col">
                                <label>Thumbnail Artikel</label>
                                <div className="flex gap-4 mt-2">
                                    <div className="w-48 h-48 border-2 border-green-300 overflow-hidden  rounded-xl flex items-center justify-center relative">
                                        {image ? (
                                            <img
                                                src={image}
                                                alt="Foto Artikel"
                                                className="w-full h-full object-cover  rounded-xl"
                                            />
                                        ) : (
                                            <label className="flex flex-col items-center justify-center cursor-pointer text-gray-500 bg-gray-100 w-full h-full rounded-md">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleFileChange}
                                                    className="hidden"
                                                />
                                                <span className="text-xs">Tambah Foto</span>
                                            </label>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label>Judul Artikel</label>
                                <input
                                    className=" rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                                    type="text"

                                    placeholder="Deskripsi Campaign"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label>Konten Artikel</label>
                                <textarea
                                    placeholder="Konten Artikel"
                                    className="rounded-2xl pl-3 border-2 border-green-300 p-3 mt-2 h-48 overflow-y-auto"
                                ></textarea>
                            </div>


                            <div className="flex flex-col">
                                <label>Kategori Artikel</label>
                                <select className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2">
                                    <option value="" disabled selected>Pilih Kategori Artikel</option>
                                    <option value="opsi1">Opsi 1</option>
                                    <option value="opsi2">Opsi 2</option>
                                    <option value="opsi3">Opsi 3</option>
                                </select>
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

export default ArticleForm;
