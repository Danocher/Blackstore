
import { Search, ShoppingCart, User} from "lucide-react"
import Image from "next/image"





export const Navbar = () => {
    return(
       
        <div className=" flex justify-center bg-[#454545] text-white items-center fixed top-0 w-full h-10  z-[49]  px-2 lg:px-4  shadow-sm text-sm  space-x-5">
            <div className="">
                <Image src="/logo.png" alt="Black Store" width={40} height={30}/>
            </div>
            <div className=" m-3 ml-10">
                iPhone
            </div>
            <div className="m-3 ml-10">
            iPad
            </div>
            <div className="m-3 ml-10">
            Watch
            </div>
            <div className="m-3 ml-10">
            AirPods
            </div>
            <div className="m-3 ml-10">
                <Search color="white" size={24}/>
            </div>
            <div className="m-3 ml-10">
                <ShoppingCart color="white" size={24}/>
            </div>
            <div className="m-3 ml-10">
                <User color="white" size={24}/>
            </div>
        </div>
    
    )
}