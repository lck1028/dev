import React from 'react'
import styled from 'styled-components'

const Type = styled.span`
  color: #6e4eb1;
`

const EmType = props => {
  switch (props.type) {
    case 0:
      return (
        <>
          <Type>[일반공지]</Type>
        </>
      )
      break
    case 1:
      return (
        <>
          <Type>[중요공지]</Type>
        </>
      )
      break
    default:
      return (
        <>
          <Type>[일반공지]</Type>
        </>
      )
      break
  }
}

export default EmType

EmType.defaultProps = {
  type: 0,
}
