import Sidebar from "../../components/dashboard/Sidebar";
import Navbar from "../../components/dashboard/Navbar";
import CharityCard from "../../components/dashboard/charitycampaign/CharityCard";
import charityData from '../../assets/lembagasosial/lembagaSosialData.json';
import { Link } from "react-router-dom";

const CharityCampaign = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar showSearchBar={true} />

      <section className="bg-[#f4fef1] w-full pl-60 pt-20">
        <div className="flex-grow">
          <Navbar showSearchBar={true} />
          <h1 className="mt-5 mx-10 text-2xl font-bold">Charity Campaign</h1>


          <section className="min-h-screen mx-10  rounded-md">
            <Link to="/campaign-form">
              <button
                className="py-2 text-white rounded-full w-32 bg-[#47cb18] mt-4 mb-5"
                type="submit"
              >
                Buat Charity
              </button>
            </Link>

            <div className="flex flex-wrap gap-10">
              {charityData.map((lembaga) => (
                <CharityCard
                  key={lembaga.id}
                  id={lembaga.id}
                  name={lembaga.name}
                  location={lembaga.location}
                  image_url={lembaga.image_url}
                  campaign={{
                    title: lembaga.campaign_title,
                    collected: lembaga.collected,
                    target: lembaga.target,
                    campaign_image_url: lembaga.campaign_image_url,
                  }}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default CharityCampaign;
