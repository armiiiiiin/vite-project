import React from 'react'
import ItemBusinescard from './ItemBusinescard'

export default function ListBusinescard({data , ondeletehanler , viphanler , updateEdite}) {

    
    return (
        <div className='flex flex-wrap'>

            {data.map((i)=><ItemBusinescard i={i}  ondeletehanler={ondeletehanler} viphanler={viphanler} updateEdite={updateEdite} /> )}
            
        </div>

    

  )
}
