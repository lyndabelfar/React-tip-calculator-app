import React from 'react'

function ResetButton({setTotalAmount, setTipAmount}) {
    const handleResetBtn=()=>{
        setTotalAmount(0)
        setTipAmount(0)

    }
  return (
    <button className='reset-btn' onClick={handleResetBtn}>RESET</button>
  )
}

export default ResetButton