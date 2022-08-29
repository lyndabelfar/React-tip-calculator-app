import React from 'react'
import {FaUserAlt}  from "react-icons/fa";

function PersonsForm({setPersons, persons,inputError}) {
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
  return (
    
    <form onSubmit={handleSubmit}>
        <label>Number Of People</label>
        <div className="input-div">
          <span className="user-icon"><FaUserAlt/></span>
          <input
          type='number'
          dir='rtl'
          value={persons}
          onChange={(e) => setPersons(e.target.value)}
        
          />
        </div>
        {inputError?<span className='error-span'>{persons<0?"can't be negative":"can't be 0"}</span>:''}
    </form>
  )

}

export default PersonsForm