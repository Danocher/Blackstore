import { Button } from "@/components/ui/button";
import { Item } from "@prisma/client";
import { startTransition, useState } from "react";


interface ItemCard{
    item: (Item & ({
        dopInfo: {
            id: string;
            diagonal: string | null;
            processor: string | null;
            itemId: string;
        }[];
        color: {
            id: string;
            name: string;
            itemId: string;
        }[];
        size: {
            id: string;
            name: string;
            itemId: string;
            price: number;
        }[];
    }))
}


export const ItemCard = ({item}:ItemCard) => {
    const [isSize, setIsSize] = useState({size: item.size.map(e => e.name), price:item.size.map(e => e.price)})
    const [vibor, setVibor] = useState<number>()
    console.log(vibor)
    return(
        <div>
            {item.size.map(e => 
                <div key={e.id}>
                    <Button onClick={() => 
                        startTransition(() => {
                            let vi = isSize.size.indexOf(e.name)
                            setVibor(isSize.price[vi])
                        })
                    }>
                        {e.name}
                    </Button>
                    
                </div>
            )}
            {vibor}
        </div>
    )
}