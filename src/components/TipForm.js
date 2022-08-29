import React from 'react'

function TipForm({amount, setTipAmount, setTotalAmount,customTip, setCustomTip}) {
    let percent = (customTip/100) *amount;
    
    const handleInputChange =(e)=>{
        setCustomTip(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setTipAmount(percent)
        setTotalAmount(amount+percent)
    }
    

  return (
    <form className='form-tip' onSubmit={handleSubmit}>
        <input type="text" placeholder='Custom' className='tip-input' value={customTip} onChange={handleInputChange} />
    </form>
  )
}

export default TipForm