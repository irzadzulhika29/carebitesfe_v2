const ArticleCard = ({ article }) => {
    return (
        <div className='hover:cursor-pointer hover:scale-110 transition duration-300 bg-white p-3 shadow-md w-72     h-72 rounded-md overflow-hidden'>
            <div className="flex items-center gap-2 mb-3">
                <div className="border-2 border-[#45c517] rounded-full">
                    <img
                        src={article.author_profile}
                        alt={article.author_name}
                        className="w-5 h-5 object-cover rounded-full"
                    />
                </div>
                <h1 className="text-xs font-semibold">{article.author_name}</h1>
            </div>
            <img
                src={article.img_content}
                className='rounded-md w-full h-[45%] object-cover'
                alt="Gambar Artikel"
            />
            <div className='mt-2'>
                <p className="text-xs text-[#3ca315]">{article.category}</p>
                <h1 className='font-semibold'>{article.title}</h1>
                <p
                    className='text-xs text-gray-600 mt-1'
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                >
                    {article.content}
                </p>
            </div>
        </div>
    )
}

export default ArticleCard;
