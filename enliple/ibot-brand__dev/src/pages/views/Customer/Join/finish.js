import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {MdCheckCircle} from 'react-icons/md'

import rem from '../../../../assets/styled/rem'
import ImgLogoDefault from '../../../../assets/images/main/logo_default.png'

const Wrap = styled.div`
  padding-top: 30px;
`

const Logo = styled.h2`
  display: block;
  width: 95px;
  height: 30px;
  margin: 0 auto;
  background-image: url(${ImgLogoDefault});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  font: 0/0 a;
`
const Title = styled.h3`
  margin-top: 30px;
  text-align: center;
  font-size: ${rem('26px')};
  font-weight: 400;
  strong {
    font-weight: 500;
  }
`
const Mark = styled.strong`
  color: #6e4eb1;
  font-weight: 500;
`
const Check = styled(MdCheckCircle)`
  margin-right: 5px;
  font-size: ${rem('32px')};
  vertical-align: -5px;
`
const Btns = styled.div`
  margin-top: 80px;
  text-align: center;
`
const Btn = styled(Link)`
  min-width: 200px;
  padding: 10px 25px;
  border-radius: 25px;
  background-color: #6e4eb1;
  color: #ffffff;
  font-size: ${rem('18px')};
  font-weight: 500;
  text-decoration: none;
`

const Finish = props => {
  return (
    <>
      <Wrap>
        <Logo>IBOT</Logo>
        <Title>
          <Mark>
            <Check />
            아이봇
          </Mark>
          <strong> 회원가입</strong>이 완료 되었습니다.
        </Title>
        <Btns>
          <Btn to={'/'}>메인으로 이동</Btn>
        </Btns>
      </Wrap>
    </>
  )
}

export default Finish
