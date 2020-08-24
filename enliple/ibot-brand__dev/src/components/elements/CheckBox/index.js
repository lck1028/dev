{
  /*
<CheckBox
  id={'ID'} //string
  name={'NAME'} //string
  checked={state.key}
  onChange={this.handleCheckChange} // func
  required={true} // bool
  requiredText={'string'} //string
  label={'string'} //string
/>
*/
}

import React, {useState} from 'react'
import styled from 'styled-components'

import {NotoSans} from '../../../assets/styled/fonts'

const Wrap = styled.span`
  display: inline-block;
  width: 100%;
`
const Input = styled.input.attrs({type: 'checkbox'})``
const Label = styled.label``

const CheckBox = props => {
  const {id, name, label, title, readonly, requiredText, disabled, defaultChecked, required, checked, onChange} = props
  // const [length, setLength] = useState(defaultValue.length)
  // const hendleLength = e => {
  //   let length = e.target.value.length
  //   setLength(length)
  // }

  return (
    <>
      <Wrap>
        <Input
          title={title}
          id={id}
          name={name}
          defaultChecked={defaultChecked}
          readonly={readonly}
          disabled={disabled}
          required={required}
          checked={checked}
          onChange={e => {
            if (onChange == undefined) return
            onChange(e)
            requiredText ? e.target.setCustomValidity('') : null
          }}
          onInvalid={e => (requiredText ? (e.target.setCustomValidity(requiredText), console.log(e.target)) : null)}
          //onValid={e => e.target.setCustomValidity('')}
          //onValid={e => setCustomValidity('')}
        />
        <Label htmlFor={id}>{label}</Label>
      </Wrap>
    </>
  )
}

export default CheckBox
