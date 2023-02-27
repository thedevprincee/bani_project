import React from 'react'
import Button from '../../atoms/button/Button'
import Text from '../../atoms/text/Text'
import BreadcrumbWrapper, { CrumbButtonSection, CrumbTitle } from './Breadcrumb.styles'

const Breadcrumb = () => {
  return (
    <BreadcrumbWrapper>
      <CrumbTitle>
        <Text type="h5">Virtual Account Dashboard</Text>
      </CrumbTitle>
      <CrumbButtonSection>
        <Button>Create New Branch</Button>
        <Button>Create Virtual Account</Button>
      </CrumbButtonSection>
    </BreadcrumbWrapper>
  )
}

export default Breadcrumb
