

const ArticleCard = () => {
    return (
        <div>
            <div className='bg-white p-3 shadow-md w-72 h-64 rounded-md overflow-hidden'>
                <div className="flex items-center gap-2 mb-3">
                    <div className="border-2 border-[#45c517] rounded-full">
                        <img
                            src=""
                            alt=""
                            className="min-w-5 h-5 object-cover rounded-full"
                        />
                    </div>
                    <h1 className="text-xs font-semibold">AmbaNews</h1>
                </div>
                <img
                    src="https://asset.kompas.com/crops/sg_fQAGr26rGzn6uzDccd9jGh04=/0x0:0x0/750x500/data/photo/2024/11/13/673499dc2d858.jpeg"
                    className='rounded-md w-full h-[40%] object-cover'
                    alt="Gambar Artikel"
                />
                <div className='mt-2'>
                    <h1 className='font-semibold'>Tips Lulus Cepat Ala Bahlil</h1>
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae deleniti, minima iste tenetur velit voluptas molestias! Accusamus quod iste cum. Nihil perspiciatis rem veritatis fugit amet, quos consequatur animi!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard
