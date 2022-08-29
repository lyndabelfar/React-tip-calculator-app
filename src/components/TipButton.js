import React from 'react'

function TipButton({buttonValue, amount, setTipAmount, setTotalAmount,billValue, setInputError, persons}) {
    let percent = (buttonValue/100) *amount;
    const handleTipButton=()=>{
      if(billValue<0 || billValue ==0 || persons<0 || persons ==0){
        setInputError(true)
      }else{
        setInputError(false)
        setTipAmount(percent)
        setTotalAmount(amount+percent)
      }
        
    }

  return (
    <button className="tip-btn" onClick={handleTipButton}>%{buttonValue}</button>
  )
}

export default TipButton