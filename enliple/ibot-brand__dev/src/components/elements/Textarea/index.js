{
  /*
  <Textarea maxlength={200} defaultValue={this.state.textareaValue} onChange={e => this.handleChange(e)} />
  */
}
import React, {useState} from 'react'
import styled from 'styled-components'

const Wrap = styled.span`
  display: inline-block;
  width: 100%;
`
const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  min-height: 200px;
  padding: 20px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  resize: vertical;
`
const LengthBox = styled.span``
const Length = styled.span``
const MaxLength = styled.span``

const Textarea = props => {
  const {title, placeholder, readonly, maxlength, defaultValue} = props
  const [length, setLength] = useState(defaultValue.length)
  const hendleLength = e => {
    let length = e.target.value.length
    setLength(length)
  }

  return (
    <>
      <Wrap>
        <TextArea
          title={title}
          placeholder={placeholder}
          maxLength={maxlength}
          readonly={readonly}
          onChange={e => {
            props.onChange == undefined ? null : props.onChange(e)
            hendleLength(e)
          }}
          defaultValue={props.defaultValue}
        ></TextArea>
        {maxlength && (
          <LengthBox>
            <Length>{length}</Length>/ <MaxLength>{maxlength}</MaxLength>
          </LengthBox>
        )}
      </Wrap>
    </>
  )
}

export default Textarea
