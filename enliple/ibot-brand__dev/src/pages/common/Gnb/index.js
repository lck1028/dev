import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {isMobile, isIE, isIOS} from 'react-device-detect'

import {API} from '../../../../src/common/services'
import {Bridge} from '../../../utils/bridgeLink'
import {NotoSans} from '../../../assets/styled/fonts'
import rem from '../../../assets/styled/rem'
import ImgIconStore from '../../../assets/images/main/icon_store.png'
import ImgIconStoreWhite from '../../../assets/images/main/icon_store_white.png'
import ImgIconAdmin from '../../../assets/images/main/icon_admin.png'
import ImgIconAdminWhite from '../../../assets/images/main/icon_admin_white.png'
import ImgIconNoticeWhite from '../../../assets/images/main/icon_notice_white.png'
import ImgIconNoticeDark from '../../../assets/images/main/icon_notice_dark.png'
import ImgIconEventWhite from '../../../assets/images/main/icon_event_white.png'
import ImgIconEventDark from '../../../assets/images/main/icon_event_dark.png'

const Wrap = styled.nav`
  position: fixed;
  right: ${props => (props.isMain ? (isIE ? '17px' : '8px') : '0')};
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  min-width: 90px;
  height: 100%;
  border-left: 1px solid ${props => (props.observeoverview ? '#8e8e8e' : '#9d9d9d')};
  background-color: ${props => (props.observeoverview ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0,0,0,0.4)')};
  color: #ffffff;
  z-index: 100;
  transition: background-color 0.3s ease-in-out 0s;
  @media ${props => props.theme.media_md} {
    flex: 0 0 auto;
    position: relative;
    left: auto;
    right: auto;
    top: auto;
    bottom: auto;
    display: block;
    height: auto;
    box-sizing: border-box;
    padding: 15px 15px 80px;
    border-left: none;
    background-color: ${props => (props.isMain ? 'transparent' : '#222222')};
  }
`

const Platform = styled.div`
  @media ${props => props.theme.media_md} {
    position: absolute;
    bottom: 15px;
    left: 15px;
    display: table;
    table-layout: fixed;
    width: ${isIOS ? 'calc(100%)' : 'calc(100% - 30px)'};
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const Store = styled.a`
  display: block;
  height: 90px;
  background-color: #3c1a7e;
  background-image: url(${ImgIconStore});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  font: 0/0 a;
  cursor: pointer;
  @media ${props => props.theme.media_md} {
    display: table-cell;
    height: 55px;
    background-color: transparent;
    background-image: url(${ImgIconStoreWhite});
  }
`
const Admin = styled.a`
  position: relative;
  display: block;
  box-sizing: border-box;
  height: 90px;
  padding-top: 60px;
  background-color: #ffc410;
  background-image: url(${ImgIconAdmin});
  background-position: 50% 18px;
  background-repeat: no-repeat;
  color: rgba(0, 0, 0, 0.4);
  font-size: ${rem('15px')};
  font-weight: 700;
  font-family: Roboto, '맑은 고딕', 'Malgun Gothic', '돋움', 'Dotum', sans-serif;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  @media ${props => props.theme.media_md} {
    display: table-cell;
    height: 55px;
    padding-top: 0;
    background-color: transparent;
    background-image: url(${ImgIconAdminWhite});
    background-position: 50% 50%;
    font: 0/0 a;
    &::before {
      content: '';
      position: absolute;
      left: -1px;
      top: 50%;
      display: block;
      width: 2px;
      height: 18px;
      margin-top: -9px;
      background-color: #555555;
    }
  }
`

const Infomation = styled.div`
  display: block;
  margin-top: 215px;
  @media ${props => props.theme.media_md} {
    display: block;
    width: 100%;
    height: 100%;
    margin-top: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
`
const InfomationItem = styled(Link)`
  ${NotoSans}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90px;
  border-bottom: 1px solid ${props => (props.observeoverview ? '#8e8e8e' : '#6b6b6b')};
  background-position: -500px -500px;
  background-repeat: no-repeat;
  color: ${props => (props.observeoverview ? '#ffffff' : '#474747')};
  font-size: ${rem('15px')};
  text-decoration: none;
  text-align: center;
  transition: color 0.3s ease-in-out 0s;
  &::before {
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    margin-bottom: 5px;
    background-image: inherit;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    transition: background-image 0.3s ease-in-out 0s;
  }
  &:first-child {
    border-top: 1px solid ${props => (props.observeoverview ? '#8e8e8e' : '#6b6b6b')};
  }
  @media ${props => props.theme.media_md} {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    width: 50%;
    height: auto;
    padding: 13px 5px;
    border-top: 1px solid #555555;
    border-bottom: 1px solid #555555;
    font-size: ${rem('16px')};
    font-weight: 500;
    &::before {
      display: none;
    }
    &::after {
      content: '';
      position: absolute;
      left: -1px;
      top: 50%;
      display: block;
      width: 2px;
      height: 18px;
      margin-top: -9px;
      background-color: #555555;
    }
    &:first-child {
      border-top: 1px solid #555555;
      &::after {
        display: none;
      }
    }
  }
`

const Notice = styled(InfomationItem)`
  background-image: url(${props => (props.observeoverview ? ImgIconNoticeWhite : ImgIconNoticeDark)});
`
const Event = styled(InfomationItem)`
  background-image: url(${props => (props.observeoverview ? ImgIconEventWhite : ImgIconEventDark)});
`

class Gnb extends React.PureComponent {
  constructor(props) {
    super(props)
    const {className, isMain} = this.props
    this.state = {
      className: className,
      observeOverview: false,
      isMain: isMain,
    }
  }

  handleGetEncData = async e => {
    let token = ''
    let result = ''

    if (this.props.user.oauthToken == '' || this.props.user.oauthToken == null) {
      let token = null
      let result = null
      return result
    } else {
      let token = this.props.user.oauthToken.data.token
      let result = await API.getEncData({accessToken: 'Bearer ' + token})
      return result
    }

    //console.log(result)
  }

  handleIStorelink = async e => {
    e.preventDefault()
    const result = await this.handleGetEncData()
    window.open(Bridge.store(result), '_blank', 'noopener,noreferrer')
  }
  handleAdminlink = async e => {
    e.preventDefault()
    const result = await this.handleGetEncData()
    window.open(Bridge.admin(result), '_blank', 'noopener,noreferrer')
  }

  componentDidMount() {
    this.setState({
      //destinationleave: this.props.destinationleave,
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.observeOverview !== this.props.observeoverview) {
      this.setState({
        observeOverview: this.props.observeoverview,
        //isLogged: this.props.user.isLogged,
      })
    }
  }

  render() {
    const {className, observeOverview, isMain} = this.state

    return (
      <>
        <Wrap as={this.props.as} className={className} observeoverview={observeOverview} isMain={isMain}>
          <Platform isMain={isMain}>
            <Store
              onClick={e => {
                this.handleIStorelink(e)
              }}
              title="새창"
            >
              I-Store
            </Store>
            <Admin
              onClick={e => {
                this.handleAdminlink(e)
              }}
              title="새창"
            >
              ibot Admin
            </Admin>
          </Platform>
          <Infomation observeoverview={observeOverview}>
            <Notice observeoverview={observeOverview ? 'true' : 'false'} to="/notice">
              공지사항
            </Notice>
            <Event observeoverview={observeOverview ? 'true' : 'false'} to="/event">
              이벤트
            </Event>
          </Infomation>
        </Wrap>
      </>
    )
  }
}

export default connect(state => ({
  user: state.user,
}))(Gnb)
