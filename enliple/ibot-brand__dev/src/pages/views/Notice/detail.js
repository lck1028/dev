import React from 'react'
import {Link, withRouter, Redirect} from 'react-router-dom'
import _ from 'lodash'
import styled from 'styled-components'

import {API} from '../../../common/services'
import LinkTest from '../LinkTest'
import rem from '../../../assets/styled/rem'
import Board from '../../../components/modules/Board'

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
const Detail = styled.div`
  margin-top: 20px;
  @media ${props => props.theme.media_md} {
    margin-top: 0px;
  }
`

const Btns = styled.div`
  margin-top: 20px;
  text-align: center;
`
const Btn = styled(Link)`
  display: inline-block;
  min-width: 120px;
  margin: 0 5px;
  padding: 10px 20px;
  border-radius: 25px;
  background-color: #6e4eb1;
  color: #ffffff;
  font-size: ${rem('18px')};
  font-weight: 500;
  text-decoration: none;
`

class NoticeDetail extends React.PureComponent {
  constructor(props) {
    super(props)
    const {location, match, className, listUrl} = this.props
    this.state = {
      className: className,
      listUrl: listUrl,
      location: location,
      match: match,
      getNoticeDetailReqData: {
        idx: match.params.id,
      },
      result: {},
      prev_list: {},
      next_list: {},
      redirect: false,
    }
  }

  async componentDidMount() {
    //console.log('%c componentDidMount', 'color:#ff00ff;font-size:20px')
    const {getNoticeDetailReqData} = this.state
    const result = await API.getNoticeDetail(getNoticeDetailReqData)

    this.setState({
      result: result,
      prev_list: result.prev_list,
      next_list: result.next_list,
    })
    //    console.log(this.state.result)
    if (result.idx == undefined) {
      this.setState({
        redirect: true,
      })
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const {location, match, className} = this.props
    //console.log('%c componentDidUpdate', 'color:#ff0000;font-size:20px')
    if (prevProps.match.params.id != this.props.match.params.id) {
      this.setState({
        match: match,
        getNoticeDetailReqData: {
          idx: match.params.id,
        },
      })
      const result = await API.getNoticeDetail({
        idx: match.params.id,
      })
      this.setState({
        result: result,
        prev_list: result.prev_list,
        next_list: result.next_list,
      })
    }
  }
  render() {
    const {listUrl, className, result, prev_list, next_list, redirect} = this.state
    const {idx, em_type, title, content, reg_dt, read_cnt} = this.state.result

    if (redirect) {
      return <Redirect to={listUrl} />
    }
    return (
      <>
        <Wrap>
          <WrapInner>
            <Header>
              <Title>공지사항</Title>
              <TitleSub>아이봇스토어의 새로운 소식을 알려드립니다.</TitleSub>
            </Header>
            <Detail>
              <Board listUrl={listUrl} result={result} next_list={next_list} prev_list={prev_list}></Board>
              <Btns>
                <Btn to={listUrl}>목록</Btn>
              </Btns>
            </Detail>
          </WrapInner>
        </Wrap>
      </>
    )
  }
}

const NoticeWithRouter = withRouter(NoticeDetail)

export default NoticeWithRouter
