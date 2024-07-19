import React, { useEffect, useState } from "react";

const Form = ({ setDetails, details }) => {
  const [today,setToday] = useState('')
  const handleSubmitBtn = (event) => {
    event.preventDefault();
    if (details.phoneNo.length !== 10) {
      alert("Invaild phone number. Please enter a 10-digit phone number");
    }

    let date = new Date()
    let todate = date.getUTCDate()
    let month = date.getUTCMonth()
    let year = date.getUTCFullYear()
    setToday(`${year}-${month}-${todate}`)

    if(today < details.date){
        alert(`Invaild date of birth. Date of birth cannot be in the feture`)
    }
    
    setDetails({
      username: "",
      email: "",
      phoneNo: "",
      date: "",
    });
  };

  const hanleInputOnChange = (event) => {
    const { name, value } = event.target;
    setDetails((preDetails) => ({ ...preDetails, [name]: value }));
  };

  useEffect(()=>{
   
  },[])

  return (
    <div className="Modal bg-zinc-600/30 h-screen w-full flex justify-center items-center absolute top-0 left-0 ">
      <div className="modal-content">
        <form
          onSubmit={handleSubmitBtn}
          className="px-6 py-6 bg-white flex justify-center items-center flex-col gap-2 rounded-md"
        >
          <h1 className="text-3xl font-bold text-black">Fill Details</h1>
          <label className="font-semibold text-black">UserName:</label>
          <input
            type="text"
            className="w-96 h-8 border-2  rounded-md px-3"
            value={details.username}
            onChange={hanleInputOnChange}
            name="username"
            required
          />
          <label className="font-semibold text-black">Email Address:</label>
          <input
            type="email"
            className="w-96 h-8 border-2  rounded-md px-3"
            value={details.email}
            onChange={hanleInputOnChange}
            name="email"
            required
          />
          <label className="font-semibold text-black">Phone Number:</label>
          <input
            type="text"
            className="w-96 h-8 border-2  rounded-md px-3"
            value={details.phoneNo}
            onChange={hanleInputOnChange}
            name="phoneNo"
            required
          />
          <label className="font-semibold text-black">Date of Birth:</label>
          <input
            type="date"
            className="w-96 h-8 border-2  rounded-md px-3"
            value={details.date}
            onChange={hanleInputOnChange}
            name="date"
            required
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
