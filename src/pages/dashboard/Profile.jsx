import Sidebar from "../../components/dashboard/Sidebar";
import Navbar from "../../components/dashboard/Navbar";
import userData from "../../assets/user/userData.json";
import { useState } from 'react';
import HistoryCard from "../../components/dashboard/profile/HistoryCard";
import NoData from "../../components/dashboard/profile/NoData";

const Profile = () => {
    const [selectedNav, setSelectedNav] = useState('Riwayat Grab Meals');

    const handleNavClick = (nav) => {
        setSelectedNav(nav);
    };

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
                            <div className="flex flex-col items-center text-center justify-center">
                                <img className="w-36 h-36 object-cover rounded-full" src={userData.user.image_url} alt="" />
                                <h1 className="mt-3 text-2xl font-semibold">{userData.user.name}</h1>
                                <p className="text-[#45c517]">{userData.user.location}</p>
                                <button className="bg-[#45c517] font-semibold mt-5 py-2 px-3 rounded-full text-white">Edit Profile</button>
                            </div>

                            {/* navigate */}
                            <div className="mt-5 flex justify-between">
                                <p
                                    onClick={() => handleNavClick('Riwayat Grab Meals')}
                                    className={`hover:cursor-pointer pb-2 text-md font-semibold ${selectedNav === 'Riwayat Grab Meals' ? 'border-b-2 border-[#45c517] text-[#45c517]' : ''
                                        }`}
                                >
                                    Riwayat Grab Meals
                                </p>
                                <p
                                    onClick={() => handleNavClick('Riwayat Sharing Meals')}
                                    className={`hover:cursor-pointer pb-2 text-md font-semibold ${selectedNav === 'Riwayat Sharing Meals' ? 'border-b-2 border-[#45c517] text-[#45c517]' : ''
                                        }`}
                                >
                                    Riwayat Sharing Meals
                                </p>
                                <p
                                    onClick={() => handleNavClick('Riwayat Activity')}
                                    className={`hover:cursor-pointer pb-2 text-md font-semibold ${selectedNav === 'Riwayat Activity' ? 'border-b-2 border-[#45c517] text-[#45c517]' : ''
                                        }`}
                                >
                                    Riwayat Activity
                                </p>
                                <p
                                    onClick={() => handleNavClick('Riwayat Charity')}
                                    className={`hover:cursor-pointer pb-2 text-md font-semibold ${selectedNav === 'Riwayat Charity' ? 'border-b-2 border-[#45c517] text-[#45c517]' : ''
                                        }`}
                                >
                                    Riwayat Charity
                                </p>
                                <p
                                    onClick={() => handleNavClick('Riwayat Article')}
                                    className={`hover:cursor-pointer pb-2 text-md font-semibold ${selectedNav === 'Riwayat Article' ? 'border-b-2 border-[#45c517] text-[#45c517]' : ''
                                        }`}
                                >
                                    Riwayat Article
                                </p>
                            </div>

                            {/* history card */}
                            <div className="mt-5">
                                {selectedNav === 'Riwayat Grab Meals' && (
                                    <div className="p-4 w-full pb-5 bg-white shadow-md rounded-xl transform transition-transform duration-300 hover:-translate-y-2">  
                                            <HistoryCard />
                                    </div>
                                )}
                                {selectedNav === 'Riwayat Sharing Meals' && (
                                    <NoData />
                                )}
                                {selectedNav === 'Riwayat Activity' && (
                                    <NoData />
                                )}
                                {selectedNav === 'Riwayat Charity' && (
                                    <NoData />
                                )}
                                {selectedNav === 'Riwayat Article' && (
                                    <NoData />
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default Profile;
