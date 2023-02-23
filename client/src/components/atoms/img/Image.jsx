import React from 'react'
import Img from './Image.styles'

const Image = ({src, width}) => {
  return (
    <>
      <Img src={src} width={width} />
    </>
  )
}

export default Image
