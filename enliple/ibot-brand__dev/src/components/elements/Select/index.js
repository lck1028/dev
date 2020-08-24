import React from 'react'
import styled from 'styled-components'

import rem from '../../../assets/styled/rem'

const Select = styled.select`
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  padding: 3px 10px;
  border: 1px solid #b9b9b9;
  border-radius: 5px;
  font-size: ${rem('14px')};
`

const SelectBox = React.forwardRef((props, ref) => {
  const {children} = props
  return (
    <>
      <Select {...props} ref={ref}>
        {children}
      </Select>
    </>
  )
})

export default SelectBox
