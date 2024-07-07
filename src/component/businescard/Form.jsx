import React from 'react'

export default function Form() {




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




    const onkeydownhanler = (()=>{
        
        if(
            titleinput != '' &&  numberinput != '' && addressinput != '' && websiteinput != ''
        ){
            setdata([
                ...data,
                {
                    title : titleinput ,
                    number : numberinput,
                    address : addressinput,
                    website : websiteinput,
                }
            ]),

            settitleinput ('')
            setnumberinput ('')
            setaddressinput ('')
            setwebsiteinput ('')
        }
        

    })

    
  return (


    <div className="flex flex-col  border w-1/4 h-screen p-5 m-5">
        <input value={titleinput} placeholder='Title' onChange={titleonchangehanler} className='m-1' type="text" />
        <input value={numberinput} placeholder='Number' onChange={numberonchangehanler} className='m-1' type="text" />
        <input value={addressinput} placeholder='Address' onChange={addressonchangehanler} className='m-1' type="text" />
        <input value={websiteinput} placeholder='Website' onChange={websiteonchangehanler} className='m-1' type="text" />
        <button onClick={onkeydownhanler}  className='border m-2'>ADD</button>
    </div>



  )
}
