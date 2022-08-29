import React from 'react'

function PersonsForm({setPersons, persons}) {
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
  return (
    
    <form onSubmit={handleSubmit}>
        <label>Persons:</label>
        <input
        type='number'
        value={persons}
        onChange={(e) => setPersons(e.target.value)}
            
        />
    </form>
  )

}

export default PersonsForm