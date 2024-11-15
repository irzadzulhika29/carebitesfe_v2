const HistoryCard = () => {
    return (
        <>
            <p className="font-semibold  mb-2">01 Oktober 2024</p>
            <div className="flex gap-2">
                <img className="w-32 h-20 object-cover rounded-md" src="https://thefamilydinnerproject.org/wp-content/uploads/2014/07/Sunday-roast-chicken2.jpg" alt="" />
                <div className="w-full flex justify-between">
                    <div className="space-y-2">
                        <h1>Ayam Bakar Madu Hitam</h1>
                        <p className="text-xs">2 x Rp10.000</p>
                        <div className="flex gap-3 items-center">
                            <img className="h-5 w-5 object-cover rounded-full" src="https://yt3.googleusercontent.com/gb3DOFjQfFKlCrlIZbZb2w1LY0PDpy3gU4aquZudTn7YHfqoswyMunOm-6x5q46oMmAOohr6hA=s900-c-k-c0x00ffffff-no-rj" alt="" />
                            <p>Ayam Madu Cak Imut</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <h1 className="text-md font-semibold">Total Harga</h1>
                        <h1>Rp20.000</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HistoryCard
