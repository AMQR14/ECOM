import { MoveLeft, ShoppingCart } from "lucide-react"
import UserLayout from "../layouts/UserLayout"
import {Link} from 'react-router-dom'

export default function Product(){
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
                            <p className="font-semibold text-xl line-clamp-1">Lorem ipsum dolor sit.</p>
                            <p className="font-semibold text-2xl">$13.99</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <div className="bg-[#5093bc] h-7 w-7 rounded-full"></div>
                                <p className="text-md">location123</p>
                            </div>
                            <div>
                                <Link to={'/cart'}>
                                    <button className="p-2 px-4 rounded-md font-semibold bg-[#d0934c] hover:bg-[#c28742] transition-all text-white mt-6 py-3 w-full flex gap-2">Add to Cart <ShoppingCart/></button>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-8 h-80 rounded-md bg-gray-200 p-4 overflow-auto no-scrollbar">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis dolorem maxime minus dignissimos expedita sunt officia corrupti molestias exercitationem? Officia deserunt, fuga sunt fugit iste ipsum repudiandae amet iure.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis dolorem maxime minus dignissimos expedita sunt officia corrupti molestias exercitationem? Officia deserunt, fuga sunt fugit iste ipsum repudiandae amet iure.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis dolorem maxime minus dignissimos expedita sunt officia corrupti molestias exercitationem? Officia deserunt, fuga sunt fugit iste ipsum repudiandae amet iure.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis dolorem maxime minus dignissimos expedita sunt officia corrupti molestias exercitationem? Officia deserunt, fuga sunt fugit iste ipsum repudiandae amet iure.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis dolorem maxime minus dignissimos expedita sunt officia corrupti molestias exercitationem? Officia deserunt, fuga sunt fugit iste ipsum repudiandae amet iure.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis dolorem maxime minus dignissimos expedita sunt officia corrupti molestias exercitationem? Officia deserunt, fuga sunt fugit iste ipsum repudiandae amet iure.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis dolorem maxime minus dignissimos expedita sunt officia corrupti molestias exercitationem? Officia deserunt, fuga sunt fugit iste ipsum repudiandae amet iure.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis dolorem maxime minus dignissimos expedita sunt officia corrupti molestias exercitationem? Officia deserunt, fuga sunt fugit iste ipsum repudiandae amet iure.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis dolorem maxime minus dignissimos expedita sunt officia corrupti molestias exercitationem? Officia deserunt, fuga sunt fugit iste ipsum repudiandae amet iure.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis dolorem maxime minus dignissimos expedita sunt officia corrupti molestias exercitationem? Officia deserunt, fuga sunt fugit iste ipsum repudiandae amet iure.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis dolorem maxime minus dignissimos expedita sunt officia corrupti molestias exercitationem? Officia deserunt, fuga sunt fugit iste ipsum repudiandae amet iure.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis dolorem maxime minus dignissimos expedita sunt officia corrupti molestias exercitationem? Officia deserunt, fuga sunt fugit iste ipsum repudiandae amet iure.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis dolorem maxime minus dignissimos expedita sunt officia corrupti molestias exercitationem? Officia deserunt, fuga sunt fugit iste ipsum repudiandae amet iure.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis dolorem maxime minus dignissimos expedita sunt officia corrupti molestias exercitationem? Officia deserunt, fuga sunt fugit iste ipsum repudiandae amet iure.

                        </div>
                    </div>
                </div>
            </UserLayout>
        </div>
    )
}