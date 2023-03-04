import React from 'react'
import Button from '../../atoms/button/Button'
import Text from '../../atoms/text/Text'
import BreadcrumbWrapper, { CrumbButtonSection, CrumbTitle } from './Breadcrumb.styles'
import { useDispatch } from 'react-redux'
import { setBranchForm } from '../../../store/features/modalSlice'

const Breadcrumb = () => {
  const dispatch = useDispatch()
  const setBranchModal = ()=>{
     dispatch(setBranchForm("true"))
  }
  return (
    <BreadcrumbWrapper>
      <CrumbTitle>
        <Text type="h5">Virtual Account Dashboard</Text>
      </CrumbTitle>
      <CrumbButtonSection>
        <Button onclick={setBranchModal}>Create New Branch</Button>
        <Button>Create Virtual Account</Button>
      </CrumbButtonSection>
    </BreadcrumbWrapper>
  )
}

export default Breadcrumb
