import React from 'react'
import {Link, withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'
import styled from 'styled-components'

import {API} from '../../../common/services'
import {modalOpen, modalClose} from '../../../redux/actions'
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

class EventDetail extends React.PureComponent {
  constructor(props) {
    super(props)
    const {location, match, className, listUrl, user} = this.props
    this.state = {
      className: className,
      listUrl: listUrl,
      location: location,
      match: match,
      isLogged: user.isLogged,
      getEventDetailReqData: {
        idx: match.params.id,
        user_id: user.isLogged ? user.userName : null,
      },
      result: {},
      prev_list: {},
      next_list: {},
      redirect: false,
      redirectUrl: location.pathname,
    }
  }

  async componentDidMount() {
    //console.log('%c componentDidMount', 'color:#ff00ff;font-size:20px')
    const {onModalOpen, onModalClose} = this.props
    const {getEventDetailReqData} = this.state
    const result = await API.getEventDetail(getEventDetailReqData)
    console.log('%c EventDetail', 'font-size:40px')
    console.log(result)
    this.setState({
      result: result,
      prev_list: result.prev_list,
      next_list: result.next_list,
    })

    if (result.idx == undefined) {
      //url 체크
      this.setState({
        redirect: true,
      })
    }
    if (result.type == 'exp') {
      //종료된 이벤트
      onModalOpen(
        {
          isOpen: true,
        },
        {type: 'alert', title: '안내', description: '종료된 이벤트 입니다.'}
      )
      onModalClose({
        cbConfirm: () => {
          this.setState({
            redirect: true,
          })
        },
        cbCancel: () => {
          this.setState({
            redirect: true,
          })
        },
      })
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const {location, match, className} = this.props
    //console.log('%c componentDidUpdate', 'color:#ff0000;font-size:20px')
    if (prevProps.match.params.id != this.props.match.params.id) {
      this.setState({
        match: match,
        getEventDetailReqData: {
          idx: match.params.id,
        },
      })
      const result = await API.getEventDetail({
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
    const {listUrl, className, result, prev_list, next_list, redirect, redirectUrl, isLogged} = this.state
    const {idx, em_type, title, content, reg_dt, read_cnt} = this.state.result

    if (redirect) {
      return <Redirect to={listUrl} />
    }
    return (
      <>
        <Wrap>
          <WrapInner>
            <Header>
              <Title>이벤트</Title>
              <TitleSub>아이봇스토어 회원 누구나 참여할 수 있는 이벤트를 이용해 다양한 혜택을 누려보세요.</TitleSub>
            </Header>
            <Detail>
              <Board listUrl={listUrl} result={result}>
                {result.detail_link_url ? (
                  <>
                    {!isLogged ? (
                      <Link to={{pathname: '/login', state: {redirect: redirectUrl}}}>
                        <img src={API.getStoreImgPath + result.detail_img} alt="" />
                      </Link>
                    ) : result.eventCnt !== null || result.eventCnt > 0 ? (
                      // 이벤트 참여 함
                      <img
                        src={API.getStoreImgPath + result.detail_img}
                        onClick={e => {
                          this.props.onModalOpen(
                            {
                              isOpen: true,
                            },
                            {type: 'alert', title: '안내', description: '이미 참여 하신 이벤트 입니다.'}
                          )
                        }}
                        alt=""
                      />
                    ) : (
                      // 이벤트 참여 안함
                      <a href={`${result.detail_link_url}`} target="_blank" title="새창">
                        <img src={API.getStoreImgPath + result.detail_img} alt="" />
                      </a>
                    )}
                  </>
                ) : (
                  <img src={API.getStoreImgPath + result.detail_img} alt="" />
                )}
              </Board>
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

const EventWithRouter = withRouter(EventDetail)
const stateToProps = state => ({
  modal: state.modal,

  user: state.user,
})
const dispatchToProps = dispatch => ({
  onModalOpen: (modalProps, modalType) => dispatch(modalOpen(modalProps, modalType)),
  onModalClose: modalProps => {
    dispatch(modalClose(modalProps))
  },
})
export default connect(stateToProps, dispatchToProps)(EventWithRouter)
