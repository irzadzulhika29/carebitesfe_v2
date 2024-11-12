import { Link } from "react-router-dom";

const NavbarLanding = () => {
    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="py-4 px-6 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <h1 className="text-3xl text-[#47cb18] font-bold">
                        Care<span className="text-black">Bites</span>
                    </h1>
                </div>

                {/* Menu Items */}
                <div className="flex space-x-6">
                    <Link to="/">
                        <a href="#" className="text-black font-semibold hover:text-[#45c517]">Home</a>
                    </Link>
                    <a href="#" className="text-gray-600 hover:text-[#45c517]">Course</a>
                    <a href="#" className="text-gray-600 hover:text-[#45c517]">About Us</a>
                    <a href="#" className="text-gray-600 hover:text-[#45c517]">Article</a>
                    <a href="#" className="text-gray-600 hover:text-[#45c517]">Contact</a>
                </div>

                {/* Auth Buttons */}
                <div className="flex space-x-4">
                    <Link to="/login">
                        <button className="px-4 py-2 border border-[#45c517] text-[#45c517] rounded hover:bg-[#45c517] hover:text-white">
                            Log in
                        </button>
                    </Link>
                    <Link to="/regist">
                        <button className="px-4 py-2 bg-[#45c517] text-white rounded hover:bg-[#3ca315]">
                            Register
                        </button>
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default NavbarLanding;
