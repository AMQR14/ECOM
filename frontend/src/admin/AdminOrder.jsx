import { Edit, Plus, Trash, X } from "lucide-react"
import AdminLayout from "../layouts/AdminLayout"
import Dialog from "../dialog/Dialog"
import { useState } from "react"

export default function AdminOrder(){
    const [edit, setEdit] = useState(false)
    
    const openEdit = () => {
        setEdit(!edit)
    }

    const [del, setDel] = useState(false)
    
    const openDelete = () => {
        setDel(!del)
    }
    return (
        <AdminLayout>

            {edit 
            ? <Dialog>
                <div className="flex justify-between w-full mb-4">
                    <div className="">
                        <p className="text-xl font-semibold">Edit Order</p>
                    </div>
                    <div className="p-1 px-2 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all flex items-center text-white h-full w-fit" onClick={()=> openEdit()}>
                        <X/>
                    </div>
                </div>
                <form action="" className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Order Number:</label>
                        <input type="text" placeholder="Enter order number" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Item:</label>
                        <div className="flex gap-2">
                            <select type="text"  className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2 w-full">
                                <option value="" selected disabled>Select Item</option>
                            </select>
                            <div className="p-1 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all flex items-center text-white h-auto" >
                                <Plus/>
                            </div>
                        </div>
                        <div>
                            <div className="p-2 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white w-full flex justify-between" >Item 1 <X/></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Status:</label>
                        <select type="text"  className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2">
                            <option value="" selected disabled>Select Status</option>
                            <option value="" >Active</option>
                            <option value="" >Not Active</option>
                        </select>
                    </div>
                        <button className="p-2 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white mt-6 py-3 w-full" onClick={()=> openEdit()}>Save</button>
                </form>
            </Dialog> : ''}

            {del 
            ? <Dialog>
                <div className="flex justify-between w-full mb-4">
                    <div className="">
                        <p className="text-xl font-semibold">Delete Order</p>
                    </div>
                    <div className="p-1 px-2 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all flex items-center text-white h-full w-fit" onClick={()=> openDelete()}>
                        <X/>
                    </div>
                </div>
                <div>
                    <p className="font-semibold">Are you sure you want to delete?</p>
                </div>
                <div className="flex gap-4">
                    <button className="p-2 px-4 rounded-md font-semibold bg-[#d04c4c] hover:bg-[#c24242] transition-all text-white mt-6 py-3 w-full" onClick={()=> openDelete()}>Delete</button>
                    <button className="p-2 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white mt-6 py-3 w-full" onClick={()=> openDelete()}>Cancel</button>
                </div>
            </Dialog> : ''}
            

            <div>
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-xl">Order</p>
                    <div className="flex gap-2">
                        <input type="text" placeholder="Search..." className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"/>
                    </div>
                </div>
                <div className="border-2 my-4 overflow-hidden rounded-md border-[#d0934c]">
                    <table className="w-full divide-y-2 divide-[#d0934c] overflow-auto">
                        <thead className="bg-[#e3ae71] text-[#a96f2e]">
                            <tr className="divide-x-2 divide-[#d0934c]">
                                <th className="p-1">No</th>
                                <th className="p-1">User</th>
                                <th className="p-1">Order Number</th>
                                <th className="p-1">Shipping cost</th>
                                <th className="p-1">Subtotal</th>
                                <th className="p-1">Total</th>
                                <th className="p-1">Status</th>
                                <th className="p-1">Shipping Address</th>
                                <th className="p-1">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y-2 divide-[#d0934c]">
                            <tr className="divide-x-2 divide-[#d0934c]">
                                <td className="p-1">No</td>
                                <td className="p-1">Dummy</td>
                                <td className="p-1">Dummy</td>
                                <td className="p-1">Dummy</td>
                                <td className="p-1">Dummy</td>
                                <td className="p-1">Dummy</td>
                                <td className="p-1">Dummy</td>
                                <td className="p-1">Dummy</td>
                                <th className="p-1 w-25">
                                    <div className="flex gap-2 justify-center items-center">
                                        <div className="p-1 px-2 w-fit rounded-md bg-[#4c83d0] hover:bg-[#5e91d8] text-white" onClick={()=> openEdit()}>
                                            <Edit/>
                                        </div>
                                        <div className="p-1 px-2 w-fit rounded-md bg-[#d04c4c] hover:bg-[#d85e5e] text-white" onClick={()=> openDelete()}>
                                            <Trash/>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    )
}