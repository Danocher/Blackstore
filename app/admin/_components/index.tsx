"use client";


import { Button } from '@/components/ui/button'
import { Color, DopInfo, Item, Size } from '@prisma/client';
import Link from 'next/link'
import { startTransition, useState } from 'react'
import { ItemCard } from './item-card';


interface AdminkaProps{
    items: (Item & ({
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
    }))[];
    orders: any[]
}

const Adminka = ({items, orders}:AdminkaProps) => {
    const [isShow, setIsShow] = useState("items")
    const [isSize, setIsSize] = useState()
    
  return (
    <div className=' h-full flex justify-center items-center'>
        <div className=' flex flex-col'>
            <div className=' space-x-2'>
                <Button onClick={() =>
                    startTransition(() => {
                        setIsShow("items")
                    })
                }>
                    Товары
                </Button>
                <Button onClick={() =>
                    startTransition(() => {
                        setIsShow("orders")
                    })
                }>
                    Заказы
                </Button>
                <Button onClick={() =>
                    startTransition(() => {
                        setIsShow("users")
                    })
                }>
                    Пользователи
                </Button>
            </div>

            <div>
                {isShow=== "items" && (
                    <div>
                        {items.map(e => (
                            <ItemCard key={e.id} item={e}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Adminka