import { Edit, Plus, Trash, X } from "lucide-react"
import AdminLayout from "../layouts/AdminLayout"
import Dialog from "../dialog/Dialog"
import { useEffect, useState } from "react"
import api from "../lib/api"

export default function AdminProduct(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    async function fetchAllProduct() {
        setLoading(true)
        try{
            const res = await api.get('/product')
            setProducts(res.data.products)
            console.log(res.data.products)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchAllProduct()
    }, [])

    //Create
    const [formCreate, setFormCreate] = useState({
        category_id: '',
        name: '',
        description: '',
        price: '',
        stock: '',
        is_active: '',
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
            await api.post('/product', {
                category_id: formCreate.category_id,
                name: formCreate.name,
                description: formCreate.description,
                price: formCreate.price,
                stock: formCreate.stock,
                is_active: formCreate.is_active,
            })
            openCreate()
            fetchAllProduct()
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
        category_id: '',
        name: '',
        description: '',
        price: '',
        stock: '',
        is_active: '',
    })
    const [errorEdit, setErrorEdit] = useState({})
    const [productid, setProductid] = useState('')

    const [edit, setEdit] = useState(false)
    
    const openEdit = (id) => {
        setEdit(!edit)
        setFormEdit()
        setErrorEdit()
        setProductid(id)
        console.log(productid)
    }

    async function fetchProduct() {
        setLoading(true)
        try{
            const res = await api.get(`/product/${productid}`)
            setFormEdit(res.data.product)
            console.log(res.data.product)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        if(productid){
            fetchProduct()
        }
    }, [productid])

    async function handleEdit(e) {
        e.preventDefault()
        setErrorEdit({})
        setLoading(true)
        try{
            await api.put(`/product/${productid}`, {
                category_id: formEdit.category_id,
                name: formEdit.name,
                description: formEdit.description,
                price: formEdit.price,
                stock: formEdit.stock,
                is_active: formEdit.is_active,
            })
            openEdit()
            fetchAllProduct()
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
        setProductid(id)
    }

    async function handleDelete(id) {
        setLoading(true)
        try{
            await api.delete(`/product/${id}`)
            openDelete()
            fetchAllProduct()
        }finally{
            setLoading(fasle)
        }
    }

    //Category
    const [category, setCategory] = useState([])

    async function fetchCategory() {
        setLoading(true)
        try{
            const res = await api.get('/category')
            setCategory(res.data.categorys)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchCategory()
    }, [])

    return (
        <AdminLayout>
            {create 
            ? <Dialog>
                <div className="flex justify-between w-full mb-4">
                    <div className="">
                        <p className="text-xl font-semibold">Create Product</p>
                    </div>
                    <div className="p-1 px-2 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all flex items-center text-white h-full w-fit" onClick={()=> openCreate()}>
                        <X/>
                    </div>
                </div>
                <form action="" className="w-full flex flex-col gap-4" onSubmit={handleCreate}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Category:</label>
                        <select type="text"  className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormCreate({...formCreate, category_id:e.target.value})}>
                            <option value="" selected disabled>Select Category</option>
                            {category.map((cat, index)=>(
                                <option value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                        {errorCreate.category_id && <p className="text-red-500">{errorCreate.category_id[0]}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Name:</label>
                        <input type="text" placeholder="Enter name" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormCreate({...formCreate, name:e.target.value})}/>
                            {errorCreate.name && <p className="text-red-500">{errorCreate.name[0]}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Description:</label>
                        <input type="text" placeholder="Enter description" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormCreate({...formCreate, description:e.target.value})}/>
                            {errorCreate.description && <p className="text-red-500">{errorCreate.description[0]}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Price:</label>
                        <input type="number" min={1} placeholder="Enter price" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormCreate({...formCreate, price:e.target.value})}/>
                            {errorCreate.price && <p className="text-red-500">{errorCreate.price[0]}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Stock:</label>
                        <input type="number" min={0} placeholder="Enter stock" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormCreate({...formCreate, stock:e.target.value})}/>
                            {errorCreate.stock && <p className="text-red-500">{errorCreate.stock[0]}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Status:</label>
                        <select type="text"  className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormCreate({...formCreate, is_active:e.target.value})}>
                            <option value="" selected disabled>Select Status</option>
                            <option value={1} >Active</option>
                            <option value={0} >Not Active</option>
                        </select>
                        {errorCreate.is_active && <p className="text-red-500">{errorCreate.is_active[0]}</p>}
                    </div>
                        <button className="p-2 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white mt-6 py-3 w-full" >Create</button>
                </form>
            </Dialog> : ''}

            {edit 
            ? <Dialog>
                <div className="flex justify-between w-full mb-4">
                    <div className="">
                        <p className="text-xl font-semibold">Edit Product</p>
                    </div>
                    <div className="p-1 px-2 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all flex items-center text-white h-full w-fit" onClick={()=> openEdit()}>
                        <X/>
                    </div>
                </div>
                <form action="" className="w-full flex flex-col gap-4" onSubmit={handleEdit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Category:</label>
                        <select type="text"  className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormEdit({...formEdit, category_id:e.target.value})}>
                            <option value="" selected disabled>Select Category</option>
                            {category.map((cat, index)=>(
                                <option value={cat.id} selected={formEdit?.category_id == cat.id}>{cat.name}</option>
                            ))}
                        </select>
                        {errorEdit?.category_id && <p className="text-red-500">{errorEdit?.category_id[0]}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Name:</label>
                        <input type="text" value={loading ? 'Loading...' : formEdit?.name} placeholder="Enter name" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormEdit({...formEdit, name:e.target.value})}/>
                            {errorEdit?.name && <p className="text-red-500">{errorEdit?.name[0]}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Description:</label>
                        <input type="text" value={loading ? 'Loading...' : formEdit?.description} placeholder="Enter description" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormEdit({...formEdit, description:e.target.value})}/>
                            {errorEdit?.description && <p className="text-red-500">{errorEdit?.description[0]}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Price:</label>
                        <input type="number"  value={loading ? 'Loading...' : formEdit?.price} min={1} placeholder="Enter price" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormEdit({...formEdit, price:e.target.value})}/>
                            {errorEdit?.price && <p className="text-red-500">{errorEdit?.price[0]}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Stock:</label>
                        <input type="number" value={loading ? 'Loading...' : formEdit?.stock} min={0} placeholder="Enter stock" className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormEdit({...formEdit, stock:e.target.value})}/>
                            {errorEdit?.stock && <p className="text-red-500">{errorEdit?.stock[0]}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Status:</label>
                        <select type="text"  className="focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"onChange={e => setFormEdit({...formEdit, is_active:e.target.value})}>
                            <option value="" selected disabled>Select Status</option>
                            <option value={1} selected={formEdit?.is_active == 1}>Active</option>
                            <option value={0} selected={formEdit?.is_active == 0}>Not Active</option>
                        </select>
                        {errorEdit?.is_active && <p className="text-red-500">{errorEdit?.is_active[0]}</p>}
                    </div>
                        <button className="p-2 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white mt-6 py-3 w-full" >Save</button>
                </form>
            </Dialog> : ''}

            {del 
            ? <Dialog>
                <div className="flex justify-between w-full mb-4">
                    <div className="">
                        <p className="text-xl font-semibold">Delete Product</p>
                    </div>
                    <div className="p-1 px-2 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all flex items-center text-white h-full w-fit" onClick={()=> openDelete()}>
                        <X/>
                    </div>
                </div>
                <div>
                    <p className="font-semibold">Are you sure you want to delete?</p>
                </div>
                <div className="flex gap-4">
                    <button className="p-2 px-4 rounded-md font-semibold bg-[#d04c4c] hover:bg-[#c24242] transition-all text-white mt-6 py-3 w-full" onClick={()=> handleDelete(productid)}>Delete</button>
                    <button className="p-2 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white mt-6 py-3 w-full" onClick={()=> openDelete()}>Cancel</button>
                </div>
            </Dialog> : ''}
            

            <div>
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-xl">Product</p>
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
                                <th className="p-1">Category</th>
                                <th className="p-1">Name</th>
                                <th className="p-1">Description</th>
                                <th className="p-1">Price</th>
                                <th className="p-1">Stock</th>
                                <th className="p-1">Status</th>
                                <th className="p-1">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y-2 divide-[#d0934c]">
                            {products.map((product, index)=>(
                                <tr className="divide-x-2 divide-[#d0934c]" key={product.id}>
                                    <td className="p-1">{index + 1}</td>
                                    <td className="p-1">{product.category.name}</td>
                                    <td className="p-1">{product.name}</td>
                                    <td className="p-1">{product.description}</td>
                                    <td className="p-1">${product.price}</td>
                                    <td className="p-1">{product.stock}</td>
                                    <td className="p-1">{product.is_active == 1 ? 'Active' : 'Not Active'}</td>
                                    <th className="p-1 w-25">
                                        <div className="flex gap-2 justify-center items-center">
                                            <div className="p-1 px-2 w-fit rounded-md bg-[#4c83d0] hover:bg-[#5e91d8] text-white" onClick={()=> openEdit(product.slug)}>
                                                <Edit/>
                                            </div>
                                            <div className="p-1 px-2 w-fit rounded-md bg-[#d04c4c] hover:bg-[#d85e5e] text-white" onClick={()=> openDelete(product.slug)}>
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