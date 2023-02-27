import React from 'react'
import { ListHeadItem, ListWrapper, ScrollableWrapper } from './AccountListStyled'
import ListData from './ListData'

const AccountList = () => {
  return (
    <ScrollableWrapper>
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
            {
                [...Array(5).keys()].map(i =>  <ListData key={i}/>)
            }
            
        </ListWrapper>
    </ScrollableWrapper>
  )
}

export default AccountList