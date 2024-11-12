import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <section className="shadow-lg fixed h-screen bg-white">
            <nav className="w-60 flex flex-col my-3 p-5 min-h-screen">
                <Link  className='hover:scale-110 duration-300' to="/">
                    <h1 className="text-3xl text-[#47cb18] font-bold mb-5">
                        Care<span className="text-black">Bites</span>
                    </h1>
                </Link>


                <ul className="text-md flex flex-col gap-3">
                    {/* Home Link */}
                    <Link to="/" className={`flex items-center  gap-2 px-2 py-3 hover:bg-[#47cb18] hover:text-white : 'text-gray rounded-md ${isActive('/') ? 'bg-[#47cb18] text-white' : 'text-gray'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                        </svg>
                        <h1>Home</h1>
                    </Link>

                    {/* Grab Meals Link */}
                    <Link to="/grab-meals" className={`flex items-center gap-2 px-2 py-3 hover:bg-[#47cb18] hover:text-white rounded-md ${isActive('/grab-meals') ? 'bg-[#47cb18] text-white' : 'text-gray'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M21 2V22H19V15H15V8C15 4.68629 17.6863 2 21 2ZM19 4.53C18.17 5 17 6.17 17 8V13H19V4.53ZM9 13.9V22H7V13.9C4.71776 13.4367 3 11.419 3 9V3H5V10H7V3H9V10H11V3H13V9C13 11.419 11.2822 13.4367 9 13.9Z"></path>
                        </svg>
                        <h1>Grab Meals</h1>
                    </Link>

                    {/* Share Meals Link */}
                    <Link to="/share-meals" className={`flex items-center gap-2 px-2 py-3 hover:bg-[#47cb18] hover:text-white rounded-md ${isActive('/share-meals') ? 'bg-[#47cb18] text-white' : 'text-gray'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                            <path d="M5.00488 9.00268C5.55717 9.00268 6.00488 9.45039 6.00488 10.0027C7.63965 10.0027 9.14352 10.5631 10.3349 11.5022L12.5049 11.5027C13.837 11.5027 15.0339 12.0815 15.8579 13.0014L19.0049 13.0027C20.9972 13.0027 22.7173 14.1679 23.521 15.8541C21.1562 18.9747 17.3268 21.0027 13.0049 21.0027C10.2142 21.0027 7.85466 20.3994 5.944 19.3447C5.80557 19.7283 5.43727 20.0027 5.00488 20.0027H2.00488C1.4526 20.0027 1.00488 19.555 1.00488 19.0027V10.0027C1.00488 9.45039 1.4526 9.00268 2.00488 9.00268H5.00488ZM6.00589 12.0027L6.00488 17.0238L6.05024 17.0572C7.84406 18.3176 10.183 19.0027 13.0049 19.0027C16.0089 19.0027 18.8035 17.847 20.84 15.8732L20.9729 15.7397L20.8537 15.6393C20.3897 15.2763 19.8205 15.051 19.2099 15.0096L19.0049 15.0027L16.8932 15.0017C16.9663 15.3236 17.0049 15.6586 17.0049 16.0027V17.0027H8.00488V15.0027L14.7949 15.0017L14.7605 14.9232C14.38 14.1296 13.593 13.568 12.6693 13.508L12.5049 13.5027L9.57547 13.5025C8.66823 12.5772 7.40412 12.003 6.00589 12.0027Z"></path>
                        </svg>
                        <h1>Share Meals</h1>
                    </Link>

                    {/* Share Your Acticty Link */}
                    <Link to="/share-activity" className={`flex items-center gap-2 px-2 py-3 hover:bg-[#47cb18] hover:text-white rounded-md ${isActive('/share-activity') ? 'bg-[#47cb18] text-white' : 'text-gray'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-postcard-heart" viewBox="0 0 16 16">
                            <path d="M8 4.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm3.5.878c1.482-1.42 4.795 1.392 0 4.622-4.795-3.23-1.482-6.043 0-4.622M2.5 5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
                            <path fillRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
                        </svg>
                        <h1>Share Your Activity</h1>
                    </Link>

                    {/* Charity Campaign Link */}
                    <Link to="/charity-campaign" className={`flex items-center gap-2 px-2 py-3 hover:bg-[#47cb18] hover:text-white rounded-md ${isActive('/charity-campaign') ? 'bg-[#47cb18] text-white' : 'text-gray'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M5.00488 9.00281C5.55717 9.00281 6.00488 9.45052 6.00488 10.0028C7.63965 10.0028 9.14352 10.5632 10.3349 11.5023L12.5049 11.5028C13.8375 11.5028 15.0348 12.0821 15.8588 13.0025L19.0049 13.0028C20.9972 13.0028 22.7173 14.1681 23.521 15.8542C21.1562 18.9748 17.3268 21.0028 13.0049 21.0028C10.2142 21.0028 7.85466 20.3996 5.944 19.3449C5.80557 19.7284 5.43727 20.0028 5.00488 20.0028H2.00488C1.4526 20.0028 1.00488 19.5551 1.00488 19.0028V10.0028C1.00488 9.45052 1.4526 9.00281 2.00488 9.00281H5.00488ZM6.00589 12.0028L6.00488 17.0248L6.05024 17.0573C7.84406 18.3177 10.183 19.0028 13.0049 19.0028C16.0089 19.0028 18.8035 17.8472 20.84 15.8734L20.9729 15.7398L20.8537 15.6394C20.3897 15.2764 19.8205 15.0512 19.2099 15.0097L19.0049 15.0028L16.8934 15.0028C16.9664 15.3244 17.0049 15.6591 17.0049 16.0028V17.0028H8.00488V15.0028L14.7949 15.0018L14.7605 14.9233C14.38 14.1297 13.593 13.5681 12.6693 13.5081L12.5049 13.5028L9.57547 13.5027C8.66823 12.5773 7.40412 12.0031 6.00589 12.0028Z"></path>
                        </svg>
                        <h1>Charity Campaign</h1>
                    </Link>

                    {/* Blog & Artikel Link */}
                    <Link to="/blog" className={`flex items-center gap-2 px-2 py-3 hover:bg-[#47cb18] hover:text-white rounded-md ${isActive('/blog') ? 'bg-[#47cb18] text-white' : 'text-gray'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"></path>
                        </svg>
                        <h1>Blog & Artikel</h1>
                    </Link>
                </ul>
            </nav>
        </section>
    );
};

export default Sidebar;
