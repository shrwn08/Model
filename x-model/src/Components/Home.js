import React, { useEffect, useState } from 'react'
import Form from './Form';

const Home = () => {
    const [formBtn,setFormBtn] = useState(false)
    const [details,setDetails] = useState({
        username:'',
        email:'',
        phoneNo : '',
        date : ''
    })
    useEffect(()=>{
        
        console.log(details)

    })

    return (
      <div className="App bg-white h-screen w-full flex flex-col items-center  gap-4 relative" >
        <h1 className='text-3xl font-bold'>User Details Modal</h1>
        <button className='p-2 bg-blue-500 text-white rounded-md' onClick={()=>setFormBtn(true)}>Open Form</button>
       {formBtn && <Form setDetails={setDetails} details={details}/>}
      </div>
    );
}

export default Home