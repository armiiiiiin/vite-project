import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Businescard from '../../Businescard';

export default function Form({formhanler}) {




    const [titleinput , settitleinput ] = useState('')
    const titleonchangehanler = (e)=>{
        settitleinput(e.target.value)
    }

    const [numberinput , setnumberinput ] = useState('')
    const numberonchangehanler = (e)=>{
        setnumberinput(e.target.value)
    }


    const [addressinput , setaddressinput ] = useState('')
    const addressonchangehanler = (e)=>{
        setaddressinput(e.target.value)
    }


    const [websiteinput , setwebsiteinput ] = useState('')
    const websiteonchangehanler = (e)=>{
        setwebsiteinput(e.target.value)
    }


    
    const [inputeData , setinputeData ] = useState('')
    const oninputehanler = (()=>{
        
        if(
            titleinput != '' &&  numberinput != '' && addressinput != '' && websiteinput != ''
        ){
            setinputeData([
                ...inputeData,
                {
                    id : uuidv4(),
                    title : titleinput ,
                    number : numberinput,
                    address : addressinput,
                    website : websiteinput,
                }
                

            ])
            
            console.log('sss')
            settitleinput ('')
            setnumberinput ('')
            setaddressinput ('')
            setwebsiteinput ('')
            
            
        } 
        ()=> formhanler(inputeData)
        return inputeData
        // console.log(inputeData)
        
    })
    
    

    const click = ()=> {
        ;
        ()=>formhanler(inputeData)
    }
    

    
  return (


    <div className="">
        <input value={titleinput} placeholder='Title' onChange={titleonchangehanler} className='m-1' type="text" />
        <input value={numberinput} placeholder='Number' onChange={numberonchangehanler} className='m-1' type="text" />
        <input value={addressinput} placeholder='Address' onChange={addressonchangehanler} className='m-1' type="text" />
        <input value={websiteinput} placeholder='Website' onChange={websiteonchangehanler} className='m-1' type="text" />
        <button onClick={oninputehanler }  className='border m-2'>ADD</button>
        {/* <button onClick={()=>formhanler(inputeData)}>send</button> */}
        {/* <button onClick={click}  className='border m-2'>ADD</button> */}
    </div>



  )
}
