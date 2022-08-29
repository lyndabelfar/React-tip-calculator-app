import React from 'react'
import {FaDollarSign} from "react-icons/fa";

function BillForm({billValue,setBillValue, inputError}) {
    const handleSubmit = (e)=>{
        e.preventDefault()
        
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>BILL</label>
        <div className="input-div">
          <span className="user-icon"><FaDollarSign/></span>
          <input 
          dir='rtl'
          type='number'
          className='input'
          value={billValue}
          onChange={(e) => setBillValue(e.target.value)}
          />
        </div>
        {inputError?<span className='error-span'>{billValue<0?"can't be negative":"can't be 0"}</span>:''}
        
    </form>
  )
}

export default BillForm;