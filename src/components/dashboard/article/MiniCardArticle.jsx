import { Link } from "react-router-dom";
import articles from "../../../assets/blogarticle/articleData.json";

const MiniCardArticle = () => {
    return (
        <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="text-[#45c517] text-lg font-bold mb-4">Artikel Terkait</h3>
            <div className="flex flex-col gap-4">
                {articles.map(article => (
                    <Link to={`/article/${article.id}`} key={article.id}>
                        <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                            <img
                                className="w-16 h-16 object-cover rounded-md"
                                src={article.img_content}
                                alt={article.title}
                            />
                            <div>
                                <p className="font-semibold text-sm">{article.title}</p>
                                <p className="text-xs text-gray-500">{article.created_at}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MiniCardArticle;
