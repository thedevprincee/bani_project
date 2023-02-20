import React from 'react'
import Btn from './Button.styles'

const Button = ({icon, children}) => {
  return (
    <>
      <Btn>{icon} {children}</Btn>
    </>
  )
}

export default Button
