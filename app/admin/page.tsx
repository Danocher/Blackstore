
import React from 'react'
import Adminka from './_components'
import { getItemAll } from '@/data/item'

const AdminPage = async () => {
    const orders:any[] = []   // await getOrdersAll
    const items = await getItemAll()    // await getItemsAll

  return (
    <Adminka orders={orders} items={items}/>
  )
}

export default AdminPage