import { Navbar } from "@/components/navbar"


interface HomeLaypoutProps{
    children: React.ReactNode
}


const HomeLayout = ({children}:HomeLaypoutProps) => {
  return (
    <div>
        <Navbar/>
        <div>
            {children}
        </div>
    </div>
  )
}

export default HomeLayout