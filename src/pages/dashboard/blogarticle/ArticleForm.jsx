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

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle image upload
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 2000000) { // 2MB limit
                setError('File terlalu besar. Maksimal 2MB');
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

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validation
        if (!image || !formData.title || !formData.content || !formData.category) {
            setError('Semua field harus diisi');
            return;
        }

        // Process form data
        const articleData = {
            ...formData,
            image: image,
            createdAt: new Date().toISOString()
        };

        // TODO: Send to API
        console.log('Article Data:', articleData);

        // Reset form
        setFormData({
            title: '',
            content: '',
            category: ''
        });
        setImage(null);
        setError('');
    };

    // Return JSX with updated form
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <section className="bg-[#f4fef1] w-full pl-60 pt-20">
                <div className="flex-grow">
                    <Navbar />
                    <h1 className="mt-5 text-[#45c517] mx-10 text-2xl font-bold">Blog & Article</h1>

                    <div className="mt-5 p-3 rounded-md bg-white mb-5 shadow-md mx-10 flex min-h-screen flex-col gap-5">
                        <h1 className='text-xl text-[#45c517] font-semibold'>Form Artikel</h1>
                        
                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}

                        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                            <div className="flex flex-col">
                                <label>Thumbnail Artikel</label>
                                <div className="flex gap-4 mt-2">
                                    <div className="w-48 h-48 border-2 border-green-300 overflow-hidden rounded-xl flex items-center justify-center relative">
                                        {image ? (
                                            <div className="relative w-full h-full">
                                                <img
                                                    src={image}
                                                    alt="Foto Artikel"
                                                    className="w-full h-full object-cover rounded-xl"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setImage(null)}
                                                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                                >
                                                    ×
                                                </button>
                                            </div>
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
                                    placeholder="Tulis konten artikel"
                                    className="rounded-2xl pl-3 border-2 border-green-300 p-3 mt-2 h-48 overflow-y-auto"
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
                                    <option value="opsi1">Opsi 1</option>
                                    <option value="opsi2">Opsi 2</option>
                                    <option value="opsi3">Opsi 3</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="py-2 text-white rounded-full w-32 bg-[#47cb18] mt-4 mb-5 hover:bg-green-600"
                            >
                                Upload
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArticleForm;