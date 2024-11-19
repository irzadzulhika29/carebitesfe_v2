
import Navbar from '../../../components/dashboard/Navbar';
import Sidebar from '../../../components/dashboard/Sidebar';
import { useState } from "react";

const CharityCampaignForm = () => {
    // Add at the top with other state
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        target: '',
        startDate: '',
        endDate: ''
    });

    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // const handleFileChange = (e, index) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             const newImages = [...images];
    //             newImages[index] = reader.result;
    //             setImages(newImages);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };

    // Add handleInputChange function
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Add handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        // Validation
        if (!image || !formData.name || !formData.description ||
            !formData.category || !formData.target ||
            !formData.startDate || !formData.endDate) {
            setError('Semua field harus diisi');
            setSuccessMessage('');
            console.log('Missing fields:', {
                image: !image,
                name: !formData.name,
                description: !formData.description,
                category: !formData.category,
                target: !formData.target,
                startDate: !formData.startDate,
                endDate: !formData.endDate
            });
            return;
        }

        // Create campaign data object
        const campaignData = {
            ...formData,
            image: image,
            createdAt: new Date().toISOString()
        };

        // Simulate API call
        console.log('Campaign Data:', campaignData);

        // Reset form
        setFormData({
            name: '',
            description: '',
            category: '',
            target: '',
            startDate: '',
            endDate: ''
        });
        setImage(null);
        setError('');
        setSuccessMessage('Campaign berhasil dibuat');
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

    // const handleDeleteImage = (index) => {
    //     const newImages = [...images];
    //     newImages[index] = null;
    //     setImages(newImages);
    // };

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

                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}

                        {successMessage && (
                            <div className="text-green-500 text-sm mt-2">
                                {successMessage}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className='flex flex-col gap-5' action="">
                            <div className="flex flex-col">
                                <label>Nama Campaign</label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                                    type="text"
                                    placeholder="Nama Campaign"
                                />

                            </div>

                            <div className="flex flex-col">
                                <label>Deskripsi Campaign</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Konten Artikel"
                                    className="rounded-2xl pl-3 border-2 border-green-300 p-3 mt-2 h-48 overflow-y-auto"
                                ></textarea>
                            </div>

                            <div className="flex flex-col">
                                <label>Kategori Campaign</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                                >
                                    <option value="">Pilih Kategori Campaign</option>
                                    <option value="opsi1">Opsi 1</option>
                                    <option value="opsi2">Opsi 2</option>
                                    <option value="opsi3">Opsi 3</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label>Target Campaign</label>
                                <input
                                    name="target"
                                    value={formData.target}
                                    onChange={handleInputChange}
                                    className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                                    type="text"
                                    placeholder="Masukkan harga produk"
                                />
                            </div>

                            <div className='flex gap-5 justify-between'>
                                <div className="w-1/2 flex-col flex">
                                    <label htmlFor="waktuAwal">Waktu Awal Campaign</label>
                                    <input
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleInputChange}
                                        type="date"
                                        id="waktuAwal"
                                        className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                                    />
                                </div>

                                <div className="w-1/2 flex-col flex">
                                    <label htmlFor="waktuAkhir">Waktu Akhir Campaign</label>
                                    <input
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleInputChange}
                                        type="date"
                                        id="waktuAkhir"
                                        className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                                    />
                                </div>


                            </div>
                            {/* <div className="flex flex-col">
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
                            </div> */}

                            <div className="flex flex-col gap-3">
                                <label>Thumbnail Artikel</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    // Remove this line:
                                    // value={formData.image}
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
