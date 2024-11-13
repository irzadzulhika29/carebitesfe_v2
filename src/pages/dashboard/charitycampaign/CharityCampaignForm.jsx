
import Navbar from '../../../components/dashboard/Navbar';
import Sidebar from '../../../components/dashboard/Sidebar';

const CharityCampaignForm = () => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <section className="bg-[#f4fef1] w-full pl-60 pt-20">
                <div className="flex-grow">
                    <Navbar />
                    <h1 className="mt-5 text-[#45c517] mx-10 text-2xl font-bold">Charity Campaign</h1>

                    <div className="mt-5 p-3 rounded-md bg-white shadow-md mx-10 flex min-h-screen flex-col gap-5">
                        <h1 className='text-xl font-semibold'>Informasi Donasi</h1>
                    </div>
                </div>

            </section >
        </div>
    )
}

export default CharityCampaignForm;
