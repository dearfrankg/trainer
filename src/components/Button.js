import React from 'react'

const Button = ({title, onClick: clickFn, classes}) => (
  <button
    className={classes || 'pure-button pure-button-primary'}
    onClick={clickFn}
    >{title}</button>
)

export default Button
