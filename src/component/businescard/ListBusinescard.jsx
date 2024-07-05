import React from 'react'
import ItemBusinescard from './ItemBusinescard'

export default function ListBusinescard({data}) {


    return (
        <div>

            {data.map((i)=><ItemBusinescard i={i}/> )}
            
        </div>

    
  )
}
