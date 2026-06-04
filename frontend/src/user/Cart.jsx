import { Trash, Wallet, X } from "lucide-react"
import UserLayout from "../layouts/UserLayout"
import { useState } from "react"
import Dialog from "../dialog/Dialog"

export default function Cart(){
    const [buy, setBuy] = useState(false)
    
    const openBuy = () => {
        setBuy(!buy)
    }

    return (
        <UserLayout>
            {buy 
        ? <Dialog>
            <div className="flex justify-between w-full mb-4">
                <div className="">
                    <p className="text-xl font-semibold">Purchase</p>
                </div>
                <div className="p-1 px-2 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all flex items-center text-white h-full w-fit" onClick={()=> openBuy()}>
                    <X/>
                </div>
            </div>
            <form action="" className="w-full flex flex-col gap-4">
                    <div className="bg-gray-200 h-70 rounded-md overflow-auto no-scrollbar p-2">
                        <div className=" rounded-md bg-gray-50 h-fit p-2">
                            <div className="flex items-center justify-between border-b-2 border-gray-300 pb-1 mb-1">
                                <div className="flex">
                                    <p className="mr-2">1</p>
                                    <p className="line-clamp-1 max-w-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <p>$13</p>
                            </div>
                            <div className="flex items-center justify-between border-b-2 border-gray-300 pb-1 mb-1">
                                <div className="flex">
                                    <p className="mr-2">1</p>
                                    <p className="line-clamp-1 max-w-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <p>$13</p>
                            </div>
                            <div className="flex items-center justify-between border-b-2 border-gray-300 pb-1 mb-1">
                                <div className="flex">
                                    <p className="mr-2">1</p>
                                    <p className="line-clamp-1 max-w-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <p>$13</p>
                            </div>
                            <div className="flex items-center justify-between border-b-2 border-gray-300 pb-1 mb-1">
                                <div className="flex">
                                    <p className="mr-2">1</p>
                                    <p className="line-clamp-1 max-w-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <p>$13</p>
                            </div>
                            <div className="flex items-center justify-between border-b-2 border-gray-300 pb-1 mb-1">
                                <div className="flex">
                                    <p className="mr-2">1</p>
                                    <p className="line-clamp-1 max-w-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <p>$13</p>
                            </div>
                            <div className="flex items-center justify-between border-b-2 border-gray-300 pb-1 mb-1">
                                <div className="flex">
                                    <p className="mr-2">1</p>
                                    <p className="line-clamp-1 max-w-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <p>$13</p>
                            </div>
                            <div className="flex items-center justify-between border-b-2 border-gray-300 pb-1 mb-1">
                                <div className="flex">
                                    <p className="mr-2">1</p>
                                    <p className="line-clamp-1 max-w-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <p>$13</p>
                            </div>
                            <div className="flex items-center justify-between border-b-2 border-gray-300 pb-1 mb-1">
                                <div className="flex">
                                    <p className="mr-2">1</p>
                                    <p className="line-clamp-1 max-w-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <p>$13</p>
                            </div>
                            <div className="flex items-center justify-between border-b-2 border-gray-300 pb-1 mb-1">
                                <div className="flex">
                                    <p className="mr-2">1</p>
                                    <p className="line-clamp-1 max-w-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <p>$13</p>
                            </div>
                            <div className="flex items-center justify-between border-b-2 border-gray-300 pb-1 mb-1">
                                <div className="flex">
                                    <p className="mr-2">1</p>
                                    <p className="line-clamp-1 max-w-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <p>$13</p>
                            </div>
                            <div className="flex items-center justify-between border-b-2 border-gray-300 pb-1 mb-1">
                                <div className="flex">
                                    <p className="mr-2">1</p>
                                    <p className="line-clamp-1 max-w-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <p>$13</p>
                            </div>
                            <div className="flex items-center justify-between border-gray-300 py-2">
                                <div className="flex">
                                    <p className="mr-2 font-semibold">Item Amount:</p>
                                    <p className="line-clamp-1 max-w-50 font-semibold">12</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Payment Method:</label>
                        <select type="text"  className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2">
                            <option value="" selected disabled>Select Payment Method</option>
                            <option value="" >Cash</option>
                            <option value="" >Non Cash</option>
                        </select>
                    </div>
                    <div className="flex gap-2 items-center w-[50%]">
                        <label htmlFor="" className="font-semibold">Total:</label>
                        <div className="font-semibold text-white bg-[#d0934c] hover:bg-[#c28742] rounded-md p-1 px-2">$68</div>
                    </div>
                    <button className="p-2 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white mt-6 py-3 w-full" onClick={()=> openBuy()}>Purchase</button>
            </form>
        </Dialog> : ''}


            <div className="min-h-screen m-6 flex  gap-6">
                <div className="bg-gray-200 w-[70%] h-screen rounded-md p-4">
                    <div className="bg-gray-50 border border-gray-400 rounded-md h-30 p-2 flex gap-4 w-full">
                        <div className="bg-[#5093bc] h-full w-30 rounded-md"></div>
                        <div className="w-full">
                            <div className="flex justify-between items-center w-full">
                                <div className="font-semibold">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                </div>
                                <p className="font-bold text-lg">$13</p>
                            </div>
                            <div className="flex gap-1 mt-2">
                                <div className="bg-[#5093bc] h-5 w-5 rounded-full"></div>
                                <p className="text-sm">location123</p>
                            </div>
                            <div className="flex w-full justify-end">
                                <button className="p-2 px-4 rounded-md font-semibold bg-[#d04c4c] hover:bg-[#c24242] transition-all text-white w-fit flex gap-2 justify-center">Remove <Trash/></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 w-[30%] h-screen rounded-md p-4">
                    <div className="bg-gray-50 border border-gray-400 rounded-md p-4">
                        <div className="rounded-md h-fit p-2 flex justify-between">
                            <div className="flex gap-2 items-center w-[50%]">
                                <label htmlFor="" className="font-semibold">Item Amount:</label>
                                <div className="font-semibold text-white bg-[#d0934c] hover:bg-[#c28742] rounded-md p-1 px-2">12</div>
                            </div>
                            <div className="flex gap-2 items-center w-[50%]">
                                <label htmlFor="" className="font-semibold">Total:</label>
                                <div className="font-semibold text-white bg-[#d0934c] hover:bg-[#c28742] rounded-md p-1 px-2">$68</div>
                            </div>
                        </div>
                        <button className="p-2 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white mt-6 py-3 w-full flex gap-2 justify-center" onClick={()=> openBuy()}>Continue to purchase <Wallet/></button>
                    </div>
                    
                </div>
            </div>
        </UserLayout>
    )
}