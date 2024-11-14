// HomeDashboard.jsx
import Sidebar from "../../components/dashboard/Sidebar";
import Navbar from "../../components/dashboard/Navbar";

const Profile = () => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <section className="bg-[#f4fef1] w-full pl-60 pt-20"> {/* Tambahkan padding-top agar konten tidak tertutup */}
                <div className="flex-grow">
                    <Navbar  showSearchBar={true} />
                    <h1 className="mt-5 mx-10 text-2xl font-bold">Homepage</h1>
                    <h1 className="mx-10 my-2">Hello, Welcomeback!</h1>

                    {/* content */}
                    <section className="min-h-screen mx-10 my-5 ">
                      
                    </section>
                </div>
            </section>

        </div>
    );
};

export default Profile;
