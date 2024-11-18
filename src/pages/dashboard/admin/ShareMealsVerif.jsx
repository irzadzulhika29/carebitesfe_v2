
import SidebarAdmin from '../../../components/dashboard/admin/SidebarAdmin';
import Navbar from '../../../components/dashboard/Navbar';

const ShareMealsVerif = () => {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar akan selalu fixed di sebelah kiri */}
            <SidebarAdmin />

            <section className="bg-[#f4fef1] w-full pl-60 pt-20"> {/* Tambahkan padding-top agar konten tidak tertutup */}
                <div className="flex-grow">
                    <Navbar />
                    <h1 className="mt-5 mx-10 text-2xl font-bold text-[#45c517]">Verifikasi Share Meals</h1>
                    <section className="min-h-screen mx-10 my-5 rounded-md bg-white shadow-md">
                        {/* Konten tambahan di sini */}
                    </section>
                </div>
            </section>

        </div>
    )
}

export default ShareMealsVerif
