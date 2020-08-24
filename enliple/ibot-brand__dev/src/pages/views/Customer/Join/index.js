import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import styled from 'styled-components'
import {connect} from 'react-redux'

import LinkTest from '../../LinkTest'
import rem from '../../../../assets/styled/rem'
import Terms from './terms'
import Form from './form'
import Finish from './finish'

const Wrap = styled.div``
const WrapInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 100px;
  @media ${props => props.theme.media_lg} {
    padding: 50px 20px;
  }
  @media ${props => props.theme.media_md} {
    padding: 30px 10px;
  }
`
const Header = styled.div`
  padding-bottom: 40px;
  border-bottom: 1px solid #cccccc;
  text-align: center;
  @media ${props => props.theme.media_md} {
    padding-bottom: 20px;
  }
`
const Title = styled.h2`
  font-size: ${rem('28px')};
  font-weight: 500;
`
const Step = styled.nav`
  padding: 50px 40px 0;
  @media ${props => props.theme.media_lg} {
    padding: 30px 20px 0;
  }
  @media ${props => props.theme.media_md} {
    padding: 20px 10px 0;
  }
`
const StepList = styled.ol`
  display: table;
  table-layout: fixed;
  width: 100%;
  text-align: center;
  counter-reset: step;
`

const StepItem = styled.li`
  display: table-cell;
  padding: 0 10px;
`

const StepItemBox = styled.div`
  position: relative;
  padding-top: 50px;
  color: ${props => (props.active ? '#8046cc' : '#cccccc')};
  font-size: ${rem('16px')};
  font-weight: 500;
  &::before,
  &::after {
    position: absolute;
    display: block;
  }
  &::before {
    content: '';
    left: 0;
    top: 14px;
    width: 100%;
    height: 3px;
    background-color: ${props => (props.active ? '#8046cc' : '#cccccc')};
  }
  &::after {
    counter-increment: step;
    content: counter(step, decimal-leading-zero);
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    top: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-left: -15px;
    background-color: ${props => (props.active ? '#8046cc' : '#cccccc')};
    color: #ffffff;
    font-size: ${rem('14px')};
    font-weight: 500;
    letter-spacing: -0.5px;
  }
`

const Contents = styled.div`
  padding: 50px 40px;
  @media ${props => props.theme.media_lg} {
    padding: 30px 20px;
  }
  @media ${props => props.theme.media_md} {
    padding: 20px 10px;
  }
`

const stepTitle = ['약관동의', '회원정보입력', '가입완료']

class Join extends React.PureComponent {
  constructor(props) {
    super(props)
    const {className} = this.props
    const {isLogged} = this.props.user
    this.state = {
      isLogged: isLogged,
      step: 1,
      agreement001: 'N',
      agreement002: 'N',
      agreement003: 'N',
    }
  }

  componentDidMount() {
    const {isLogged} = this.state
  }

  handleSetJoinData = (step, agreement001, agreement002, agreement003) => {
    this.setState({
      step,
      agreement001: agreement001 ? 'Y' : 'N',
      agreement002: agreement002 ? 'Y' : 'N',
      agreement003: agreement003 ? 'Y' : 'N',
    })
  }

  render() {
    const {isLogged, step, agreement001, agreement002, agreement003} = this.state

    console.log('%c 회원가입====', 'font-size:20px', this.state)
    if (isLogged) {
      return <Redirect to="/" />
    }
    return (
      <>
        <Wrap>
          <WrapInner>
            <Header>
              <Title>회원가입</Title>
            </Header>
            <Step>
              <StepList>
                {stepTitle.map((title, i) => {
                  return (
                    <StepItem key={i}>
                      <StepItemBox active={step == i + 1 ? 'active' : null}>{title}</StepItemBox>
                    </StepItem>
                  )
                })}
              </StepList>
            </Step>
            <Contents>
              {step == 1 && <Terms handleGetJoinData={this.handleSetJoinData} />}
              {step == 2 && (
                <Form
                  step={step}
                  agreement001={agreement001}
                  agreement002={agreement002}
                  agreement003={agreement003}
                  handleGetJoinData={this.handleSetJoinData}
                />
              )}
              {step == 3 && <Finish handleGetJoinData={this.handleSetJoinData} />}
            </Contents>
          </WrapInner>
        </Wrap>
      </>
    )
  }
}

export default connect(
  state => ({
    user: state.user,
    modal: state.modal,
  }),
  dispatch => ({
    onModalOpen: (modalProps, modalType) => {
      dispatch(modalOpen(modalProps, modalType))
    },
  })
)(Join)
