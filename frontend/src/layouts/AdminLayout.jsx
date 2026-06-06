import { Menu } from 'lucide-react'
import { useState } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function AdminLayout({children}){
    const token = localStorage.getItem('token')
    const navigate = useNavigate(``)
    const {logout} = useAuth()

    if(!token){
        navigate('/home')
    }

    const location = useLocation()
    const [side, setSide] = useState(true)

    const openSide = () => {
        setSide(!side)
    }

    const [prof, setProf] = useState(false)

    const openProf = () => {
        setProf(!prof)
    }

    return (
        <div className='flex flex-col h-screen'>
            <header>
                <div className="h-20 bg-[#75b8e2] text-white flex items-center px-4 justify-between">
                    <div className={`${side ? 'ml-40' : 'ml-0' } transition-all p-1 bg-[#d0934c] hover:bg-[#c28742] rounded-md`} onClick={()=> openSide()}>
                        <Menu/>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="w-7 flex items-center justify-center">
                            <div className="w-0.5 h-12 bg-[#5c9bc2]"></div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='font-semibold'>
                                Admin 1
                            </p>
                            <div className='bg-[#5c9bc2] h-12 w-12 rounded-full' onClick={()=> openProf()}>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className='flex justify-end'>
                <div className={`${prof ? 'h-40 p-2 ' : 'h-0'} transition-all  w-40 fixed bg-[#75b8e2] rounded-bl-2xl flex flex-col justify-between`}>
                    <div className={`${prof ? 'block' : 'hidden'} transition-all flex flex-col justify-between h-full` }>
                        <div>
                            <p className='font-semibold text-white'>Admin 1</p>
                            <p className='text-sm text-gray-200'>Admin</p>
                        </div>
                        <div  className='flex flex-col gap-2'>
                            <button className="p-1 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white  w-full">Profile</button>
                            <div className="w-full flex items-center justify-center">
                                <div className="w-full h-0.5 bg-[#5c9bc2]"></div>
                            </div>
                            <button className="p-1 px-4 rounded-md font-semibold bg-[#d04c4c] hover:bg-[#c24242] transition-all text-white  w-full" onClick={()=> logout()}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* sidebar */}
            <div >
                <div className={`top-0 left-0 min-h-screen ${side ? 'w-40' : 'w-0'} transition-all  fixed bg-[#75b8e2] text-white flex items-center flex-col py-4`}>
                    <div className={`${side ? 'block' : 'hidden'} transition-all`}>
                        <p className="text-3xl font-semibold w-full flex items-center justify-center">LOGO</p>
                        <ul className='mt-6'>
                            <Link to={'/admin/dashboard'}>
                                <li className={`${location.pathname == '/admin/dashboard' ? 'border-l-4' : '' } font-semibold hover:bg-[#d0934c] hover:border-l-4 border-white p-3 transition-all`}>Dashboard</li>
                            </Link>
                            <Link to={'/admin/user'}>
                                <li className={`${location.pathname == '/admin/user' ? 'border-l-4' : '' } font-semibold hover:bg-[#d0934c] hover:border-l-4 border-white p-3 transition-all`}>User</li>
                            </Link>
                            <Link to={'/admin/category'}>
                                <li className={`${location.pathname == '/admin/category' ? 'border-l-4' : '' } font-semibold hover:bg-[#d0934c] hover:border-l-4 border-white p-3 transition-all`}>Category</li>
                            </Link>
                            <Link to={'/admin/product'}>
                                <li className={`${location.pathname == '/admin/product' ? 'border-l-4' : '' } font-semibold hover:bg-[#d0934c] hover:border-l-4 border-white p-3 transition-all`}>Product</li>
                            </Link>
                            <Link to={'/admin/order'}>
                                <li className={`${location.pathname == '/admin/order' ? 'border-l-4' : '' } font-semibold hover:bg-[#d0934c] hover:border-l-4 border-white p-3 transition-all`}>Order</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>

            <main className={`flex-1 ${side ? 'ml-40' : 'ml-0'} transition-all  bg-[#75b8e2] px-4 overflow-hidden`}>
                <div className='bg-white h-full w-full rounded-2xl p-3 overflow-auto no-scrollbar'>
                    {children}
                </div>
            </main>
            <footer>
                <div className="h-4 bg-[#75b8e2]"></div>
            </footer>
        </div>
    )
}