import React from 'react'

const Text = ({className, title, data}) => (
  <div>
    <h3>{title}</h3>
    <div className={className + ' dump'} >{data}</div>
  </div>
)

export default Text
