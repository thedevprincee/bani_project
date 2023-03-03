import React, { useState } from 'react'
import Text from '../../atoms/text/Text'
import CardWrapper,
    {
    CardHeader,
    CardBody,
    CardIcon
    } from './CardModal.styles'
import {SlClose} from 'react-icons/sl'
import { useDispatch } from 'react-redux'
import { setBranchForm } from '../../../store/features/modalSlice'
import { useSelector } from "react-redux";

const CardModal = ({title, children}) => {

  const isModal = useSelector((store)=>store.modal)
  const dispatch = useDispatch()
  
  return (
    <CardWrapper display={isModal}>
          <CardHeader>
            <Text type="h4">{title}</Text>
            <CardIcon><SlClose onClick={()=>{dispatch(setBranchForm("false"))}} /></CardIcon>
          </CardHeader>
          <CardBody>
            {children}
          </CardBody>
    </CardWrapper>
  )
}

export default CardModal
