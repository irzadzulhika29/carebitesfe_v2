

const ManagementShareMeals = () => {
  return (

    <div className='hover:cursor-pointer w-64 pb-3 bg-white shadow-md rounded-xl p-4'>
      <p className="font-semibold mb-2">Roti Besar Prancis</p>
      <img className="object-cover w-full h-32 rounded-md" src="https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/16612_roti-baguette-khas-prancis.jpg" alt="" />
      <div className="my-2">
        <p className="text-sm ">Sisa Stock: <span className="text-[#45c517]">10</span></p>
        <div className="duration-300 transition w-full flex gap-3 my-2">
          <button className="duration-300 transition hover:bg-green-600 bg-[#45c517] text-white px-3 rounded-xl">Edit</button>
          <button className="duration-300 transition hover:bg-[#45c517] hover:text-white bg-white border border-[#45c517] text-[#45c517] px-3 rounded-xl">Hapus</button>
        </div>
      </div>
    </div>

  )
}

export default ManagementShareMeals
