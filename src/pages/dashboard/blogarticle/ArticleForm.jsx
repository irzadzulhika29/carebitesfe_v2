import { useState } from "react";
import Navbar from '../../../components/dashboard/Navbar';
import Sidebar from '../../../components/dashboard/Sidebar';

const ArticleForm = () => {
    // State management
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        category: ''
    });
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // State untuk pesan sukses

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 2000000) { // 2MB limit
                setError('File terlalu besar. Maksimal 2MB');
                setSuccessMessage(''); // Kosongkan pesan sukses jika ada error
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                setError('');
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!image || !formData.title || !formData.content || !formData.category) {
            setError('Semua field harus diisi');
            setSuccessMessage(''); // Kosongkan pesan sukses jika ada error
            return;
        }

        // Process form data
        const articleData = {
            ...formData,
            image: image,
            createdAt: new Date().toISOString()
        };

        // Simulasi pengiriman data ke API
        console.log('Article Data:', articleData);

        // Reset form
        setFormData({
            title: '',
            content: '',
            category: ''
        });
        setImage(null);
        setError('');

        // Set success message
        setSuccessMessage('Artikel berhasil diupload');
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


                        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                            <div className="flex flex-col gap-3">
                                <label>Thumbnail Artikel</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="block w-full text-sm text-gray-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-green-50 file:text-green-700
                                    hover:file:bg-green-100"
                                />

                                {error && <p className="text-red-500 text-sm">{error}</p>}

                                {image && (
                                    <div className="relative w-48 h-48">
                                        <img
                                            src={image}
                                            alt="Preview"
                                            className="w-full h-full object-cover rounded-xl border-2 border-green-300"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setImage(null)}
                                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                        >
                                            ×
                                        </button>
                                    </div>
                                )}
                            </div>


                            <div className="flex flex-col">
                                <label>Judul Artikel</label>
                                <input
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                                    type="text"
                                    placeholder="Masukkan judul artikel"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label>Konten Artikel</label>
                                <textarea
                                    name="content"
                                    value={formData.content}
                                    onChange={handleInputChange}
                                    className="rounded-2xl pl-3 border-2 border-green-300 p-3 mt-2 min-h-[200px] resize-y"
                                    placeholder="Masukkan konten artikel"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label>Kategori Artikel</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                                >
                                    <option value="">Pilih Kategori Artikel</option>
                                    <option value="1">Tips & Trick</option>
                                    <option value="2">Gaya Hidup</option>
                                    <option value="3">Teknologi</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="py-2 text-white rounded-full w-32 bg-[#47cb18] mt-4 hover:bg-green-600"
                            >
                                Upload
                            </button>


                            {error && (
                                <p className="text-red-500 text-sm">{error}</p>
                            )}

                            {successMessage && (
                                <div className="text-green-500 text-sm mt-2">
                                    {successMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArticleForm;
