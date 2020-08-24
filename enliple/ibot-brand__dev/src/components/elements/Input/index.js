import React from 'react'
import styled from 'styled-components'

import rem from '../../../assets/styled/rem'

const Input = styled.input`
  display: inline-block;
  box-sizing: border-box;
  padding: 4px 10px;
  border: 1px solid #b9b9b9;
  border-radius: 5px;
  font-size: ${rem('14px')};
`

const FormInput = React.forwardRef((props, ref) => {
  return (
    <>
      <Input {...props} ref={ref} />
    </>
  )
})

export default FormInput

Input.defaultProps = {
  type: 'text',
}
