import React, { useState } from 'react';


export function Input() {

  const [value, setValues] = useState('buenas');

  return (
    <div>
      <input value={value} onChange = {event => setValues(event.target.value)}></input>
      <p></p>
      <span>{value}</span>
    </div>
  )
}
