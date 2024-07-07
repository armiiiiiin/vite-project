import React from 'react'
import ItemBusinescard from './ItemBusinescard'

export default function ListBusinescard({data , ondeletehanler}) {

    
    return (
        <div className='flex flex-wrap'>

            {data.map((i)=><ItemBusinescard i={i}  ondeletehanler={ondeletehanler} /> )}
            
        </div>

    
  )
}
