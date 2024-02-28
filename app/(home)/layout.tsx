import { Navbar } from "@/components/navbar"


interface HomeLaypoutProps{
    children: React.ReactNode
}


const HomeLayout = ({children}:HomeLaypoutProps) => {
  return (
    <div>
        <Navbar/>
        <div className=" h-full pt-10">
            {children}
        </div>
    </div>
  )
}

export default HomeLayout