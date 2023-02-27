import React from 'react'
import { StyledListData } from './AccountListStyled'
import {FaChevronRight} from 'react-icons/fa'
const ListData = () => {
  return (
    <>
        <StyledListData>
            Olaoluwa S.
        </StyledListData>
        <StyledListData>
            100,000
        </StyledListData>
        <StyledListData>
            Olaoluwa S.
        </StyledListData>
        <StyledListData>
            <FaChevronRight/>
        </StyledListData>
    </>
  )
}

export default ListData