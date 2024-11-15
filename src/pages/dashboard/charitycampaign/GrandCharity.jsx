import { useParams } from 'react-router-dom';
import charityData from '../../../assets/lembagasosial/lembagaSosialData.json';
import Sidebar from '../../../components/dashboard/Sidebar';
import Navbar from '../../../components/dashboard/Navbar';

const GrandCharity = () => {
    const { id } = useParams();
    const campaign = charityData.find((item) => item.id === parseInt(id));
    if (!campaign) {
        return <p>Data tidak ditemukan</p>;
    }

    return (
        <div className="flex min-h-screen">
            {/* Sidebar akan selalu fixed di sebelah kiri */}
            <Sidebar />

            <section className="bg-[#f4fef1] w-full pl-60 pt-20"> {/* Tambahkan padding-top agar konten tidak tertutup */}
                <div className="flex-grow">
                    <Navbar />
                    <section className="min-h-screen mx-10 my-5 rounded-md bg-white shadow-md">
                        {/* Konten tambahan di sini */}
                    </section>
                </div>
            </section>

        </div>
    );
};

export default GrandCharity;
