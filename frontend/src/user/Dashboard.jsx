import { Search } from "lucide-react"
import UserLayout from "../layouts/UserLayout"
import {Link, useParams} from 'react-router-dom'
import { useEffect, useState } from "react"
import api from "../lib/api"

export default function Dashboard(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {slug} = useParams()

    async function fetchProduct() {
        setLoading(true)
        try{
            const res = await api.get('/product')
            setProducts(res.data.products)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchProduct()
    }, [])

    return (
        <UserLayout>
            <div className="m-6 min-h-screen">
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-xl">Dashboard</p>
                    <div className="flex gap-2">
                        <input type="text" placeholder="Search..." className="w-100 focus:outline-none border-2 border-gray-200 hover:border-[#5796be] rounded-md transition-all p-2"/>
                        <div className=" p-1 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all flex items-center text-white h-auto" onClick={()=> openCreate()}>
                            <Search/>
                        </div>
                    </div>
                </div>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  h-75 gap-6 my-6">
                    {products.map((product)=>(
                        <div key={product.id}>
                            <Link to={`/product/${product.slug}`}>
                                <div className="rounded-md flex flex-col justify-end h-80 overflow-hidden hover:scale-101 transition-all border border-[#61a4cd] shadow-md">
                                        <div className="bg-[#61a4cd] h-25 p-2 text-white">
                                            <div className="flex gap-2 flex-col">
                                                <p className="line-clamp-1 font-semibold">{product.name}</p>
                                                <div className="flex gap-1">
                                                    <p className="text-sm">{product.category.name}</p>
                                                </div>
                                                <div className="flex justify-end w-full">
                                                    <div className="font-bold ">${product.price}</div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </UserLayout>
    )
}