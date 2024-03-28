import React from 'react'

export const Input = ({text, type, state, setState}) => {
  return (
    <div>
        <label>{text}:</label>
      <input
        type={type}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  )
}
