import React from 'react'

const Select = ({title, options, selected}) => (
  <div>
    <label><strong>{title}</strong></label>
    <select>
      {options.map((o, i) => (
        <option
          key={i}
          classname={(i === selected ? 'selected' : '')}
          >{o}</option>
      ))}
    </select>
  </div>
)

export default Select
