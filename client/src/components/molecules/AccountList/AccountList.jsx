import React from 'react'
import { ListHeadItem, ListWrapper } from './AccountListStyled'
import ListData from './ListData'

const AccountList = () => {
  return (
    <>
        <ListWrapper>
            <ListHeadItem>
                Transaction Details
            </ListHeadItem>
            <ListHeadItem>
                Amount
            </ListHeadItem>
            <ListHeadItem>
                Date
            </ListHeadItem>
            <ListHeadItem/>
        </ListWrapper>
        <ListWrapper>
            <ListData/>
        </ListWrapper>
    </>
  )
}

export default AccountList