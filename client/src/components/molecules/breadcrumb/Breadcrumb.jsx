import React from 'react'
import Button from '../../atoms/button/Button'
import Text from '../../atoms/text/Text'
import BreadcrumbWrapper, { CrumbButtonSection, CrumbTitle } from './Breadcrumb.styles'
import { useDispatch } from 'react-redux'
import { setBranchForm } from '../../../store/features/modalSlice'

const Breadcrumb = () => {
  const dispatch = useDispatch()
  const setBranchModal = ()=>{
     dispatch(setBranchForm({isModal: 'true', modalType: 'branch', modalTitle: 'New Branch'}))
  }
  const setVirtualModal = ()=>{
     dispatch(setBranchForm({isModal: 'true', modalType: 'virtual', modalTitle: 'Add Virtual Account'}))
  }
  return (
    <BreadcrumbWrapper>
      <CrumbTitle>
        <Text type="h5">Virtual Account Dashboard</Text>
      </CrumbTitle>
      <CrumbButtonSection>
        <Button onclick={setBranchModal}>Create New Branch</Button>
        <Button onclick={setVirtualModal}>Create Virtual Account</Button>
      </CrumbButtonSection>
    </BreadcrumbWrapper>
  )
}

export default Breadcrumb
