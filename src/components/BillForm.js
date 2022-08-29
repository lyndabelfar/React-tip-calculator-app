import React from 'react'

function BillForm({billValue,setBillValue}) {
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>BILL</label>
        <input 
        type='number'
        className='input'
        value={billValue}
        onChange={(e) => setBillValue(e.target.value)}
        />
              
    </form>
  )
}

export default BillForm;