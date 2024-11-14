import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <section className="shadow-lg fixed h-screen bg-white">
            <nav className="w-60 flex flex-col my-3 p-5 min-h-screen">
                <Link className='hover:scale-110 duration-300' to="/">
                    <h1 className="text-3xl text-[#47cb18] font-bold mb-5">
                        Care<span className="text-black">Bites</span>
                    </h1>
                </Link>


                <ul className="text-md flex flex-col gap-3">
                    {/* Home Link */}
                    <Link to="/home" className={`flex items-center  gap-2 px-2 py-3 hover:bg-[#47cb18] hover:text-white : 'text-gray rounded-md ${isActive('/home') ? 'bg-[#47cb18] text-white' : 'text-gray'}`}>
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
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"  // Biarkan fill pada elemen <svg> tetap "currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            className="bi bi-pencil-square"
                        >
                            <path
                                d="M16 13L11.85 8.95C11.3333 8.45 10.8958 7.89583 10.5375 7.2875C10.1792 6.67917 10 6.01667 10 5.3C10 4.38333 10.3208 3.60417 10.9625 2.9625C11.6042 2.32083 12.3833 2 13.3 2C13.8333 2 14.3333 2.1125 14.8 2.3375C15.2667 2.5625 15.6667 2.86667 16 3.25C16.3333 2.86667 16.7333 2.5625 17.2 2.3375C17.6667 2.1125 18.1667 2 18.7 2C19.6167 2 20.3958 2.32083 21.0375 2.9625C21.6792 3.60417 22 4.38333 22 5.3C22 6.01667 21.825 6.67917 21.475 7.2875C21.125 7.89583 20.6917 8.45 20.175 8.95L16 13ZM16 10.2L18.725 7.525C19.0417 7.20833 19.3333 6.87083 19.6 6.5125C19.8667 6.15417 20 5.75 20 5.3C20 4.93333 19.875 4.625 19.625 4.375C19.375 4.125 19.0667 4 18.7 4C18.4667 4 18.2458 4.04583 18.0375 4.1375C17.8292 4.22917 17.65 4.36667 17.5 4.55L16 6.35L14.5 4.55C14.35 4.36667 14.1708 4.22917 13.9625 4.1375C13.7542 4.04583 13.5333 4 13.3 4C12.9333 4 12.625 4.125 12.375 4.375C12.125 4.625 12 4.93333 12 5.3C12 5.75 12.1333 6.15417 12.4 6.5125C12.6667 6.87083 12.9583 7.20833 13.275 7.525L16 10.2ZM7 18.5L13.95 20.4L19.9 18.55C19.8167 18.4 19.6958 18.2708 19.5375 18.1625C19.3792 18.0542 19.2 18 19 18H13.95C13.5 18 13.1417 17.9833 12.875 17.95C12.6083 17.9167 12.3333 17.85 12.05 17.75L9.725 16.975L10.275 15.025L12.3 15.7C12.5833 15.7833 12.9167 15.85 13.3 15.9C13.6833 15.95 14.25 15.9833 15 16C15 15.8167 14.9458 15.6417 14.8375 15.475C14.7292 15.3083 14.6 15.2 14.45 15.15L8.6 13H7V18.5ZM1 22V11H8.6C8.71667 11 8.83333 11.0125 8.95 11.0375C9.06667 11.0625 9.175 11.0917 9.275 11.125L15.15 13.3C15.7 13.5 16.1458 13.85 16.4875 14.35C16.8292 14.85 17 15.4 17 16H19C19.8333 16 20.5417 16.275 21.125 16.825C21.7083 17.375 22 18.1 22 19V20L14 22.5L7 20.55V22H1ZM3 20H5V13H3V20Z"
                                fill="currentColor"  // Menggunakan "currentColor" untuk mengikuti warna teks
                            />
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


                    <Link to="/profile" className={`flex items-center gap-2 px-2 py-3 hover:bg-[#47cb18] hover:text-white rounded-md ${isActive('/profile') ? 'bg-[#47cb18] text-white' : 'text-gray'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg>
                        <h1>My Profile</h1>
                    </Link>





                </ul>
            </nav>
        </section>
    );
};

export default Sidebar;
