import React from 'react'

const Text = ({title, data}) => (
  <div>
    <h3>{title}</h3>
    <div className='dump' >{data}</div>
  </div>
)

export default Text
