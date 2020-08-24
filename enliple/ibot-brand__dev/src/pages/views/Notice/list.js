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
const Form = styled.form`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
  text-align: center;
  @media ${props => props.theme.media_md} {
    flex-flow: wrap;
    padding: 20px 10px 15px;
  }
`
const FromTitle = styled.h3`
  display: inline-block;
  padding: 0 5px;
  font-size: ${rem('14px')};
  font-weight: 400;
  @media ${props => props.theme.media_md} {
    display: none;
  }
`
const FromSelect = styled.span`
  flex: 0 0 auto;
  display: inline-block;
  width: 80px;
  padding: 0 5px;
  @media ${props => props.theme.media_md} {
    display: block;
    width: 100%;
    margin-bottom: 5px;
  }
`
const FromInput = styled.span`
  flex: 1 0 auto;
  display: inline-block;
  width: 300px;
  max-width: 300px;
  padding: 0 5px;
  @media ${props => props.theme.media_md} {
    width: auto;
    max-width: none;
    padding-left: 0;
  }

  & > input {
    width: 100%;
  }
`
const BtnSearch = styled.button`
  flex: 0 0 auto;
  padding: 5px 20px 6px;
  border-radius: 20px;
  background-color: #eeeeee;
`

const List = styled.div`
  padding: 20px 40px;
  @media ${props => props.theme.media_lg} {
    padding: 15px 20px 40px;
  }
  @media ${props => props.theme.media_md} {
    padding: 10px 10px 20px;
  }
`

const NoticeTable = styled(Table)`
  table-layout: fixed;
  @media ${props => props.theme.media_md} {
    colgroup {
      display: none;
    }
    thead {
      display: none;
    }
    tbody {
      display: block;
    }
    tr {
      position: relative;
      display: block;
      margin-top: -1px;
    }
  }
`
const TdIdx = styled.td`
  @media ${props => props.theme.media_md} {
    display: none;
  }
`
const TdTitle = styled.td`
  && {
    padding-left: 20px;
    text-align: left;
  }
  @media ${props => props.theme.media_md} {
    && {
      display: block;
      padding: 0;
    }
  }
`
const TdDate = styled.td`
  @media ${props => props.theme.media_md} {
    && {
      position: absolute;
      left: 0;
      bottom: 5px;
      display: block;
      box-sizing: border-box;
      padding: 0 5px;
      border: none;
      color: #cccccc;
      font-size: ${rem('12px')};
      text-align: left;
      pointer-events: none;
    }
  }
`
const TdCount = styled.td`
  @media ${props => props.theme.media_md} {
    display: none;
  }
`
const LinkDetaile = styled(Link)`
  display: block;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  @media ${props => props.theme.media_md} {
    padding: 10px 5px 24px 5px;
    overflow: visible;
    text-overflow: clip;
    white-space: normal;
  }
`

class Notice extends React.Component {
  constructor(props) {
    super(props)
    const {match, className, listUrl} = this.props
    this.state = {
      match: match,
      listUrl: listUrl,
      className: className,
      getNoticeListReqData: {
        search_type: 0, //0: 전체, 1: 제목
        sort_type: 0, //0: 최신순, 1: 조회순
        now_page: 1,
        page_size: 10,
        keyword: '',
      },
      result: {},
      flagApi: false,
    }
  }

  async handleGetData(now_page) {
    let {getNoticeListReqData} = this.state

    let result = await API.getNoticeList(getNoticeListReqData)

    if (now_page) {
      _.set(getNoticeListReqData, 'now_page', now_page)
      result = await API.getNoticeList(getNoticeListReqData)
    }

    if (result.respcode === 0) {
      //console.log('성공!')
      this.setState({
        result: result,
        flagApi: true,
      })
      console.log(this.state.result)
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
    //this.
    this.handleGetData(now_page)
  }

  handleSearchType = e => {
    let {getNoticeListReqData} = this.state
    let val = Number(e.target.value)
    _.set(getNoticeListReqData, 'search_type', val)
  }
  handleKeyword = e => {
    let {getNoticeListReqData} = this.state
    let val = e.target.value
    _.set(getNoticeListReqData, 'keyword', val)
  }
  handleSubmit = e => {
    this.handleGetData(1)
    e.preventDefault()
  }

  componentDidMount() {
    this.handleGetData()
  }

  componentDidUpdate(prevProps, prevState) {}

  render() {
    const {match, listUrl, className, result} = this.state
    //    console.log('%c render', 'color:#ffff00;font-size:30px')
    return (
      <>
        <Wrap>
          <WrapInner>
            <Header>
              <Title>공지사항</Title>
              <TitleSub>아이봇스토어의 새로운 소식을 알려드립니다.</TitleSub>
            </Header>
            <Form onSubmit={e => this.handleSubmit(e)}>
              <FromTitle>공지사항 검색</FromTitle>
              <FromSelect>
                <Select onChange={e => this.handleSearchType(e)}>
                  <option value={0}>전체</option>
                  <option value={1}>제목</option>
                  <option value={2}>내용</option>
                </Select>
              </FromSelect>
              <FromInput>
                <Input type="text" placeholder={'검색어를 입력해주세요.'} onChange={e => this.handleKeyword(e)} />
              </FromInput>
              <BtnSearch type="button" onClick={e => this.handleSubmit(e)}>
                조회
              </BtnSearch>
            </Form>
            <List>
              <NoticeTable caption={'공지사항 리스트'}>
                <colgroup>
                  <col width={'100px'} />
                  <col />
                  <col width={'100px'} />
                  <col width={'80px'} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">제목</th>
                    <th scope="col">작성일</th>
                    <th scope="col">조회수</th>
                  </tr>
                </thead>
                <tbody>
                  {result.lists && this.state.flagApi ? (
                    _.map(result.lists, (item, i) => {
                      const {idx, title, reg_dt, read_cnt, em_type} = item
                      return (
                        <tr key={idx}>
                          <TdIdx>{result.totalRecord - ((result.nowPage - 1) * result.pageSize + i)}</TdIdx>
                          <TdTitle>
                            <LinkDetaile title={title} to={`${listUrl}/${idx}`}>
                              <EmType type={em_type} /> {title}
                            </LinkDetaile>
                          </TdTitle>
                          <TdDate>
                            <DateConverter date={reg_dt} />
                          </TdDate>
                          <TdCount>{read_cnt}</TdCount>
                        </tr>
                      )
                    })
                  ) : (
                    <tr>
                      <td colSpan="4">로딩중</td>
                    </tr>
                  )}
                  {result.lists && result.lists.length === 0 ? (
                    <tr>
                      <td colSpan="4">검색결과가 없습니다.</td>
                    </tr>
                  ) : null}
                </tbody>
              </NoticeTable>
            </List>
            <Pagination
              goPage={this.goPage}
              nowPage={result.nowPage}
              pageSize={result.pageSize}
              totalPage={result.totalPage}
              totalRecord={result.totalRecord}
            />
          </WrapInner>
        </Wrap>
      </>
    )
  }
}

const noticeStateToProps = state => ({
  user: state.user,
  modal: state.modal,
})

export default Notice
