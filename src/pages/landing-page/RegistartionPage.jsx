import NavbarLanding from "../../components/landingpage/NavbarLanding"
import RegistImage from "../../assets/img/donate.png"
import { Link } from "react-router-dom"

const RegistartionPage = () => {
    return (
        <div>
            <NavbarLanding />
            <section className="pt-24 min-h-screen flex items-center justify-center py-10">
                <div className="p-5 max-w-3xl shadow-lg bg-gray-100 flex rounded-2xl items-center">
                    <div className='md:w-1/2 px-16'>

                        <h1 className="text-2xl font-bold text-[#45c517]">Registration</h1>
                        <p className='text-sm mt-4 text-[#45c517]'>If You Already A Member, Easily Log In</p>

                        <form className='flex flex-col gap-4' action="">
                            <input className='p-2 rounded-xl mt-8 border' type="text" name="username" placeholder='Username' />
                            <input className='p-2 rounded-xl border' type="email" name="email" placeholder='Email' />
                            <input className='p-2 rounded-xl border' type="text" name="phoneNumber" placeholder='Phone Number' />

                            {/* Dropdown "Daftar Sebagai" */}
                            <select className='p-2 rounded-xl border' name="daftarSebagai" defaultValue="">
                                <option value="" disabled>Daftar Sebagai</option>
                                <option value="Pengguna">Pengguna</option>
                                <option value="Mitra">Mitra</option>
                                <option value="Lembaga Sosial">Lembaga Sosial</option>
                            </select>

                            <div className='relative'>
                                <input
                                    className='p-2 rounded-xl border w-full'
                                    type="password"
                                    name="password"
                                    placeholder='Password'
                                />
                            </div>

                            <div className='relative'>
                                <input
                                    className='p-2 rounded-xl border w-full'
                                    type="password"
                                    name="confirmPassword"
                                    placeholder='Confirm Password'
                                />
                            </div>

                            <button className='bg-[#45c517] rounded-xl py-2 text-white hover:scale-105 duration-300'>Register</button>
                        </form>



                    </div>

                    <div className='md:block hidden w-1/2'>
                        <img className=' rounded-2xl' src={RegistImage} alt="Login Illustration" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RegistartionPage
