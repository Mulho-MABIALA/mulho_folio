import React, { useState } from 'react'

function Input() {
  const [name, setName] = useState('')

  const handleInputChange = (e) => {
    setName(e.target.value)
  }
  const handleReset = () => {
    setName('')
  }

  const handleSave = () => {
    // Here you can implement saving logic, e.g., send to server or store locally
    console.log('Saved name:', name)
  }
const isOverLimit = name.length > 10

  return (
    <div>
  <div style={{ padding: '16px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px', margin: '0 auto', marginTop: '50px' }}>
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
      style={{ padding: '8px', fontSize: '16px', marginRight: '8px' }}
    />
   <button onClick={handleReset} style={{ padding: '8px 16px', fontSize: '16px' }}>
    Reset
   </button>
    <button onClick={handleSave} style={{ padding: '8px 16px', fontSize: '16px', marginLeft: '8px' }}>
   Save
   </button>
  </div>
  <div>
    <span>Current name: {name}</span>
  </div>
  <div>
    <span style={ { color: isOverLimit ? 'red' : 'black' } }>
      nbre caractères: {name.length}
    </span>
    {
      isOverLimit &&
       <span style={{ color: 'red', marginLeft: '8px' }}> Attention vous qvavez atteint la limite!</span>
    }
  </div>
  <div>
    <h3>
      Noms sauvegardes
    </h3>
  </div>
    </div>
  )
}

export default Input