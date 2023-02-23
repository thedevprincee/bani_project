import React from 'react'
import BadgeWrapper from './Badge.styles'

const Badge = ({icon, title, bgcolor, color}) => {
  return (
    <BadgeWrapper color={color} bgcolor={bgcolor}>
        {icon}
        {title}
    </BadgeWrapper>
  )
}

export default Badge
