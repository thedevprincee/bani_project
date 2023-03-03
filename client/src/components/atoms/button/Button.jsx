import React from 'react'
import Btn from './Button.styles'

const Button = ({icon, onclick, children}) => {
  return (
    <>
      <Btn onClick={()=>{ onclick() }}>{icon} {children}</Btn>
    </>
  )
}

export default Button
