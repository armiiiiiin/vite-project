import React, { useState } from 'react'
import Delete from './DeleteCard'
import DeleteCard from './DeleteCard'
import Edit from './Edit'

export default function ItemBusinescard({ i , ondeletehanler , viphanler , updateEdite}) {


  const [editmode , seteditmode] = useState(false)
    
  const enteredithandler = ((e)=>{
      if (e.key === 'Enter'){
        console.log(e.target.value)
        updateEdite(i , e.target.value)
        seteditmode(false)
      }
  })

  return (

    <div className='flex flex-col w-1/3'> 

     
        {
          editmode

          ?  (

                <div className='flex flex-col'>
                  <input className='m-2' type="text" defaultValue={i.title} onKeyDown={enteredithandler} onChange={()=>{}} />
                  <input className='m-2' type="text" defaultValue={i.number} onChange={()=>{}} />
                  <input className='m-2' type="text" defaultValue={i.address} onChange={()=>{}} />
                  <input className='m-2' type="text" defaultValue={i.website} onChange={()=>{}} />
                  <Delete onClick={()=>{seteditmode(false)}}/>
                  <button>allChange</button>
                </div>
              )

          : (
            <div>
                  <div>

                      <div className={`flex justify-between p-2 m-2 border w-full h-auto ${i.vip ? 'bg-orange-500' : ''}`}>

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


                      <div className='flex justify-between'>
                      <DeleteCard  onClick={()=>{ondeletehanler(i)}} />
                      <Edit onClick={()=>{seteditmode(true)}}/>  
                      <input type="checkbox" checked={i?.vip} onChange={()=>{viphanler(i)}} />
                    </div>
            </div>
            
           )
        }

    </div>


  )
}
