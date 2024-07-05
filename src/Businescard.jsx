import React, { useState } from 'react'
import ItemBusinescard from './component/businescard/ItemBusinescard'
import ListBusinescard from './component/businescard/ListBusinescard'

export default function Businescard() {


    const [data , setdata] = useState([
        {
            title : 'title job' ,
            number : 'number job',
            address : 'address job',
            website : 'website job',
        },
        {
            title : 'title job2' ,
            number : 'number job2',
            address : 'address job2',
            website : 'website job2',
        }
    ])
    

    const newdata = ()=>{
        setdata([
            ...data,
            {
                title : 'title job3' ,
                number : 'number job3',
                address : 'address job3',
                website : 'website job3',
            },
            {
                title : 'title job23' ,
                number : 'number job23',
                address : 'address job23',
                website : 'website job23',
            }
        ])
    }
    

  return (




    <div className="flex justify-between  text-gray-400">


      <div className="border w-3/4 h-auto p-5 m-5 ">
        <ListBusinescard data={data}/>
        <button onClick={newdata}>more</button>
      </div>



      <div className="border w-1/4 h-screen p-5 m-5">
        <h1>ho</h1>
      </div>


    </div>
  )
}
