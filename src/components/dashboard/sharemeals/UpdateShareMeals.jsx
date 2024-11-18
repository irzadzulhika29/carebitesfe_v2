
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from "../../../components/dashboard/Sidebar";
import Navbar from "../../../components/dashboard/Navbar";
import kotaData from "../../../assets/sharemeals/kotaData.json";
import productData from "../../../../public/productData.json";
import categoryList from '../../../../public/categoryList.json';  // Adjust path as needed


const UpdateShareMeals = () => {
    // 1. State Declarations
    const [formData, setFormData] = useState({
        productName: "",
        description: "",
        stock: 0,
        price: "",
        images: Array(5).fill(null),
        category: "",
        kota: "",
        kecamatan: "",
        kelurahan: "",
        detail: "",
        date: "",
        time: ""
    });
    const [categoriesData, setCategoriesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState(null);

    // 2. Hooks
    const navigate = useNavigate();
    const { id } = useParams();

    // 3. Derived State
    const kecamatanData = kotaData[formData.kota] ?? {};
    const kelurahanData = kecamatanData[formData.kecamatan] ?? [];

    // 4. Utility Functions
    const formatTimeForInput = (timeString) => {
        if (!timeString) return '';
        return timeString.replace('.', ':');
    };

    const formatTimeForDisplay = (timeString) => {
        if (!timeString) return '';
        return timeString.replace(':', '.');
    };

    const formatDateForInput = (dateString) => {
        if (!dateString) return '';
        const [day, month, year] = dateString.split('-');
        return `${year}-${month}-${day}`;
    };

    const formatDateForDisplay = (dateString) => {
        if (!dateString) return '';
        const [year, month, day] = dateString.split('-');
        return `${day}-${month}-${year}`;
    };

    // 5. Effects
    useEffect(() => {
        try {
            setIsLoading(true);
            setCategoriesData(categoryList);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const product = productData.find(item => item.id === +id);
                if (!product) throw new Error("Produk tidak ditemukan");

                const [kelurahan = "", kecamatan = "", kota = "", detail = ""] =
                    product.address?.split(", ") ?? [];

                setFormData({
                    ...formData,
                    productName: product.productName ?? "",
                    description: product.description ?? "",
                    stock: product.stok ?? 0,
                    price: product.price?.toString() ?? "",
                    images: [product.image_url, ...Array(4).fill(null)],
                    category: product.category ?? "",
                    kota,
                    kecamatan,
                    kelurahan,
                    detail,
                    date: product.date ?? "",
                    time: formatTimeForDisplay(product.timeOver) ?? "",
                });
            } catch (err) {
                setErrorMessage(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        loadProduct();
    }, [id]);

    // 6. Event Handlers
    const updateField = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleFileChange = (index, file) => {
        if (!file || file.size > 5_000_000) {
            alert("Ukuran file terlalu besar. Maksimal 5MB");
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const newImages = [...formData.images];
            newImages[index] = reader.result;
            updateField('images', newImages);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requiredFields = ['productName', 'description', 'price', 'category'];
        const missingFields = requiredFields.some(field => !formData[field]);

        if (missingFields || !formData.detail || !formData.date || !formData.time) {
            alert("Mohon lengkapi semua data yang diperlukan.");
            return;
        }

        try {
            const fullAddress = [formData.kelurahan, formData.kecamatan, formData.kota, formData.detail]
                .filter(Boolean)
                .join(", ");
            const updatedProduct = {
                id: +id,
                ...formData,
                stok: +formData.stock,
                price: +formData.price,
                image_url: formData.images[0],
                address: fullAddress,
                date: formData.date,
                timeOver: formData.time,
                updated_at: new Date().toISOString()
            };

            console.log('Updating product:', updatedProduct);
            alert("Produk berhasil diperbarui!");
            navigate("/share-meals");
        } catch (err) {
            console.error('Error updating product:', err);
            alert("Gagal memperbarui produk. Silakan coba lagi.");
        }
    };

    // 7. Render Conditions
    if (isLoading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    if (errorMessage) return <div className="flex justify-center items-center min-h-screen text-red-500">{errorMessage}</div>;
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <section className="bg-[#f4fef1] w-full pl-60 pt-20">
                <div className="flex-grow">
                    <Navbar />
                    <div className="mt-5 mx-10">
                        <h1 className="text-[#45c517] text-2xl font-bold">Bagikan Produk</h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            fill="currentColor"
                            className="text-green-500 hover:cursor-pointer"
                            viewBox="0 0 16 16"
                            onClick={() => navigate(-1)}
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                            />
                        </svg>

                        <section className="p-3 rounded-md bg-white shadow-md mt-5">
                            <h1 className="mb-5 text-xl font-semibold text-[#45c517]">Informasi Produk dan Pengambilan</h1>
                            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                                {/* Nama Produk */}
                                <div className="flex flex-col">
                                    <label>Nama Produk</label>
                                    <div className="relative">
                                        <input
                                            className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2 w-full"
                                            type="text"
                                            value={formData.productName}
                                            onChange={(e) => {
                                                if (e.target.value.length <= 23) {
                                                    updateField('productName', e.target.value);
                                                }
                                            }}
                                            maxLength={23}
                                            placeholder="Nama Produk"
                                            required
                                        />
                                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                                            {formData.productName.length}/23
                                        </span>
                                    </div>
                                </div>

                                {/* Deskripsi Produk */}
                                <div className="flex flex-col">
                                    <label>Deskripsi Produk</label>
                                    <textarea
                                        placeholder="Deskripsi produk"
                                        className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                                        rows="5"
                                        value={formData.description}
                                        onChange={(e) => updateField('description', e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Harga Produk */}
                                <div className="flex flex-col">
                                    <label>Harga Produk</label>
                                    <input
                                        className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                                        type="number"
                                        value={formData.price}
                                        onChange={(e) => updateField('price', e.target.value)}
                                        placeholder="Masukkan harga produk"
                                        required
                                    />
                                </div>

                                {/* Foto Produk */}
                                <div className="flex flex-col mt-4">
                                    <label>Foto Produk</label>
                                    <div className="flex gap-4 mt-2">
                                        {formData.images.map((image, index) => (
                                            <div key={index} className="relative w-24 h-24 border rounded-md flex items-center justify-center">
                                                {image ? (
                                                    <>
                                                        <img src={image} alt={`Foto ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                                                        <button
                                                            className="absolute top-1 right-1 bg-[#45c517] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                                                            onClick={() => handleFileChange(index, null)}
                                                            type="button"
                                                        >×</button>
                                                    </>
                                                ) : (
                                                    <label className="flex flex-col items-center justify-center cursor-pointer text-gray-500 bg-gray-100 w-full h-full rounded-md">
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={(e) => handleFileChange(index, e.target.files[0])}
                                                            className="hidden"
                                                        />
                                                        <span className="text-xs">Tambah Foto {index + 1}</span>
                                                    </label>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Kategori Produk */}
                                <div className="flex flex-col">
                                    <label htmlFor="category">Kategori Produk</label>
                                    <select
                                        id="category"
                                        className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                                        value={formData.category || ''}
                                        onChange={(e) => updateField('category', e.target.value)}
                                        required
                                    >
                                        <option value="">Pilih Kategori</option>
                                        {isLoading ? (
                                            <option>Loading...</option>
                                        ) : error ? (
                                            <option>Error: {error}</option>
                                        ) : (
                                            categoriesData.map((categoryItem) => (
                                                <option
                                                    key={categoryItem?.id}
                                                    value={categoryItem?.name}
                                                >
                                                    {categoryItem?.name}
                                                </option>
                                            ))
                                        )}
                                    </select>
                                </div>

                                {/* Location Fields */}
                                <div className="flex flex-col">
                                    <label>Pilih Kota</label>
                                    <select
                                        className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                                        value={formData.kota}
                                        onChange={(e) => {
                                            updateField('kota', e.target.value);
                                            updateField('kecamatan', '');
                                            updateField('kelurahan', '');
                                        }}
                                        required
                                    >
                                        <option value="">Pilih Kota</option>
                                        {Object.keys(kotaData).map(kotaOption => (
                                            <option key={kotaOption} value={kotaOption}>{kotaOption}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex flex-col">
                                    <label>Pilih Kecamatan</label>
                                    <select
                                        className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                                        value={formData.kecamatan}
                                        onChange={(e) => {
                                            updateField('kecamatan', e.target.value);
                                            updateField('kelurahan', '');
                                        }}
                                        disabled={!formData.kota}
                                        required
                                    >
                                        <option value="">Pilih Kecamatan</option>
                                        {Object.keys(kecamatanData).map(kecamatanOption => (
                                            <option key={kecamatanOption} value={kecamatanOption}>{kecamatanOption}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex flex-col">
                                    <label>Pilih Kelurahan</label>
                                    <select
                                        className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                                        value={formData.kelurahan}
                                        onChange={(e) => updateField('kelurahan', e.target.value)}
                                        disabled={!formData.kecamatan}
                                        required
                                    >
                                        <option value="">Pilih Kelurahan</option>
                                        {kelurahanData.map((kelurahanOption, index) => (
                                            <option key={index} value={kelurahanOption}>{kelurahanOption}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex flex-col">
                                    <label>Alamat Lengkap</label>
                                    <input
                                        className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                                        type="text"
                                        value={formData.detail}
                                        onChange={(e) => updateField('detail', e.target.value)}
                                        placeholder="Alamat Lengkap"
                                        required
                                    />
                                </div>

                                {/* Pickup Fields */}
                                <div className="flex flex-col">
                                    <label>Tanggal Pengambilan</label>
                                    <input
                                        className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                                        type="date"
                                        value={formatDateForInput(formData.date)}
                                        onChange={(e) => updateField('date', formatDateForDisplay(e.target.value))}
                                        required
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label>Jam Pengambilan</label>
                                    <input
                                        className="rounded-2xl pl-3 border-2 border-green-300 p-1 mt-2"
                                        type="time"
                                        value={formatTimeForInput(formData.time)}
                                        onChange={(e) => updateField('time', formatTimeForDisplay(e.target.value))}
                                        required
                                    />
                                </div>

                                <button className="py-2 text-white rounded-full w-32 bg-[#47cb18] mt-4 mb-5" type="submit">
                                    Update
                                </button>
                            </form>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default UpdateShareMeals
