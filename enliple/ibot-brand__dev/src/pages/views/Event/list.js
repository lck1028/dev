//UI 변경 이슈가 있을수 잇으므로 header,footer 함꼐 관리함

import React from 'react'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'
import styled from 'styled-components'

import {API} from '../../../common/services'
import LinkTest from '../LinkTest'

import rem from '../../../assets/styled/rem'
import Table from '../../../components/elements/Table'
import Select from '../../../components/elements/Select'
import Input from '../../../components/elements/Input'

import DateConverter from '../../../components/modules/DateConverter'
import EmType from '../../../components/modules/EmType'
import Pagination from '../../../components/modules/Pagination'

const Wrap = styled.div``
const WrapInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 50px 60px 100px;
  @media ${props => props.theme.media_lg} {
    padding: 30px 100px 50px 20px;
  }
  @media ${props => props.theme.media_md} {
    padding: 20px 10px 30px;
  }
`
const Header = styled.div`
  padding-bottom: 40px;
  border-bottom: 1px solid #cccccc;
  text-align: left;
  @media ${props => props.theme.media_md} {
    padding-bottom: 20px;
  }
`
const Title = styled.h2`
  display: inline-block;
  margin-right: 30px;
  font-size: ${rem('28px')};
  font-weight: 500;
  @media ${props => props.theme.media_md} {
    margin-right: 10px;
    font-size: ${rem('18px')};
  }
`
const TitleSub = styled.p`
  display: inline-block;
  font-size: ${rem('18px')};
  @media ${props => props.theme.media_md} {
    font-size: ${rem('14px')};
  }
`

const List = styled.div`
  padding: 20px 20px;
  @media ${props => props.theme.media_lg} {
    padding: 15px 10px 40px;
  }
  @media ${props => props.theme.media_md} {
    padding: 10px 5px 20px;
  }
`

const EventList = styled.ul`
  display: flex;
  flex-flow: wrap;
`
const EventItem = styled.li`
  box-sizing: border-box;
  width: 33.3%;
  padding: 10px;
  @media ${props => props.theme.media_md} {
    width: 50%;
  }
  @media (max-width: 461px) {
    width: 100%;
    padding: 5px;
  }
`
const EventLink = styled(Link)`
  display: block;
  text-decoration: none;
`
const EventImgBox = styled.span`
  position: relative;
  display: block;
  &::before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: 52.6%;
  }
`
const EventImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  max-height: 100%;
`
const EventName = styled.strong`
  display: block;
  color: #000000;
  font-size: ${rem('14px')};
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  @media ${props => props.theme.media_md} {
    overflow: visible;
    text-overflow: clip;
    white-space: normal;
  }
`
const EventData = styled.span`
  display: block;
  color: #666666;
  font-size: ${rem('13px')};
`

class Event extends React.Component {
  constructor(props) {
    super(props)
    const {match, className, listUrl} = this.props
    this.state = {
      match: match,
      listUrl: listUrl,
      className: className,
      getEventListReqData: {
        type: 'on', //오픈이벤트 'on'//지난이벤트 'exp'
        now_page: 0,
        page_size: 10,
      },
      result: {},
      flagApi: false,
    }
  }

  async handleGetData(now_page) {
    let {getEventListReqData} = this.state
    let result = await API.getEventList(getEventListReqData)

    if (now_page) {
      _.set(getEventListReqData, 'now_page', now_page)
      result = await API.getEventList(getEventListReqData)
    }

    if (result.respcode === 0) {
      this.setState({
        result: result,
        flagApi: true,
      })
    } else if (result.respcode === 1) {
      console.error('params error')
      this.setState({
        result: result,
      })
    } else {
      console.error(result.respcode + 'server error')
    }
  }
  goPage = (now_page, pageSize) => {
    this.handleGetData(now_page)
  }

  componentDidMount() {
    this.handleGetData()
  }

  componentDidUpdate(prevProps, prevState) {}

  render() {
    const {match, listUrl, className, result} = this.state
    //console.log('%c render', 'color:#ffff00;font-size:30px')

    return (
      <>
        <Wrap>
          <WrapInner>
            <Header>
              <Title>이벤트</Title>
              <TitleSub>아이봇스토어 회원 누구나 참여할 수 있는 이벤트를 이용해 다양한 혜택을 누려보세요.</TitleSub>
            </Header>

            <List>
              <EventList>
                {result.lists && this.state.flagApi ? (
                  _.map(result.lists, (item, i) => {
                    const {idx, list_thum_img, name, reg_dt, start_date, end_date} = item
                    return (
                      <EventItem key={idx}>
                        <EventLink title={name} to={`${listUrl}/${idx}`}>
                          <EventImgBox>
                            <EventImg src={API.getStoreImgPath + list_thum_img} alt={name} />
                          </EventImgBox>
                          <EventName>{name}</EventName>
                          {end_date == null ? (
                            <EventData>무제한</EventData>
                          ) : (
                            <EventData>
                              <DateConverter date={end_date} />
                            </EventData>
                          )}
                        </EventLink>
                      </EventItem>
                    )
                  })
                ) : (
                  <li>로딩중</li>
                )}
                {result.lists && result.lists.length === 0 ? <li>이벤트가 없습니다.</li> : null}
              </EventList>
            </List>
            {result.lists && result.lists.length === 0 ? null : (
              <Pagination
                goPage={this.goPage}
                nowPage={result.nowPage}
                pageSize={result.pageSize}
                totalPage={result.totalPage}
                totalRecord={result.totalRecord}
              />
            )}
          </WrapInner>
        </Wrap>
      </>
    )
  }
}

const eventStateToProps = state => ({
  user: state.user,
  modal: state.modal,
})

export default Event
