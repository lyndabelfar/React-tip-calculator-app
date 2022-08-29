import React from 'react'

function TipButton({buttonValue, amount, setTipAmount, setTotalAmount}) {
    let percent = (buttonValue/100) *amount;
    const handleTipButton=()=>{
        setTipAmount(percent)
        setTotalAmount(amount+percent)
    }

  return (
    <button className="tip-btn" onClick={handleTipButton}>%{buttonValue}</button>
  )
}

export default TipButton