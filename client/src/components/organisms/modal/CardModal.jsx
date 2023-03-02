import React, { useState } from 'react'
import Text from '../../atoms/text/Text'
import CardWrapper,
    {
    CardHeader,
    CardBody,
    CardIcon
    } from './CardModal.styles'
import {SlClose} from 'react-icons/sl'

const CardModal = ({title, display, children}) => {
    const [isModal, setIsModal] = useState(display)
  return (
    <CardWrapper display={isModal}>
          <CardHeader>
            <Text type="h4">{title}</Text>
            <CardIcon><SlClose onClick={()=>{setIsModal("false")}} /></CardIcon>
          </CardHeader>
          <CardBody>
            {children}
          </CardBody>
    </CardWrapper>
  )
}

export default CardModal
