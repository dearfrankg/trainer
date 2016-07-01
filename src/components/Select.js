import React from 'react'

const Select = ({title, options, selected, onChange: actionFn}) => (
  <div>
    <label><strong>{title}</strong></label>
    <select
      onChange={(e) => {
        actionFn(options.indexOf(e.target.value))
      }}
      >
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
