// HomeDashboard.jsx
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const CharityCampign = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar akan selalu fixed di sebelah kiri */}
      <Sidebar showSearchBar={true} />


      <section className="bg-[#f4fef1] w-full pl-60 pt-20"> {/* Tambahkan padding-top agar konten tidak tertutup */}
        <div className="flex-grow">
          <Navbar showSearchBar={true} />
          <h1 className="mt-5 mx-10 text-2xl font-bold">Homepage</h1>
          <h1 className="mx-10 my-2">Hello, Welcomeback!</h1>
          <section className="min-h-screen mx-10 my-5 rounded-md bg-white shadow-md">
            {/* Konten tambahan di sini */}
          </section>
        </div>
      </section>

    </div>
  );
};

export default CharityCampign;
