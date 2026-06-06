import { Minus, MoveLeft, Plus, ShoppingCart } from "lucide-react"
import UserLayout from "../layouts/UserLayout"
import {Link, useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from "react"
import api from "../lib/api"
import { useAuth } from "../context/AuthContext"

export default function Product(){
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const {slug} = useParams()
    const {user} = useAuth()
    const navigate = useNavigate()

    const userid = user.data?.id

    const [cartid, setCartid] = useState('')

    async function fetchCartid() {
        setLoading(true)
        try{
            const res = await api.get(`/user/${userid}`)
            setCartid(res.data.user.cart.id)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        if(userid){
            fetchCartid()
        }
    }, [userid])

    async function fetchProduct() {
        setLoading(true)
        try{
            const res = await api.get(`/product/${slug}`)
            setProduct(res.data.product)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchProduct()
    }, [])

    async function addToCart() {
        setLoading(true)
        try{
            await api.post('/cart_item', {
                cart_id: cartid,
                product_id: product.id,
                quantity: quan,
                price: quan * product.price,
            })
            navigate('/cart')
        }finally{
            setLoading(false)
        }
    }

    const [added, setAdded] = useState(false)

    const clickAdd = () => {
        setAdded(!added)
        setQuan(1)
    }

    const [quan, setQuan] = useState(0)

    const reduce = () => {
        setQuan(quan-1)
        if (quan <= 1){
            setAdded(!added)
        }
    }

    const increase = () => {
        if (quan >= product.stock){
            ''
        }else{
            setQuan(quan+1)
        }
    }

    

    return (
        <div>
            <UserLayout>
                <div>
                    <div className="bg-gray-200 h-90 p-4">
                        <Link  to={'/dashboard'} className="flex w-full justify-end">
                            <div className="p-2 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all flex items-center text-white w-fit jus">
                                <MoveLeft/>
                            </div>
                        </Link>
                    </div>

                    <div className="p-6">
                        <div className="flex justify-between">
                            <p className="font-semibold text-xl line-clamp-1">{product.name}</p>
                            <p className="font-semibold text-2xl">${Math.round(product.price)}</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <p className="text-md">{product.category?.name}</p>
                            </div>
                            <div>
                                <button className={` ${added ? 'hidden' : 'flex'} p-2 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white mt-6 py-3 w-full flex gap-2`} onClick={()=> clickAdd()}>Add to Cart <ShoppingCart/></button>
                                <div className={`${added ? 'flex' : 'hidden'} gap-2`}>
                                    <button className={`p-2 px-4  rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white mt-6 py-3 w-full flex gap-2`} onClick={()=> reduce()}><Minus/></button>
                                    <button className={`p-2 px-4  rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white mt-6 py-3 w-full flex gap-2`}>{quan}</button>
                                    <button className={`p-2 px-4  rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white mt-6 py-3 w-full flex gap-2`} onClick={()=> increase()}><Plus/></button>
                                    <button className={`p-2 px-4  rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white mt-6 py-3 w-full flex gap-2`} onClick={addToCart}><ShoppingCart/></button>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="mt-8 h-80 rounded-md bg-gray-200 p-4 overflow-auto no-scrollbar">
                            {product.description}
                        </div>
                    </div>
                </div>
            </UserLayout>
        </div>
    )
}