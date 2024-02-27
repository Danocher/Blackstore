import { Search, ShoppingCart, User} from "lucide-react"
import "./nav.css";
import Image from "next/image"
export default function Navbar(){
    return(
        <>
        <div className="navmain">
            <div className="navbut">
                {/* <Image src="/logo.png" alt="Black Store" width={30} height={20}/> */}
            </div>
            <div className="navbut">
                iPhone
            </div>
            <div className="navbut">
            iPad
            </div>
            <div className="navbut">
            Watch
            </div>
            <div className="navbut">
            AirPods
            </div>
            <div className="navbut">
                <Search color="white" size={24}/>
            </div>
            <div className="navbut">
                <ShoppingCart color="white" size={24}/>
            </div>
            <div className="navbut">
                <User color="white" size={24}/>
            </div>
        </div>
        </>
    )
}