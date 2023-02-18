import React from 'react'
import SkeletonWrapper from './Skeleton.style'

const Skeleton = ({type, children}) => {
  return (
    <SkeletonWrapper type="thumbnail">{children}</SkeletonWrapper>
  )
}

export default Skeleton
