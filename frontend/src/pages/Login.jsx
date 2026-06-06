import { MoveLeft } from "lucide-react";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from "../context/AuthContext";

export default function Login(){
    const [form, setForm] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const {login} = useAuth()
    const navigate = useNavigate()

    async function handleLogin(e) {
        e.preventDefault()
        setLoading(false)
        setError('')
        try{
            await login(form.email, form.password)
            navigate('/dashboard')
        }catch(err){
            if(err.response.status == 401){
                setError([err.response.data.message])
            }
        }finally{
            setLoading(false)
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className=" md:w-[50%] min-h-screen bg-[#5796be]">
            </div>

            <div className="md:w-[50%] flex items-center justify-center">
                <div className="flex justify-center items-center w-100 h-full flex-col gap-6">
                    <div className="flex justify-between w-full">
                        <div>
                            <p className="text-xl font-semibold">Welcome</p>
                            <p className="text-sm">Login to your account</p>
                        </div>
                        <Link  to={'/home'} className="auto">
                            <div className="p-1 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all flex items-center text-white h-full">
                                <MoveLeft/>
                            </div>
                        </Link>
                    </div>
                    <form action="" className="w-full flex flex-col gap-4" onSubmit={handleLogin}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="font-semibold">Email:</label>
                            <input type="text" placeholder="Enter your email" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2" onChange={e => setForm({...form, email:e.target.value})}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="font-semibold">Password:</label>
                            <input type="text" placeholder="Enter your password" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2" onChange={e => setForm({...form, password:e.target.value})}/>
                        </div>

                        {error && <p className="text-red-500">{error[0]}</p>}

                        <button className="p-2 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white mt-6 py-3 w-full">LOGIN</button>

                        <p className="text-end">Don't have an account? <Link to={'/register'} className="text-[#5796be] hover:text-[#4783a8] underline transition-all">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}