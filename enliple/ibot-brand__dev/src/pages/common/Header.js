import React from 'react'
import {Link} from 'react-router-dom'

import {cBind} from '../../common/bind'
import {API} from '../../../src/common/services'

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props)
    cBind(this)
  }
  render() {
    return (
      <header>
        <Link to="/">
          <button>메인</button>
        </Link>
        {/* 테스트 */}
        <select onChange={e => this.onChange(e)}>
          <option>API 테스트</option>
          <option>로그인</option>
          <option>로그아웃</option>
          <option>(사용안함)마이페이지</option>
          <option>회원가입</option>
          <option>ID 찾기</option>
          <option>ID 인증번호 확인</option>
          <option>PW 찾기</option>
          <option>PW 인증번호 확인</option>
          <option>PW 변경</option>
          <option>공지사항 조회</option>
          <option>공지사항 상세조회</option>
          <option>이벤트 조회</option>
          <option>이벤트 상세조회</option>
          <option>적용사례</option>
          <option>(사용안함)Contact Us 목록</option>
          <option>어드민으로 이동</option>
          <option>스토어로 이동</option>
        </select>
        <button onClick={() => this.test('a')}>API test</button>
        인증번호:
        <input id="authNum" />
        {/* 테스트 */}
      </header>
    )
  }

  onChange(e) {
    this.setState({api: e.target.value})
  }

  async test(msg) {
    if (this.state) {
      var id = 'enliple'
      var pw = '11111111'
      var companyName = '인라이플'
      var companyNo = '000-00-00000'
      var email = 'ai@enliple.com'
      var userName = 'enliple'
      var userTel = '010-000-0000'
      var getNoticeListReqData = {
        search_type: 0, //0: 전체, 1: 제목
        sort_type: 0, //0: 최신순, 1: 조회순
        now_page: 1,
        page_size: 10,
      }
      var getNoticeDetailReqData = {
        idx: 1,
      }
      var getEventListReqData = {
        type: 'on', //on: 진행중인 이벤트, exp: 지난 이벤트
        now_page: 1,
        page_size: 10,
      }
      var getEventDetailReqData = {
        idx: 5,
      }
      var getCaseListReqData = {
        type: 'list', //list: 목록조회
        now_page: 1,
        page_size: 10,
      }
      var contactUsListReqData = {
        currentPage: 1,
        endDate: '2020-06-30T08:40:37.664Z',
        order: {},
        pageLen: 10,
        startDate: '2020-06-01T08:40:37.664Z',
        where: {},
      }

      if (this.state.api === 'ID 인증번호 확인' || this.state.api === 'PW 인증번호 확인' || this.state.api === 'PW 변경') {
        if (!document.getElementById('authNum').value) {
          alert('인증번호를 입력하세요')
          return
        }
      }

      if (this.state.api === '로그아웃' || this.state.api === '(사용안함)마이페이지') {
        if (!this.state.token) {
          alert('먼저 로그인 하세요.')
          return
        }
      }

      var result = null
      switch (this.state.api) {
        case '로그인':
          result = await API.ssoLogin({
            userId: 'enliple',
            userPass: 11111111,
          })

          break
        case '로그아웃':
          result = await API.ssoLogout('?token=' + this.state.token + '&userId=' + id)
          break
        case '(사용안함)마이페이지':
          result = await API.myPageMainInfo({accessToken: 'Bearer ' + this.state.token})
          break
        case '회원가입':
          result = await API.homepageuserInsert(
            '?agreement001=Y&agreement002=Y&agreement003=Y&companyAddress=' +
              '&companyName=' +
              companyName +
              '&companyNo=' +
              companyNo +
              '&email=' +
              email +
              '&recommendId=enliple&userId=brandtest02&userName=' +
              userName +
              '&userPass=b00000000&userTel=' +
              userTel +
              '&userType=4'
          )
          break
        case 'ID 찾기':
          result = await API.findId('?companyName=' + companyName + '&companyNo=' + companyNo + '&email=' + email)
          break
        case 'PW 찾기':
          result = await API.findPw('?email=' + email + '&userId=' + id)
          break
        case 'ID 인증번호 확인':
          result = await API.homeuserCheckAuthNum(
            '?authNumber=' +
              document.getElementById('authNum').value +
              '&companyName=' +
              companyName +
              '&companyNo=' +
              companyNo +
              '&email=' +
              email +
              '&userId='
          )
          break
        case 'PW 인증번호 확인':
          result = await API.homeuserCheckAuthNum(
            '?authNumber=' + document.getElementById('authNum').value + '&companyName=' + '&companyNo=' + '&email=' + email + '&userId=' + id
          )
          break
        case 'PW 변경':
          result = await API.changeUserPw('?authNumber=' + document.getElementById('authNum').value + '&userId=' + id + '&userPass=11111111')
          break
        case '공지사항 조회':
          result = await API.getNoticeList(getNoticeListReqData)
          break
        case '공지사항 상세조회':
          result = await API.getNoticeDetail(getNoticeDetailReqData)
          break
        case '이벤트 조회':
          result = await API.getEventList(getEventListReqData)
          break
        case '이벤트 상세조회':
          result = await API.getEventDetail(getEventDetailReqData)
          break
        case '적용사례':
          result = await API.getCaseList(getCaseListReqData)
          break
        case '(사용안함)Contact Us 목록':
          result = await API.contactUsList(contactUsListReqData)
          break
        case '어드민으로 이동':
          if (this.state.token) {
            result = await API.getEncData({accessToken: 'Bearer ' + this.state.token.data.token})
            console.log(result.enc)
            console.log('로그인 유저의 어드민으로 이동')
            window.open('http://192.168.150.152/view/bridge.html?encData=' + result.enc)
          } else {
            console.log('미로그인 유저의 어드민으로 이동')
            window.open('http://192.168.150.152')
          }
          break
        case '스토어로 이동':
          if (this.state.token) {
            result = await API.getEncData({accessToken: 'Bearer ' + this.state.token})
            console.log(result)
            console.log('로그인 유저의 스토어로 이동')
            window.open('http://192.168.150.152:7070/sc/login/bridge?enc_data=' + result.enc)
          } else {
            console.log('미로그인 유저의 스토어로 이동')
            window.open('http://192.168.150.152:7070/sc/shop/')
          }
          break
      }
      console.log('출력화면')
      console.log(result)
      if (result) {
        if (this.state.api === '로그인') {
          if (result) {
            this.setState({token: result})
          }
        }
        alert('성공! 콘솔로그 확인')
        console.log(result)
      }
    } else {
      alert('API를 선택하세요')
    }
  }
}
