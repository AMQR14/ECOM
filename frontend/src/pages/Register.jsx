import { MoveLeft } from "lucide-react";
import {Link} from 'react-router-dom'

export default function Register(){
    return (
        <div className="flex items-center justify-center">

            <div className="md:w-[50%] flex items-center justify-center">
                <div className="flex justify-center items-center w-100 h-full flex-col gap-6">
                    <div className="flex justify-between w-full">
                        <div>
                            <p className="text-xl font-semibold">Welcome</p>
                            <p className="text-sm">Register your account</p>
                        </div>
                        <Link  to={'/home'} className="auto">
                            <div className="p-1 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all flex items-center text-white h-full">
                                <MoveLeft/>
                            </div>
                        </Link>
                    </div>
                    <form action="" className="w-full flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="font-semibold">Name:</label>
                            <input type="text" placeholder="Enter name" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="font-semibold">Email:</label>
                            <input type="text" placeholder="Enter email" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="font-semibold">Phone Number:</label>
                            <input type="text" placeholder="Enter phone mumber" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="font-semibold">Password:</label>
                            <input type="text" placeholder="Enter password" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"/>
                        </div>

                        <Link to={'/login'}>
                            <button className="p-2 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white mt-6 py-3 w-full">Register</button>
                        </Link>
                        <p className="text-end">Already have an account? <Link to={'/login'} className="text-[#5796be] hover:text-[#4783a8] underline transition-all">Login</Link></p>
                    </form>
                </div>
            </div>

            <div className=" md:w-[50%] min-h-screen bg-[#5796be]">
            </div>
        </div>
    )
}