import { db } from "@/lib/db"




export const getItemAll = async () => {
    try {
        const items = await db.item.findMany({
            include: {
                size: true,
                color: true,
                dopInfo: true
            }
        })

        return items;
    } catch  {
        return []
    }
}