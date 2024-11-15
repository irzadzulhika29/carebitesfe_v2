import Sidebar from "../../components/dashboard/Sidebar";
import Navbar from "../../components/dashboard/Navbar";
import userData from "../../assets/user/userData.json";

const Profile = () => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <section className="bg-[#f4fef1] w-full pl-60 pt-20">
                <div className="flex-grow">
                    <Navbar showSearchBar={true} />
                    <h1 className="mt-5 mx-10 text-2xl font-bold text-[#45c517]">Profile</h1>

                    {/* content */}
                    <section className="mx-10 my-5">
                        <div className="p-5 min-h-screen w-full bg-white shadow-md rounded-xl ">
                            <div className="flex flex-col items-center text-center flex justify-center">
                                <img className="w-36 h-36 object-cover rounded-full" src={userData.user.image_url} alt="" />
                                <h1 className="mt-3 text-2xl font-semibold">{userData.user.name}</h1>
                                <p className="text-[#45c517]">{userData.user.location}</p>
                                <button className="bg-[#45c517] font-semibold mt-5 py-2 px-3 rounded-full text-white">Edit Profile</button>
                            </div>

                            <div className="mt-5 flex justify-between">
                                <p className="hover:cursor-pointer border-b-2 border-[#45c517] pb-2 text-md font-semibold text-[#45c517]">Riwayat Grab Meals</p>
                                <p className="hover:cursor-pointer text-md font-semibold text-[#45c517]">Riwayat Sharing Meals</p>
                                <p className="hover:cursor-pointer text-md font-semibold text-[#45c517]">Riwayat Activity</p>
                                <p className="hover:cursor-pointer text-md font-semibold text-[#45c517]">Riwayat Charity</p>
                                <p className="hover:cursor-pointer text-md font-semibold text-[#45c517]">Riwayat Article</p>
                            </div>

                            <div className="mt-5 p-4 w-full pb-5 bg-white shadow-md rounded-xl">
                                <p className="font-semibold">01 Oktober 2024</p>
                                <div>
                                    <img className="w-32 h-20 object-cover rounded-md" src="https://thefamilydinnerproject.org/wp-content/uploads/2014/07/Sunday-roast-chicken2.jpg" alt="" />
                                </div>
                            </div>



                        </div>

                    </section>
                </div>
            </section>
        </div>
    );
};

export default Profile;
