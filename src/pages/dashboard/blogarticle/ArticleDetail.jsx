import { useParams } from "react-router-dom";
import articles from "../../../assets/blogarticle/articleData.json";
import Sidebar from "../../../components/dashboard/Sidebar";
import Navbar from "../../../components/dashboard/Navbar";
import MiniCardArticle from "../../../components/dashboard/article/MiniCardArticle";

const ArticleDetail = () => {
    const { id } = useParams();  // Mendapatkan id artikel dari URL
    const article = articles.find(article => article.id === parseInt(id, 10)); // Parsing id dengan basis 10

    if (!article) {
        return <div>Artikel tidak ditemukan</div>;
    }

    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <section className="bg-[#f4fef1] w-full pl-60 pt-20">
                <div className="flex-grow">
                    <Navbar />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        className="text-green-500 hover:cursor-pointer mt-3 mx-10  bi bi-arrow-left-short"
                        viewBox="0 0 16 16"
                        onClick={() => window.history.back()}
                    >
                        <path
                            fillRule="evenodd"
                            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                        />
                    </svg>

                    <section className="min-h-screen mx-10 my-3">
                        <div className="flex gap-5">
                            <div className="p-8 rounded-md bg-white shadow-md w-[75%]">
                                <p className="text-2xl font-bold">{article.title}</p>
                                <div className="flex gap-3 items-center my-3">
                                    <img
                                        className="rounded-full border-2 border-[#45c517] w-8 h-8 object-cover"
                                        src={article.author_profile}
                                        alt={article.author_name}
                                    />
                                    <div>
                                        <p className="font-semibold">{article.author_name}</p>
                                        <span className="text-xs">{article.read_min} | {article.created_at}</span>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        className="w-full h-80 object-cover block"
                                        src={article.img_content}
                                        alt={article.title}
                                    />
                                    <p className="mt-5 text-md">
                                        {article.content}
                                    </p>
                                </div>
                            </div>

                            <div className="w-[30%]">
                                
                                <MiniCardArticle />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default ArticleDetail;
