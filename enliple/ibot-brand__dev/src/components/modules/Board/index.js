import React from 'react'
import styled from 'styled-components'

import {NotoSans} from '../../../assets/styled/fonts'
import DateConverter from '../DateConverter'
import EmType from '../EmType'
import OrderContents from './OrderContents'
import rem from '../../../assets/styled/rem'

const Wrap = styled.article`
  padding: 20px;
  @media ${props => props.theme.media_md} {
    padding: 20px 0px;
  }
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 15px 30px;
  border-top: 1px solid #000000;
  font-size: ${rem('14px')};
  @media ${props => props.theme.media_md} {
    flex-wrap: wrap;
    justify-content: left;
    padding: 10px 5px;
  }
`
const Title = styled.h1`
  flex: 1 1 auto;
  font-size: ${rem('16px')};
  font-weight: 400;
`
const Info = styled.div`
  flex: 0 0 auto;
  @media ${props => props.theme.media_md} {
    padding-top: 10px;
    color: #cccccc;
  }
`
const CreateDate = styled.span`
  display: inline-block;
  padding: 0 10px;
  @media ${props => props.theme.media_md} {
    padding-left: 0;
  }
`
const CreateDateText = styled.span`
  display: inline-block;
  padding-right: 5px;
`
const View = styled.span`
  display: inline-block;
  padding: 0 10px;
`
const ViewText = styled.span`
  display: inline-block;
  padding-right: 5px;
`

const Body = styled.div`
  padding: 45px 30px;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  @media ${props => props.theme.media_md} {
    padding: 20px 10px;
  }
`
const Aside = styled.aside``
const Footer = styled.footer``

const UserComponent = styled.div`
  text-align: center;
`

const Board = props => {
  const {listUrl, children, className, result, prev_list, next_list} = props
  const {idx, em_type, content, reg_dt, read_cnt} = result

  return (
    <>
      <Wrap key={idx}>
        <Header>
          <Title>
            {result.title ? (
              <>
                <EmType type={em_type} /> {result.title}
              </>
            ) : (
              result.name
            )}
          </Title>
          <Info>
            <CreateDate>
              <CreateDateText>작성일</CreateDateText>
              <DateConverter format={'YYYY-MM-DD HH:mm:ss'} date={reg_dt} />
            </CreateDate>
            {read_cnt == null || read_cnt == undefined ? null : (
              <View>
                <ViewText>조회수</ViewText>
                {read_cnt + 1}
              </View>
            )}
          </Info>
        </Header>
        <Body>
          {children ? <UserComponent>{children}</UserComponent> : null}
          <div dangerouslySetInnerHTML={{__html: content}}></div>
        </Body>
        {prev_list == undefined && next_list == undefined ? null : (
          <Aside>
            <OrderContents listUrl={listUrl} prev_list={prev_list} next_list={next_list} />
          </Aside>
        )}
      </Wrap>
    </>
  )
}

export default Board

Board.defaultProps = {
  result: {},
}
