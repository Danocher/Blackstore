import Image from "next/image"




export const Category = () => {
    return(
        <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 ">
            <div className=" h-full w-full flex flex-col justify-center items-center border-gray-400 border">
                <Image src="/iphones.png" alt="iPhones" width={300} height={200}/>
                <h1>iPhone</h1>
                <h3>от 47990 Р</h3>
            </div>

            <div className=" h-full w-full flex flex-col justify-center items-center border-gray-400 border">
                <Image src="/ipad.png" alt="iPad" width={300} height={200}/>
                <h1>iPad</h1>
                <h3>от 37990 Р</h3>
            </div>

            <div className=" h-full w-full flex flex-col justify-center items-center border-gray-400 border">
                <Image src="/watches.png" alt="Watch" width={300} height={200}/>
                <h1>Watch</h1>
                <h3>от 31990 Р</h3>
            </div>

            <div className=" h-full w-full flex flex-col justify-center items-center border-gray-400 border">
                <Image src="/acces.png" alt="Accessories" width={250} height={200}/>
                <h1>Аксессуары</h1>
                <h3>от 490 Р</h3>
            </div>  

            <div className=" h-full w-full flex flex-col justify-center items-center border-gray-400 border">
                <Image src="/smart.png" alt="Smart Home" width={300} height={200}/>
                <h1>Умный дом</h1>
                <h3>от 
                    3990 Р</h3>
            </div>
            <div className=" h-full w-full flex flex-col justify-center items-center border-gray-400 border">
                <Image src="/gameplay.png" alt="Game Stations" width={300} height={200}/>
                <h1>Игровые приставки</h1>
                <h3>от 22590 Р</h3>
            </div>

            <div className=" h-full w-full flex flex-col justify-center items-center border-gray-400 border">
                <Image src="/homeandkitchen.png" alt="Home Technique" width={300} height={200}/>
                <h1>Техника для красоты и дома</h1>
                <h3>от 31990 Р</h3>
            </div>

            <div className=" h-full w-full flex flex-col justify-center items-center border-gray-400 border">
                <Image src="/gadjets.png" alt="Gadgets" width={300} height={200}/>
                <h1>Гаджеты</h1>
                <h3>от 7490 Р</h3>
            </div>   
        </div>
    )
}