import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import DateConverter from '../DateConverter'
import EmType from '../EmType'
import rem from '../../../assets/styled/rem'

const Wrap = styled.div`
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
`
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 15px 30px;
  width: 100%;
  border-top: 1px solid #cccccc;
  font-size: ${rem('14px')};
  &:first-child {
    border-top: none;
  }
  @media ${props => props.theme.media_md} {
    padding: 10px;
  }
`
const No = styled.b`
  flex: 0 0 auto;
  display: inline-block;
  padding-right: 25px;
  font-weight: 400;
`
const Title = styled(Link)`
  flex: 1 1 auto;
  display: inline-block;
  color: #111111;
  font-size: ${rem('16px')};
  font-weight: 400;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const Info = styled.div`
  flex: 0 0 auto;
`

const CreateDate = styled.span`
  display: inline-block;
  padding: 0 10px;
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

const OrderContents = props => {
  const {location, listUrl, children, prev_list, next_list} = props
  return (
    <>
      <Wrap>
        {prev_list == undefined ? (
          <Item>이전글이 없습니다.</Item>
        ) : (
          <Item>
            <No>이전글</No>
            <Title to={listUrl + '/' + prev_list.idx}>{prev_list.title ? prev_list.title : prev_list.name}</Title>
            <Info>
              <CreateDate>
                <CreateDateText>작성일</CreateDateText>
                <DateConverter date={prev_list.reg_dt} />
              </CreateDate>
              <View>
                <ViewText>조회수</ViewText>
                {prev_list.read_cnt}
              </View>
            </Info>
          </Item>
        )}
        {next_list == undefined ? (
          <Item>다음글이 없습니다.</Item>
        ) : (
          <Item>
            <No>다음글</No>
            <Title to={listUrl + '/' + next_list.idx}>{next_list.title ? next_list.title : next_list.name}</Title>
            <Info>
              <CreateDate>
                <CreateDateText>작성일</CreateDateText>
                <DateConverter date={next_list.reg_dt} />
              </CreateDate>
              <View>
                <ViewText>조회수</ViewText>
                {next_list.read_cnt}
              </View>
            </Info>
          </Item>
        )}
      </Wrap>
    </>
  )
}

export default OrderContents
