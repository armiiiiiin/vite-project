import React, { useState } from 'react'
import ItemBusinescard from './component/businescard/ItemBusinescard'
import ListBusinescard from './component/businescard/ListBusinescard'
import Form from './component/businescard/Form'
import { v4 as uuidv4 } from 'uuid';


export default function Businescard() {


    const [data , setdata] = useState([
        {
            id : uuidv4(),
            title : 'title job' ,
            number : 'number job',
            address : 'address job',
            website : 'website job',
        },
        
    ])
    
    // const [titleinput , settitleinput ] = useState('')
    // const titleonchangehanler = (e)=>{
    //     settitleinput(e.target.value)
    // }

    // const [numberinput , setnumberinput ] = useState('')
    // const numberonchangehanler = (e)=>{
    //     setnumberinput(e.target.value)
    // }


    // const [addressinput , setaddressinput ] = useState('')
    // const addressonchangehanler = (e)=>{
    //     setaddressinput(e.target.value)
    // }


    // const [websiteinput , setwebsiteinput ] = useState('')
    // const websiteonchangehanler = (e)=>{
    //     setwebsiteinput(e.target.value)
    // }



    // const onkeydownhanler = (()=>{
        
    //     if(
    //         titleinput != '' &&  numberinput != '' && addressinput != '' && websiteinput != ''
    //     ){
    //         setdata([
    //             ...data,
    //             {
    //                 id : uuidv4(),
    //                 title : titleinput ,
    //                 number : numberinput,
    //                 address : addressinput,
    //                 website : websiteinput,
    //             }
    //         ]),

    //         settitleinput ('')
    //         setnumberinput ('')
    //         setaddressinput ('')
    //         setwebsiteinput ('')
    //     }
        

    // })


    const onkeydownhanlerInForm = ((inputeData)=>{
        setdata([
                        ...data,
                        {
                            id : uuidv4(),
                            title : inputeData.title ,
                            number : inputeData.number,
                            address : inputeData.address,
                            website : inputeData.website,
                           }
                    ])
        
       
    })
    
    


    //delete handler
    const ondeletehanler = (i)=>{
            let newdata = data.filter((e)=>{
                // console.log(e.id)
                return e.id != i.id
            })

            // console.log(newdata)
            setdata(newdata)
    }


  return (




    <div className="flex  justify-between  text-gray-400">


      <div className="border w-3/4 h-auto p-5 m-5 ">
        <ListBusinescard data={data} ondeletehanler={ondeletehanler} />
      </div>



        <div className="flex flex-col  border w-1/4 h-screen p-5 m-5">

        {/* <div className="flex flex-col  border w-1/4 h-screen p-5 m-5">      */}
            {/* <input value={titleinput} placeholder='Title' onChange={titleonchangehanler} className='m-1' type="text" />
            <input value={numberinput} placeholder='Number' onChange={numberonchangehanler} className='m-1' type="text" />
            <input value={addressinput} placeholder='Address' onChange={addressonchangehanler} className='m-1' type="text" />
            <input value={websiteinput} placeholder='Website' onChange={websiteonchangehanler} className='m-1' type="text" />
            <button onClick={onkeydownhanler}  className='border m-2'>ADD</button> */}

            <Form  onkeydownhanlerInForm={onkeydownhanlerInForm} />
        </div>


    </div>
  )
}
