import {Link} from 'react-router-dom'

export default function LandingPage(){
    return (
        <div>
            <header>
                <div className="h-20 bg-[#75b8e2] text-white flex items-center px-4 justify-between">
                    <p className="text-3xl font-semibold">LOGO</p>
                    <div className="flex gap-2 items-center">
                        <ul className="flex gap-2 font-semibold">
                            <Link to={'/home'}>
                                <li className={`${location.pathname == '/home' ? 'underline' : ''} hover:-translate-y-1 transition-all`}>Home</li>
                            </Link>
                            <li className="hover:-translate-y-1 transition-all">Learn More</li>
                        </ul>
                        <div className="w-7 flex items-center justify-center">
                            <div className="w-0.5 h-12 bg-[#5c9bc2]"></div>
                        </div>
                        <Link to={'/login'}>
                            <button className="p-2 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all">LOGIN</button>
                        </Link>
                    </div>
                </div>
                <div className="h-5 bg-[#61a4cd]"></div>
            </header>
            <main className="min-h-screen">
                <div className="h-120 bg-[#5796be] text-white px-4 flex items-center justify-center gap-2">
                    <div className="w-[50%] flex justify-center flex-col gap-6">
                        <p className="font-semibold text-3xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <div className="flex gap-4">
                            <button className="p-2 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all">Start Now</button>
                            <button className="p-2 px-4 rounded-md font-semibold border-2 border-[#d0934c] hover:bg-[#c28742] transition-all">Learn More</button>
                        </div>
                    </div>
                    
                    <div className="border border-[#4381a7] h-100 w-[50%] rounded-md bg-[#61a4cd]"></div>
                </div>

                <div className="grid grid-cols-5 m-6 h-75 gap-6 my-10">
                    <div className="rounded-md flex flex-col justify-end overflow-hidden border border-[#61a4cd] shadow-md">
                            <div className="bg-[#61a4cd] h-25"></div>
                    </div>
                    <div className="rounded-md flex flex-col justify-end overflow-hidden border border-[#61a4cd] shadow-md">
                            <div className="bg-[#61a4cd] h-25"></div>
                    </div>
                    <div className="rounded-md flex flex-col justify-end overflow-hidden border border-[#61a4cd] shadow-md">
                            <div className="bg-[#61a4cd] h-25"></div>
                    </div>
                    <div className="rounded-md flex flex-col justify-end overflow-hidden border border-[#61a4cd] shadow-md">
                            <div className="bg-[#61a4cd] h-25"></div>
                    </div>
                    <div className="rounded-md flex flex-col justify-end overflow-hidden border border-[#61a4cd] shadow-md">
                            <div className="bg-[#61a4cd] h-25"></div>
                    </div>
                </div>
                
                <div className="flex flex-col justify-center ">
                    <div className="h-5 bg-[#61a4cd]"></div>
                    <div className="bg-[#5796be] h-50 flex items-center px-6">
                        <p className="text-white font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit qui magnam hic molestiae! Ex maiores explicabo, consequuntur magnam modi, corporis iste repudiandae sequi optio eos, veritatis atque possimus praesentium hic!</p>
                    </div>
                    <div className="h-5 bg-[#61a4cd]"></div>
                </div>

                <div className="grid grid-cols-4 m-6 my-10 gap-6">
                    <div className=" border border-[#4381a7] h-90 rounded-md bg-[#61a4cd]"></div>
                    <div className=" border border-[#4381a7] h-90 rounded-md bg-[#61a4cd]"></div>
                    <div className=" border border-[#4381a7] h-90 rounded-md bg-[#61a4cd]"></div>
                    <div className=" border border-[#4381a7] h-90 rounded-md bg-[#61a4cd]"></div>
                </div>

            </main>
            <footer>
                <div className="h-5 bg-[#61a4cd]"></div>
                <div className="h-13 bg-[#75b8e2]"></div>
            </footer>
        </div>
    )
}