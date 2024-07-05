import React from 'react'

export default function ItemBusinescard({ i }) {

    
    
  return (


    <div className='flex justify-between p-2  border w-auto h-auto '>

      <div className='w-2/3 uppercase'>
        <h2>title : {i.title}</h2>
        <h2>number : {i.number}</h2>
        <h2>address : {i.address}</h2>
        <h2>website : {i.website}</h2>

      </div>


      <div className='border p-2  items-center justify-center flex w-1/3 text-6xl font-bold '>
        <h1>LOGO</h1>
      </div>

    </div>
  )
}
