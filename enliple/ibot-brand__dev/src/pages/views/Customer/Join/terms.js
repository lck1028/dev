import React from 'react'
import styled from 'styled-components'

import rem from '../../../../assets/styled/rem'
import Textarea from '../../../../components/elements/Textarea'
import CheckBox from '../../../../components/elements/CheckBox'
import ImgBlit from '../../../../assets/images/common/ico_blit.png'

import {TermService, TermPrivacy, TermMarketing} from './TermsTemplate'

const Wrap = styled.div``
const Form = styled.form`
  font-family: initial;
`
const Section = styled.div`
  padding: 40px 0;
  @media ${props => props.theme.media_md} {
    padding: 20px 0;
  }
`
const Title = styled.div`
  position: relative;
  display: block;
  padding-left: 25px;
  font-size: ${rem('16px')};
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 4px;
    display: block;
    width: 16px;
    height: 19px;
    background-image: url(${ImgBlit});
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
`
const ContentsBox = styled.div`
  min-height: 150px;
  height: 150px;
  margin-top: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  overflow-y: auto;
  resize: vertical;
`
const Contents = styled.div`
  padding: 20px;
  white-space: pre-line;
  word-break: keep-all;
  table {
    table-layout: fixed;
    width: 100%;
    th,
    td {
      padding: 14px 10px;
      border-top: 1px solid #cccccc;
      border-bottom: 1px solid #cccccc;
      font-size: ${rem('14px')};
      font-weight: 400;
      text-align: center;
    }
    th {
      border-color: #000000;
    }
  }
`
const Check = styled.div`
  margin-top: 10px;
  text-align: right;
`
const Btns = styled.div`
  margin-top: 20px;
  text-align: center;
`
const Btn = styled.button`
  min-width: 200px;
  padding: 10px 20px;
  border-radius: 25px;
  background-color: #6e4eb1;
  color: #ffffff;
  font-size: ${rem('18px')};
  font-weight: 500;
`

class Temrs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      nextStep: 2,
      agreement001: false,
      agreement002: false,
      agreement003: false,
    }
  }

  handleSubmit = () => {
    const {handleGetJoinData} = this.props
    const {nextStep, agreement001, agreement002, agreement003} = this.state

    console.log('서브밋')
    handleGetJoinData(nextStep, agreement001, agreement002, agreement003)
  }

  handleChange = e => {
    this.setState({
      textareaValue: e.target.value,
    })
  }
  handleCheckChange = e => {
    const name = e.target.name
    this.setState({
      [name]: !this.state[name],
    })
  }

  render() {
    return (
      <>
        <Wrap>
          <Form
            method={'POST'}
            onSubmit={e => {
              e.preventDefault()
              this.handleSubmit()
            }}
          >
            <Section>
              <Title>Ibot 서비스 이용약관 (필수)</Title>
              <ContentsBox>
                <Contents dangerouslySetInnerHTML={{__html: TermService}} />
              </ContentsBox>
              <Check>
                <CheckBox
                  id={'TermService'}
                  name={'agreement001'}
                  checked={this.state.agreement001}
                  onChange={this.handleCheckChange}
                  required={true}
                  requiredText={'Ibot 서비스 이용약관에 동의하셔야합니다.'}
                  label={'위 내용을 충분히 숙지하였으며, 이에 동의합니다.'}
                />
              </Check>
            </Section>
            <Section>
              <Title>개인보호 수집 및 이용동의 (필수)</Title>
              <ContentsBox>
                <Contents dangerouslySetInnerHTML={{__html: TermPrivacy}} />
              </ContentsBox>
              <Check>
                <CheckBox
                  required={true}
                  id={'TermPrivacy'}
                  name={'agreement002'}
                  //checked={this.state.agreement002}
                  onChange={this.handleCheckChange}
                  required={true}
                  requiredText={'개인보호 수집 및 이용동의에 동의하셔야합니다.'}
                  label={'위 내용을 충분히 숙지하였으며, 이에 동의합니다.'}
                />
              </Check>
            </Section>
            <Section>
              <Title>마케팅 활용 동의 (선택)</Title>
              <ContentsBox>
                <Contents dangerouslySetInnerHTML={{__html: TermMarketing}} />
              </ContentsBox>
              <Check>
                <CheckBox
                  id={'TermMarketing'}
                  name={'agreement003'}
                  checked={this.state.agreement003}
                  onChange={this.handleCheckChange}
                  label={'위 내용을 충분히 숙지하였으며, 이에 동의합니다.'}
                />
              </Check>
            </Section>

            <Btns>
              <Btn type={'submit'}>동의 후 다음단계</Btn>
            </Btns>
          </Form>
        </Wrap>
      </>
    )
  }
}

export default Temrs
