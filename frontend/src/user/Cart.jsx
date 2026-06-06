import { ShoppingBag, Trash, Wallet, X } from "lucide-react"
import UserLayout from "../layouts/UserLayout"
import { useEffect, useState } from "react"
import Dialog from "../dialog/Dialog"
import { useAuth } from "../context/AuthContext"
import api from "../lib/api"
import { create } from "axios"

export default function Cart(){
    const [cartItem, setCartItem] = useState([])
    const [loading, setLoading] = useState(false)
    const {user} = useAuth()
    
    const userid = user.data?.id
    
    async function fetchCartItem() {
        setLoading(true)
        try{
            const res = await api.get(`/user/${userid}`)
            setCartItem(res.data.user.cart.cart_item)
            console.log(res.data.user.cart.cart_item);
            
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        if(userid){
            fetchCartItem()
        }
    }, [userid])

    const [buy, setBuy] = useState(false)
    
    const openBuy = () => {
        setBuy(!buy)
    }

    async function handleDelete(id) {
        setLoading(true)
        try{
            await api.delete(`/cart_item/${id}`)
            fetchCartItem()
        }finally{
            setLoading(false)
        }
    }

    const allPrice = cartItem.map(e=> parseInt(e.price))

    const sum = allPrice.reduce((i, e) => i + e, 0)

    
    const allQuantity = cartItem.map(e=> parseInt(e.quantity))

    const sumQuan = allQuantity.reduce((i, e) => i + e, 0)
    

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
                            {cartItem.map((item, index)=>(
                                <div className="flex items-center justify-between border-b-2 border-gray-300 pb-1 mb-1">
                                    <div className="flex">
                                        <p className="mr-2">{index + 1}</p>
                                        <p className="line-clamp-1 max-w-50">{item.product.name}</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <p>{item.quantity}</p>
                                        <p>|</p>
                                        <p>${Math.round(item.price)}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="flex items-center justify-between border-gray-300 py-2">
                                <div className="flex">
                                    <p className="mr-2 font-semibold">Item Amount:</p>
                                    <p className="line-clamp-1 max-w-50 font-semibold">{sumQuan}</p>
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
                        <div className="font-semibold text-white bg-[#d0934c] hover:bg-[#c28742] rounded-md p-1 px-2">${sum}</div>
                    </div>
                    <button className="p-2 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white mt-6 py-3 w-full" onClick={()=> openBuy()}>Purchase</button>
            </form>
        </Dialog> : ''}


            <div className="min-h-screen m-6 flex  gap-6">
                <div className="bg-gray-200 w-[70%] h-screen rounded-md p-4 flex gap-2 flex-col overflow-auto no-scrollbar">
                    {cartItem.map((item)=>(
                        <div key={item.id} className="">
                            <div className="bg-gray-50 border border-gray-400 rounded-md h-30 p-2 flex gap-4 w-full">
                                <div className="bg-[#5093bc] h-full w-30 rounded-md"></div>
                                <div className="w-full">
                                    <div className="flex justify-between items-center w-full">
                                        <div className="font-semibold">
                                            {item.product?.name}
                                        </div>
                                        <p className="font-semibold text-lg  p-1 px-4 text-white bg-[#5093bc] rounded-md items-center flex gap-1">${Math.round(item.price)}</p>
                                    </div>
                                    <div className="flex gap-1 mt-2">
                                        <p className="text-sm">{item.product.category?.name}</p>
                                    </div>
                                    <div className="flex items-center justify-end">
                                        <div className="flex w-full justify-end gap-2">
                                            <div className="font-semibold p-1 px-4 text-white bg-[#5093bc] rounded-md items-center flex gap-1 ">{item.quantity}<ShoppingBag className="size-4"/></div>
                                            <button className="p-2 px-4 rounded-md font-semibold bg-[#d04c4c] hover:bg-[#c24242] transition-all text-white w-fit flex gap-2 justify-center" onClick={()=> handleDelete(item.id)}>Remove <Trash/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-gray-200 w-[30%] h-screen rounded-md p-4">
                    <div className="bg-gray-50 border border-gray-400 rounded-md p-4">
                        <div className="rounded-md h-fit p-2 flex justify-between">
                            <div className="flex gap-2 items-center w-[50%]">
                                <label htmlFor="" className="font-semibold">Item Amount:</label>
                                <div className="font-semibold text-white bg-[#d0934c] hover:bg-[#c28742] rounded-md p-1 px-2">{cartItem.length}</div>
                            </div>
                            <div className="flex gap-2 items-center w-[50%]">
                                <label htmlFor="" className="font-semibold">Total:</label>
                                <div className="font-semibold text-white bg-[#d0934c] hover:bg-[#c28742] rounded-md p-1 px-2">${sum}</div>
                            </div>
                        </div>
                        <button className="p-2 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white mt-6 py-3 w-full flex gap-2 justify-center" onClick={()=> openBuy()}>Continue to purchase <Wallet/></button>
                    </div>
                    
                </div>
            </div>
        </UserLayout>
    )
}