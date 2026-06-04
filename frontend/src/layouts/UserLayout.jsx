import { useState } from "react"
import {Link, useLocation} from 'react-router-dom'

export default function UserLayout({children}){
    const location = useLocation()
    const [prof, setProf] = useState(false)
    
    const openProf = () => {
        setProf(!prof)
    }
    return (
        <div className="flex flex-col h-screen">
            <header>
                <div className="h-20 bg-[#75b8e2] text-white flex items-center px-4 justify-between">
                    <p className="text-3xl font-semibold">LOGO</p>
                    <div className="flex gap-2 items-center">
                        <ul className="flex gap-2 font-semibold">
                            <Link to={'/dashboard'}>
                                <li className={`${location.pathname == '/dashboard' ? 'underline' : ''} hover:-translate-y-1 transition-all`}>Dashboard</li>
                            </Link>
                            <Link to={'/cart'}>
                                <li className={`${location.pathname == '/cart' ? 'underline' : ''} hover:-translate-y-1 transition-all`}>Cart</li>
                            </Link>
                        </ul>
                        <div className="w-7 flex items-center justify-center">
                            <div className="w-0.5 h-12 bg-[#5c9bc2]"></div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='font-semibold'>
                                User 1
                            </p>
                            <div className='bg-[#5c9bc2] h-12 w-12 rounded-full' onClick={()=> openProf()}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-5 bg-[#61a4cd]"></div>
            </header>
            <div className='flex justify-end'>
                <div className={`${prof ? 'h-40 p-2 ' : 'h-0'} transition-all  w-40 fixed bg-[#75b8e2] rounded-bl-2xl flex flex-col justify-between`}>
                    <div className={`${prof ? 'block' : 'hidden'} transition-all flex flex-col justify-between h-full` }>
                        <div>
                            <p className='font-semibold text-white'>User 1</p>
                            <p className='text-sm text-gray-200'>User</p>
                        </div>
                        <div  className='flex flex-col gap-2'>
                            <button className="p-1 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white  w-full">Profile</button>
                            <div className="w-full flex items-center justify-center">
                                <div className="w-full h-0.5 bg-[#5c9bc2]"></div>
                            </div>
                            <Link to={'/home'}>
                                <button className="p-1 px-4 rounded-md font-semibold bg-[#d04c4c] hover:bg-[#c24242] transition-all text-white  w-full">Logout</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <main className="">
                {children}
            </main>
            <footer>
                <div className="h-5 bg-[#61a4cd]"></div>
                <div className="h-13 bg-[#75b8e2]"></div>
            </footer>
        </div>
    )
}