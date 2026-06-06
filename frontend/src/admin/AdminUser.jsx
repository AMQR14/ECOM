import { Edit, Plus, Trash, X } from "lucide-react"
import AdminLayout from "../layouts/AdminLayout"
import Dialog from "../dialog/Dialog"
import { useEffect, useState } from "react"
import api from "../lib/api"

export default function AdminUser(){
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    async function fetchAllUser() {
        setLoading(true)
        try{
            const res = await api.get('/user')
            setUsers(res.data.users)
            console.log(res.data.users)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchAllUser()
    }, [])

    //Create
    const [formCreate, setFormCreate] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        role: '',
    })
    const [errorCreate, setErrorCreate] = useState({})

    const [create, setCreate] = useState(false)
    
    const openCreate = () => {
        setCreate(!create)
        setFormCreate('')
        setErrorCreate('')
    }

    async function handleCreate(e) {
        e.preventDefault()
        setErrorCreate({})
        setLoading(true)
        try{
            await api.post('/user', {
                name: formCreate.name,
                email: formCreate.email,
                phone: formCreate.phone,
                password: formCreate.password,
                role: formCreate.role,
            })
            openCreate()
            fetchAllUser()
        }catch(err){
            if(err.response.status == 422){
                setErrorCreate(err.response.data.errors)
            }
        }finally{
            setLoading(false)
        }
    }

    //Edit
    const [formEdit, setFormEdit] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        role: '',
    })
    const [errorEdit, setErrorEdit] = useState({})
    const [userid, setUserid] = useState('')

    const [edit, setEdit] = useState(false)
    
    const openEdit = (id) => {
        setEdit(!edit)
        setFormEdit()
        setErrorEdit()
        setUserid(id)
        console.log(userid)
    }

    async function fetchUser() {
        setLoading(true)
        try{
            const res = await api.get(`/user/${userid}`)
            setFormEdit(res.data.user)
            console.log(res.data.user)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        if(userid){
            fetchUser()
        }
    }, [userid])

    async function handleEdit(e) {
        e.preventDefault()
        setErrorEdit({})
        setLoading(true)
        try{
            await api.put(`/user/${userid}`, {
                name: formEdit.name,
                email: formEdit.email,
                phone: formEdit.phone,
                password: formEdit.password,
                role: formEdit.role,
            })
            openEdit()
            fetchAllUser()
        }catch(err){
            if(err.response.status == 422){
                setErrorEdit(err.response.data.errors)
            }
        }finally{
            setLoading(false)
        }
    }

    //Delete
    const [del, setDel] = useState(false)
    
    const openDelete = (id) => {
        setDel(!del)
        setUserid(id)
    }

    async function handleDelete(id) {
        setLoading(true)
        try{
            await api.delete(`/user/${id}`)
            openDelete()
            fetchAllUser()
        }finally{
            setLoading(fasle)
        }
    }


    return (
        <AdminLayout>
            {create 
            ? <Dialog>
                <div className="flex justify-between w-full mb-4">
                    <div className="">
                        <p className="text-xl font-semibold">Create User</p>
                    </div>
                    <div className="p-1 px-2 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all flex items-center text-white h-full w-fit" onClick={()=> openCreate()}>
                        <X/>
                    </div>
                </div>
                <form action="" className="w-full flex flex-col gap-4" onSubmit={handleCreate}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Name:</label>
                        <input type="text" placeholder="Enter name" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormCreate({...formCreate, name:e.target.value})}/>
                            {errorCreate.name && <p className="text-red-500">{errorCreate.name[0]}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Email:</label>
                        <input type="text" placeholder="Enter email" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormCreate({...formCreate, email:e.target.value})}/>
                            {errorCreate.email && <p className="text-red-500">{errorCreate.email[0]}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Phone Number:</label>
                        <input type="text" placeholder="Enter phone mumber" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormCreate({...formCreate, phone:e.target.value})}/>
                            {errorCreate.phone && <p className="text-red-500">{errorCreate.phone[0]}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Password:</label>
                        <input type="text" placeholder="Enter password" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormCreate({...formCreate, password:e.target.value})}/>
                            {errorCreate.password && <p className="text-red-500">{errorCreate.password[0]}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Role:</label>
                        <select type="text"  className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormCreate({...formCreate, role:e.target.value})}>
                            <option value="" selected disabled>Select Role</option>
                            <option value="admin" >Admin</option>
                            <option value="user" >User</option>
                        </select>
                        {errorCreate.role && <p className="text-red-500">{errorCreate.role[0]}</p>}
                    </div>
                        <button className="p-2 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white mt-6 py-3 w-full" >Create</button>
                </form>
            </Dialog> : ''}

            {edit 
            ? <Dialog>
                <div className="flex justify-between w-full mb-4">
                    <div className="">
                        <p className="text-xl font-semibold">Edit User</p>
                    </div>
                    <div className="p-1 px-2 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all flex items-center text-white h-full w-fit" onClick={()=> openEdit()}>
                        <X/>
                    </div>
                </div>
                <form action="" className="w-full flex flex-col gap-4" onSubmit={handleEdit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Name:</label>
                        <input type="text" value={loading ? 'Loading...' : formEdit?.name} placeholder="Enter name" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormEdit({...formEdit, name:e.target.value})}/>
                            {errorEdit?.name && <p className="text-red-500">{errorEdit?.name[0]}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Email:</label>
                        <input type="text" value={loading ? 'Loading...' : formEdit?.email} placeholder="Enter email" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormEdit({...formEdit, email:e.target.value})}/>
                            {errorEdit?.email && <p className="text-red-500">{errorEdit?.email[0]}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Phone Number:</label>
                        <input type="text" value={loading ? 'Loading...' : formEdit?.phone} placeholder="Enter phone mumber" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormEdit({...formEdit, phone:e.target.value})}/>
                            {errorEdit?.phone && <p className="text-red-500">{errorEdit?.phone[0]}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Password:</label>
                        <input type="text" placeholder="Enter password" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormEdit({...formEdit, password:e.target.value})}/>
                            {errorEdit?.password && <p className="text-red-500">{errorEdit?.password[0]}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Role:</label>
                        <select type="text"  className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormEdit({...formEdit, role:e.target.value})}>
                            <option value="" selected disabled>Select Role</option>
                            <option value="admin" selected={formEdit?.role == 'admin'}>Admin</option>
                            <option value="user" selected={formEdit?.role == 'user'}>User</option>
                        </select>
                        {errorEdit?.role && <p className="text-red-500">{errorEdit?.role[0]}</p>}
                    </div>
                        <button className="p-2 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white mt-6 py-3 w-full" >Save</button>
                </form>
            </Dialog> : ''}

            {del 
            ? <Dialog>
                <div className="flex justify-between w-full mb-4">
                    <div className="">
                        <p className="text-xl font-semibold">Delete User</p>
                    </div>
                    <div className="p-1 px-2 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all flex items-center text-white h-full w-fit" onClick={()=> openDelete()}>
                        <X/>
                    </div>
                </div>
                <div>
                    <p className="font-semibold">Are you sure you want to delete?</p>
                </div>
                <div className="flex gap-4">
                    <button className="p-2 px-4 rounded-md font-semibold bg-[#d04c4c] hover:bg-[#c24242] transition-all text-white mt-6 py-3 w-full" onClick={()=> handleDelete(userid)}>Delete</button>
                    <button className="p-2 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white mt-6 py-3 w-full" onClick={()=> openDelete()}>Cancel</button>
                </div>
            </Dialog> : ''}
            

            <div>
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-xl">User</p>
                    <div className="flex gap-2">
                        <input type="text" placeholder="Search..." className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"/>
                        <div className="p-1 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all flex items-center text-white h-auto" onClick={()=> openCreate()}>
                            <Plus/>
                        </div>
                    </div>
                </div>
                <div className="border-2 my-4 overflow-hidden rounded-md border-[#d0934c]">
                    <table className="w-full divide-y-2 divide-[#d0934c] overflow-auto">
                        <thead className="bg-[#e3ae71] text-[#a96f2e]">
                            <tr className="divide-x-2 divide-[#d0934c]">
                                <th className="p-1">No</th>
                                <th className="p-1">Name</th>
                                <th className="p-1">Email</th>
                                <th className="p-1">Phone Number</th>
                                <th className="p-1">Role</th>
                                <th className="p-1">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y-2 divide-[#d0934c]">
                            {users.map((user, index)=>(
                                <tr className="divide-x-2 divide-[#d0934c]" key={user.id}>
                                    <td className="p-1">{index + 1}</td>
                                    <td className="p-1">{user.name}</td>
                                    <td className="p-1">{user.email}</td>
                                    <td className="p-1">{user.phone}</td>
                                    <td className="p-1">{user.role}</td>
                                    <th className="p-1 w-25">
                                        <div className="flex gap-2 justify-center items-center">
                                            <div className="p-1 px-2 w-fit rounded-md bg-[#4c83d0] hover:bg-[#5e91d8] text-white" onClick={()=> openEdit(user.id)}>
                                                <Edit/>
                                            </div>
                                            <div className="p-1 px-2 w-fit rounded-md bg-[#d04c4c] hover:bg-[#d85e5e] text-white" onClick={()=> openDelete(user.id)}>
                                                <Trash/>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    )
}