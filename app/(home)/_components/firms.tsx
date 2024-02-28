import Image from "next/image"




export const Firms = () => {
    return(
        <div className=" pt-5">
            <div className=" text-lg font-semibold">
                <h1 >У нас не только Apple</h1>
            </div>
            <div className="flex items-center justify-center xl:w-[50%] 2xl:w-[50%] xl:h-[50%] 2xl:h-[50%] lh:w-[50%] lg:h-[50%]">
                <div className=" cursor-pointer">
                    <Image src="/applelogo.png" alt="Apple Logo" width={150} height={150}/>
                </div>
                <div>
                <Image src="/alisa-logo.png" alt="Yandex Logo" width={200} height={300}/>
                </div>
                <div>
                <Image src="/playstation5.png" alt="PS5" width={300} height={200}/>
                </div>
                <div>
                <Image src="/dyson.png" alt="Dyson" width={300} height={100}/>
                </div>
                <div>
                <Image src="/gopro.png" alt="GoPro" width={300} height={100}/>
                </div>
            </div>
        </div>
    )
}