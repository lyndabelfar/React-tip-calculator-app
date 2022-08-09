import {useState} from 'react'

function Input(){
    const [value, setValue] = useState('')
    return(
        <form>
            <label>BILL</label>
            <input 
            className='input'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
        </form>
    )
}

export default Input