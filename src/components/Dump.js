import React from 'react'

const Dump = ({title, data}) => (
  <div>
    <h3>{title}</h3>
    <div className='dump'><pre>{JSON.stringify(data, null, 2)}</pre></div>
  </div>
)

export default Dump
