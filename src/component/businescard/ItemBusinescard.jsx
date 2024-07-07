import React from 'react'
import Delete from './DeleteCard'
import DeleteCard from './DeleteCard'

export default function ItemBusinescard({ i , ondeletehanler}) {

    
  return (

    <div className='flex flex-col w-full'> 

      <div>

        <div className='flex justify-between p-2 m-2 border w-2/5 h-auto '>

          <div className='w-2/3 uppercase'>
            <h3>id : {i.id}</h3>
            <h2>title : {i.title}</h2>
            <h2>number : {i.number}</h2>
            <h2>address : {i.address}</h2>
            <h2>website : {i.website}</h2>

          </div>


          <div className='border p-2  items-center justify-center flex w-1/3 text-2xl font-bold '>
            <h1>LOGO</h1>
          </div>

        </div>
        
      </div>


      <div>
        <DeleteCard  onClick={()=>{ondeletehanler(i)}} />
      </div>

    </div>

  )
}
