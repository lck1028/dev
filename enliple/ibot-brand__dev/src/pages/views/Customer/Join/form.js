import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {MdCheckCircle, MdCancel} from 'react-icons/md'

import {modalOpen, modalClose} from '../../../../redux/actions'
import eConst from '../../../../../src/common/constants'
import {API} from '../../../../../src/common/services'

import validCheckCompanyNo from '../../../../utils/VaildComponyNo'
import loadScript from '../../../../utils/loadScript'

import rem from '../../../../assets/styled/rem'
import Input from '../../../../components/elements/Input'

const Wrap = styled.div``
const WrapInner = styled.div``
const FormBox = styled.form`
  text-align: center;
`
const Group = styled.div`
  display: inline-table;
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
`
const Row = styled.div`
  display: table-row;
`
const Cell = styled.div`
  display: table-cell;
  padding: 10px 20px;
  vertical-align: top;
  text-align: left;
  @media ${props => props.theme.media_md} {
    display: block;
    padding: 5px 10px;
  }
`
const CellTitle = styled(Cell)`
  min-width: 120px;
  font-size: ${rem('18px')};
  @media ${props => props.theme.media_md} {
    padding-top: 20px;
  }
`
const CellContents = styled(Cell)``

const Mark = styled.mark`
  color: #ff0000;
  font: 0/0 a;
  &::before {
    content: '*';
    display: inline-block;
    margin-left: 5px;
    font-size: ${rem('14px')};
    line-height: 1.4;
  }
`

const Label = styled.label`
  display: inline-block;
`

const InputWrap = styled.span`
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
`
const InputBox = styled.span`
  position: relative;
  display: block;
`
const Check = styled.span`
  display: none;
  padding-left: 5px;
  font-size: ${rem('24px')};
  vertical-align: middle;
`
const CheckSuccess = styled(MdCheckCircle)`
  display: none;
`
const CheckFail = styled(MdCancel)`
  display: none;
`

const InputValid = styled(Input)`
  width: calc(100% - 30px);
  max-width: 370px;
  vertical-align: middle;
  &:focus ~ ${Check} {
    display: inline-block;
  }
  &:valid ~ ${Check} {
    display: inline-block;
    ${CheckSuccess} {
      display: block;
    }
  }
  &:invalid ~ ${Check} {
    ${CheckFail} {
      display: block;
    }
  }
  @media ${props => props.theme.media_md} {
    max-width: none;
  }
`
const ZipCode = styled(InputValid)`
  max-width: 80px;
  margin-right: 10px;
  @media ${props => props.theme.media_md} {
    width: 80px;
  }
`
const AddresssBase = styled(InputValid)`
  max-width: 280px;
  @media ${props => props.theme.media_md} {
    width: calc(100% - 90px);
  }
`
const AddresssDetaile = styled(InputValid)`
  margin-top: 10px;
  @media ${props => props.theme.media_md} {
    width: 100%;
  }
`

const RequiredText = styled.small`
  position: absolute;
  left: 0;
  bottom: calc(100% + 10px);
  display: none;
  max-width: 300px;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  border-radius: 5px;
  background-color: #ffffff;
  color: #ff0000;
  z-index: 1;
  @media ${props => props.theme.media_md} {
    left: auto;
    right: 30px;
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
  }
  &::before {
    left: 20px;
    top: calc(100% + 1px);
    border-top: 6px solid #cccccc;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
    @media ${props => props.theme.media_md} {
      left: auto;
      right: 20px;
    }
  }
  &::after {
    left: 20px;
    top: 100%;
    @media ${props => props.theme.media_md} {
      left: auto;
      right: 20px;
    }
    border-top: 6px solid #ffffff;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
  }
  ${InputValid}:focus ~ & {
    display: block;
  }
`
const BtnAddressSearch = styled.button`
  display: inline-block;
  margin-left: 10px;
  padding: 6px 10px 5px;
  border-radius: 5px;
  background-color: #8bd5e5;
  color: #ffffff;
  vertical-align: middle;
  @media ${props => props.theme.media_md} {
    display: none;
  }
`

const Btns = styled.div`
  margin-top: 30px;
  text-align: center;
`
const Btn = styled.button`
  min-width: 200px;
  padding: 10px 20px;
  border-radius: 25px;
  background-color: #6e4eb1;
  color: #ffffff;
  font-size: ${rem('18px')};
  font-weight: 500;
`

class Form extends React.Component {
  constructor(props) {
    super(props)
    const {step, agreement001, agreement002, agreement003} = this.props
    this.state = {
      step: step,
      nextStep: 3,
      agreement001: agreement001,
      agreement002: agreement002,
      agreement003: agreement003,
      userIdCheck: false,
      userId: '',
      userPassCheck: false,
      userPass: '',
      userPassConfirmCheck: false,
      userPassConfirm: '',
      companyNameCheck: false,
      companyName: '',
      companyNoCheck: false,
      companyNo: '',
      emailCheck: false,
      email: '',
      userNameCheck: false,
      userName: '',
      userTelCheck: false,
      userTel: '',
      addressSearchOpen: false,
      companyAddressCheck: false,
      companyAddress: '',
      zipCode: '',
      address01: '',
      address02: '',
    }
    this.refInputId = React.createRef()
    this.refInputAddress = React.createRef()
  }
  handleChangeId = e => {
    const target = e.target
    this.setState({
      userId: target.value,
    })
  }

  handleCheckId = async e => {
    const target = e.target
    const {onModalOpen, onModalClose} = this.props
    const {userId} = this.state
    const regExp = new RegExp(target.pattern, 'g')
    const result = await API.idDuplChk({userId: userId})
    if (!regExp.test(userId)) {
      return
    }
    if (result.success) {
      //성공
      onModalOpen(
        {
          isOpen: true,
        },
        {type: 'confirm', title: '안내', description: `${userId}는 사용가능한 아이디입니다.\n사용하시겠습니까?`}
      )
      onModalClose({
        cbConfirm: () => {
          this.setState({
            userIdCheck: result.success,
          })
        },
        cbCancel: () => {
          this.refInputId.current.focus()
          return
        },
      })
    } else {
      //실패
      onModalOpen(
        {
          isOpen: true,
        },
        {type: 'alert', title: '안내', description: result.error}
      )
      onModalClose({
        cbConfirm: () => {
          this.refInputId.current.focus()
          this.setState({
            userIdCheck: result.success,
          })
        },
      })

      return false
    }
  }

  handleChangePass = e => {
    const target = e.target
    this.setState({
      userPass: target.value,
    })
  }
  handleCheckPass = e => {
    const {userPass} = this.state
    const target = e.target
    const regExp = new RegExp(target.pattern, 'g')

    if (!regExp.test(userPass)) {
      this.setState({
        userPassCheck: false,
      })
      return
    } else {
      this.setState({
        userPassCheck: true,
      })
      return
    }
  }

  handleChangePassConfirm = e => {
    const target = e.target
    this.setState({
      userPassConfirm: target.value,
    })
  }

  handleCheckPassConfirm = e => {
    const {userPass, userPassConfirm} = this.state
    const {onModalOpen, onModalClose} = this.props
    const target = e.target
    const regExp = new RegExp(target.pattern, 'g')

    if (!regExp.test(userPassConfirm)) {
      this.setState({
        userPassConfirmCheck: false,
      })
      return
    } else {
      if (userPass === userPassConfirm) {
        this.setState({
          userPassConfirmCheck: true,
        })
      } else {
        onModalOpen(
          {
            isOpen: true,
          },
          {type: 'alert', title: '안내', description: '비밀번호가 일치 하지 않습니다.'}
        )
        this.setState({
          userPassConfirmCheck: false,
        })
      }

      return
    }
  }

  handleChangeCompanyName = e => {
    const target = e.target
    this.setState({
      companyName: target.value,
    })
  }

  handleCheckPassCompanyName = e => {
    const {companyName, companyNameCheck} = this.state
    const {onModalOpen, onModalClose} = this.props
    const target = e.target
    const regExp = new RegExp(target.pattern, 'g')
    const regExpSpecial = new RegExp(/[^A-z\s\d][\\\^]/, 'gi')
    if (companyName == '') {
      onModalOpen(
        {
          isOpen: true,
        },
        {type: 'alert', title: '안내', description: '회사명을 입력해주세요.'}
      )
      return
    }
    if (!regExp.test(companyName)) {
      if (!regExpSpecial.test(companyName)) {
        onModalOpen(
          {
            isOpen: true,
          },
          {type: 'alert', title: '안내', description: '회사명에는 특수문자가 포함될 수 없습니다.'}
        )
      }
      this.setState({
        companyNameCheck: false,
      })
      return
    } else {
      this.setState({
        companyNameCheck: true,
      })
      return
    }
  }

  handleChangeCompanyNo = e => {
    const target = e.target
    this.setState({
      companyNo: target.value,
    })
  }

  handleCheckPassCompanyNo = e => {
    const {companyNo, companyNoCheck} = this.state
    const {onModalOpen, onModalClose} = this.props
    const target = e.target
    const regExp = new RegExp(target.pattern, 'g')
    this.setState({
      companyNoCheck: false,
    })
    //const regExpSpecial = new RegExp(/[^A-z\s\d][\\\^]/, 'g')
    // if (companyNo == '') {
    //   onModalOpen(
    //     {
    //       isOpen: true,
    //     },
    //     {type: 'alert', title: '안내', description: '사업자 번호를 입력해주세요'}
    //   )
    //   return
    // }
    if (!regExp.test(companyNo)) {
      if (companyNo == '') {
        return
      }
      onModalOpen(
        {
          isOpen: true,
        },
        {type: 'alert', title: '안내', description: '사업자등록번호가 올바르지 않습니다.'}
      )
      this.setState({
        companyNoCheck: false,
      })
      return
    } else {
      console.log(222)
      if (validCheckCompanyNo(companyNo)) {
        let convertCompoanyNo = ''
        convertCompoanyNo = companyNo.replace(/([0-9]{3})([0-9]{2})([0-9])/, '$1-$2-$3')
        this.setState({
          companyNo: convertCompoanyNo,
          companyNoCheck: true,
        })
      } else {
        onModalOpen(
          {
            isOpen: true,
          },
          {type: 'alert', title: '안내', description: '사업자등록번호가 올바르지 않습니다.'}
        )
        this.setState({
          companyNoCheck: false,
        })
      }
      return
    }
  }

  handleChangeEmail = e => {
    const target = e.target
    this.setState({
      email: target.value,
    })
  }

  handleCheckEmail = e => {
    const {email, emailCheck} = this.state
    const {onModalOpen, onModalClose} = this.props
    const regExp = new RegExp(/^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/, 'gi')

    if (email == '') {
      onModalOpen(
        {
          isOpen: true,
        },
        {type: 'alert', title: '안내', description: '이메일을 입력해주세요'}
      )
      return
    }
    if (!regExp.test(email)) {
      onModalOpen(
        {
          isOpen: true,
        },
        {type: 'alert', title: '안내', description: '올바른 이메일 형식이 아닙니다.'}
      )
      this.setState({
        emailCheck: false,
      })
      return
    } else {
      this.setState({
        emailCheck: true,
      })
      return
    }
  }

  handleChangeUserName = e => {
    const target = e.target
    this.setState({
      userName: target.value,
    })
  }

  handleCheckUserName = e => {
    const {userName, userNameCheck} = this.state
    const {onModalOpen, onModalClose} = this.props
    const target = e.target

    const regExp = new RegExp(target.pattern, 'g')
    const regExpSpecial = new RegExp(/[^A-z\s\d][\\\^]/, 'gi')
    if (userName == '') {
      onModalOpen(
        {
          isOpen: true,
        },
        {type: 'alert', title: '안내', description: '담당자명을 정확히 입력해 주세요.'}
      )
      return
    }
    if (!regExp.test(userName)) {
      if (!regExpSpecial.test(userName)) {
        onModalOpen(
          {
            isOpen: true,
          },
          {type: 'alert', title: '안내', description: '* 담당자명에는 특수문자가 포함될 수 없습니다.'}
        )
      }
      this.setState({
        userNameCheck: false,
      })
      return
    } else {
      this.setState({
        userNameCheck: true,
      })
      return
    }
  }

  handleChangeUserTel = e => {
    const target = e.target
    this.setState({
      userTel: target.value,
    })
  }

  handleCheckUserTel = e => {
    const {userTel} = this.state
    const {onModalOpen, onModalClose} = this.props
    const target = e.target
    const regExp = new RegExp(target.pattern, 'g')
    //const regExpSpecial = new RegExp(/[^A-z\s\d][\\\^]/, 'g')
    if (userTel == '') {
      onModalOpen(
        {
          isOpen: true,
        },
        {type: 'alert', title: '안내', description: '연락처를 입력하세요.'}
      )
      return
    }
    if (!regExp.test(userTel)) {
      this.setState({
        userTelCheck: false,
      })
      return
    } else {
      this.setState({
        userTelCheck: true,
      })
      return
    }
  }

  daumPstcode = comp =>
    new daum.Postcode({
      oncomplete: function (data) {
        let addr = '' // 주소 변수
        let extraAddr = '' // 참고항목 변수
        data.userSelectedType === 'R' ? (addr = data.roadAddress) : (addr = data.jibunAddress)

        if (data.userSelectedType === 'R') {
          if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname
          }
          if (data.buildingName !== '' && data.apartment === 'Y') {
            extraAddr += extraAddr !== '' ? ', ' + data.buildingName : data.buildingName
          }
          if (extraAddr !== '') {
            extraAddr = ' (' + extraAddr + ')'
          }
        } else {
        }

        comp.setState({
          zipCode: data.zonecode,
          address01: addr,
        })
        comp.refInputAddress.current.focus()
      },
      onclose: function (state) {
        if (state === 'FORCE_CLOSE') {
          comp.setState({
            addressSearchOpen: false,
            companyAddressCheck: false,
          })
        } else if (state === 'COMPLETE_CLOSE') {
          comp.setState({
            addressSearchOpen: false,
            companyAddressCheck: true,
          })
        }
      },
    })

  handleFindAddress = () => {
    const {addressSearchOpen} = this.state
    if (!addressSearchOpen) {
      this.daumPstcode(this).open()
      this.setState({
        addressSearchOpen: true,
      })
    }
  }

  handleChangeAddressDetail = e => {
    const target = e.target
    this.setState({
      address02: target.value,
    })
  }
  handleCheckAddressDetail = () => {
    const {companyAddressCheck, zipCode, address01, address02} = this.state
    const {onModalOpen, onModalClose} = this.props
    if (!companyAddressCheck) {
      return
    }
    if (address02 == '') {
      onModalOpen(
        {
          isOpen: true,
        },
        {type: 'alert', title: '안내', description: '상세주소를 입력해 주세요.'}
      )
      return
    } else {
      const margeAddress = `${zipCode}|${address01}|${address02}`
      return
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    console.log('서브밋state', this.state)
    console.log('서브밋props', this.props)
    const {onModalOpen, onModalClose, handleGetJoinData} = this.props
    const {
      nextStep,
      userId,
      userPass,
      companyName,
      companyNo,
      email,
      userName,
      userTel,
      companyAddress,
      agreement001,
      agreement002,
      agreement003,
    } = this.state

    const data = {
      userId,
      userPass,
      companyName,
      companyNo,
      email,
      userName,
      userTel,
      companyAddress,
      agreement001,
      agreement002,
      agreement003,
      userType: '4', //4=고객사관리자, 5=고객사 서브 관리자
    }
    console.log('DATA', data)
    const result = await API.homepageuserInsert(data)
    console.log(result)
    if (result.success) {
      //성공
      handleGetJoinData(nextStep)
    } else {
      console.log(result.error)
      if (result.error == 500) {
        onModalOpen(
          {
            isOpen: true,
          },
          {type: 'alert', title: '안내', description: '잠시후 다시 시도해 주세요.'}
        )
      } else {
        onModalOpen(
          {
            isOpen: true,
          },
          {type: 'alert', title: '안내', description: result.error}
        )
      }
    }
  }
  handleDaumPostCode = () => {
    const daumPostCode = loadScript(eConst.getDaumPostCodeUri())
    daumPostCode
      .then(() => {
        // daumPost 성공
      })
      .catch(() => {
        // daumPost 실패
      })
  }

  componentDidMount() {
    console.log('%c componentDidMount', 'font-size:30px;color:#ffffff')
    //console.log()
    this.handleDaumPostCode()
    window.scrollTo(0, 0)
  }

  render() {
    const {
      userIdCheck,
      userId,
      userPassCheck,
      userPass,
      userPassConfirmCheck,
      userPassConfirm,
      companyNameCheck,
      companyName,
      companyNoCheck,
      companyNo,
      emailCheck,
      email,
      userNameCheck,
      userName,
      userTelCheck,
      userTel,
      companyAddressCheck,
      zipCode,
      address01,
      address02,
    } = this.state
    return (
      <>
        <Wrap>
          <WrapInner>
            <FormBox
              method={'POST'}
              onSubmit={e => {
                this.handleSubmit(e)
              }}
            >
              <Group>
                <Row>
                  <CellTitle>
                    <Label htmlFor={'userId'}>
                      아이디<Mark>필수입력</Mark>
                    </Label>
                  </CellTitle>
                  <CellContents>
                    {!userIdCheck ? (
                      <InputWrap>
                        <InputBox>
                          <InputValid
                            title={'* 아이디는 영문 소문자 / 숫자 / 영문 소문자+숫자 조합으로 6자이상 14자이하로 입력해 주세요.'}
                            pattern={'^[a-z0-9+]{6,14}$'}
                            placeholder={'아이디를 입력해 주세요.'}
                            id={'userId'}
                            minLength={6}
                            maxLength={14}
                            required={true}
                            onChange={this.handleChangeId}
                            onBlur={this.handleCheckId}
                            value={userId}
                            ref={this.refInputId}
                          />
                          <Check>
                            <CheckSuccess color={'#23b24b'} />
                            <CheckFail color={'#f4433a'} />
                          </Check>
                          <RequiredText>{'* 아이디는 영문 소문자 / 숫자 / 영문 소문자+숫자 조합으로 6자이상 14자이하로 입력해 주세요.'}</RequiredText>
                        </InputBox>
                      </InputWrap>
                    ) : (
                      <InputWrap>
                        <InputBox>
                          <InputValid minLength={6} maxLength={14} disabled={true} value={userId} />
                          <Check>
                            <CheckSuccess color={'#23b24b'} style={{display: 'block'}} />
                          </Check>
                        </InputBox>
                      </InputWrap>
                    )}
                  </CellContents>
                </Row>
                <Row>
                  <CellTitle>
                    <Label htmlFor={'userPass'}>
                      비밀번호<Mark>필수입력</Mark>
                    </Label>
                  </CellTitle>
                  <CellContents>
                    <InputWrap>
                      <InputBox>
                        <InputValid
                          type={'password'}
                          id={'userPass'}
                          title={'* 비밀번호는 영문/ 숫자 / 특수문자 중 2가지 이상 조합하여 8자이상 14자이하로 입력해 주세요.'}
                          placeholder={'비밀번호를 입력해주세요.'}
                          pattern={
                            '^((?=.*[0-9])(?=.*[a-zA-Z])|(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*[~!@#$%^&*()_+|<>?:{}])|(?=.*[A-Z])(?=.*[~!@#$%^&*()_+|<>?:{}])).{8,14}$'
                          }
                          minLength={8}
                          maxLength={14}
                          required={true}
                          onChange={this.handleChangePass}
                          onBlur={this.handleCheckPass}
                          //value={userPass}
                        />
                        <Check>
                          <CheckSuccess color={'#23b24b'} />
                          <CheckFail color={'#f4433a'} />
                        </Check>
                        {!userPassCheck && (
                          <RequiredText>{'* 비밀번호는 영문/ 숫자 / 특수문자 중 2가지 이상 조합하여 8자이상 14자이하로 입력해 주세요.'}</RequiredText>
                        )}
                      </InputBox>
                    </InputWrap>
                  </CellContents>
                </Row>
                <Row>
                  <CellTitle>
                    <Label htmlFor={'userPassConfirm'}>
                      비밀번호 확인<Mark>필수입력</Mark>
                    </Label>
                  </CellTitle>
                  <CellContents>
                    <InputWrap>
                      <InputBox>
                        <InputValid
                          type={'password'}
                          id={'userPassConfirm'}
                          title={'* 비밀번호확인은 영문/ 숫자 / 특수문자 중 2가지 이상 조합하여 8자이상 14자이하로 입력해 주세요.'}
                          placeholder={'비밀번호와 동일한 비밀번호를 입력해주세요.'}
                          pattern={
                            '^((?=.*[0-9])(?=.*[a-zA-Z])|(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*[~!@#$%^&*()_+|<>?:{}])|(?=.*[A-Z])(?=.*[~!@#$%^&*()_+|<>?:{}])).{8,14}$'
                          }
                          minLength={8}
                          maxLength={14}
                          required={true}
                          onChange={this.handleChangePassConfirm}
                          onBlur={this.handleCheckPassConfirm}
                          //value={userPassConfirm}
                        />
                        <Check>
                          <CheckSuccess color={'#23b24b'} />
                          <CheckFail color={'#f4433a'} />
                        </Check>
                        {!userPassConfirmCheck && (
                          <RequiredText>
                            {'* 비밀번호확인은 영문/ 숫자 / 특수문자 중 2가지 이상 조합하여 8자이상 14자이하로 입력해 주세요.'}
                          </RequiredText>
                        )}
                      </InputBox>
                    </InputWrap>
                  </CellContents>
                </Row>
                <Row>
                  <CellTitle>
                    <Label htmlFor={'companyName'}>
                      회사명<Mark>필수입력</Mark>
                    </Label>
                  </CellTitle>
                  <CellContents>
                    <InputWrap>
                      <InputBox>
                        <InputValid
                          id={'companyName'}
                          title={'* 회사명을 입력하세요.\n회사명에는 특수문자가 포함될 수 없습니다.'}
                          placeholder={'회사명을 입력해주세요'}
                          pattern={'^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$'}
                          required={true}
                          onChange={this.handleChangeCompanyName}
                          onBlur={this.handleCheckPassCompanyName}
                          value={companyName}
                        />
                        <Check>
                          <CheckSuccess color={'#23b24b'} />
                          <CheckFail color={'#f4433a'} />
                        </Check>
                        {!companyNameCheck && <RequiredText>{'* 회사명을 입력하세요.'}</RequiredText>}
                      </InputBox>
                    </InputWrap>
                  </CellContents>
                </Row>
                <Row>
                  <CellTitle>
                    <Label htmlFor={'companyNo'}>사업자 번호</Label>
                  </CellTitle>
                  <CellContents>
                    <InputWrap>
                      <InputBox>
                        {!companyNoCheck ? (
                          //초기 입력
                          <InputValid
                            type={'tel'}
                            id={'companyNo'}
                            title={'* 사업자 번호를 입력하세요.'}
                            placeholder={'사업자 번호를 입력해주세요.'}
                            pattern={'^[0-9]{10,10}$'}
                            placeholder={'숫자만 입력가능 합니다.'}
                            minLength={10}
                            maxLength={10}
                            //required={true}
                            onChange={this.handleChangeCompanyNo}
                            onBlur={this.handleCheckPassCompanyNo}
                            value={companyNo}
                          />
                        ) : (
                          //패턴체크후 - 삽입
                          <InputValid
                            type={'tel'}
                            required={true}
                            pattern={'([0-9]{3}[-]+[0-9]{2}[-]+[0-9]{5})'}
                            maxLength={12}
                            onChange={this.handleChangeCompanyNo}
                            onBlur={this.handleCheckPassCompanyNo}
                            value={companyNo}
                          />
                        )}
                        {/* <Check>
                          <CheckSuccess color={'#23b24b'} />
                          <CheckFail color={'#f4433a'} />
                        </Check>
                         */}
                        {!companyNoCheck && <RequiredText>{'* 사업자 번호가 있으시면 사업자 번호를 입력하세요.'}</RequiredText>}
                      </InputBox>
                    </InputWrap>
                  </CellContents>
                </Row>
                <Row>
                  <CellTitle>
                    <Label htmlFor={'email'}>
                      이메일<Mark>필수입력</Mark>
                    </Label>
                  </CellTitle>
                  <CellContents>
                    <InputWrap>
                      <InputBox>
                        <InputValid
                          type={'email'}
                          id={'email'}
                          title={'* 이메일을 입력하세요.'}
                          placeholder={'이메일을 입력해주세요.'}
                          required={true}
                          onChange={this.handleChangeEmail}
                          onBlur={this.handleCheckEmail}
                          value={email}
                        />
                        <Check>
                          <CheckSuccess color={'#23b24b'} />
                          <CheckFail color={'#f4433a'} />
                        </Check>
                        {!emailCheck && <RequiredText>{'* 이메일을 입력하세요.'}</RequiredText>}
                      </InputBox>
                    </InputWrap>
                  </CellContents>
                </Row>
                <Row>
                  <CellTitle>
                    <Label htmlFor={'userName'}>
                      담당자명<Mark>필수입력</Mark>
                    </Label>
                  </CellTitle>
                  <CellContents>
                    <InputWrap>
                      <InputBox>
                        <InputValid
                          id={'userName'}
                          title={'* 담당자명을 정확히 입력해 주세요.'}
                          placeholder={'담당자명을 입력해주세요.'}
                          pattern={'^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$'}
                          required={true}
                          onChange={this.handleChangeUserName}
                          onBlur={this.handleCheckUserName}
                          value={userName}
                        />
                        <Check>
                          <CheckSuccess color={'#23b24b'} />
                          <CheckFail color={'#f4433a'} />
                        </Check>
                        {!userNameCheck && <RequiredText>{'* 담당자명을 정확히 입력해 주세요.'}</RequiredText>}
                      </InputBox>
                    </InputWrap>
                  </CellContents>
                </Row>
                <Row>
                  <CellTitle>
                    <Label htmlFor={'userTel'}>
                      연락처<Mark>필수입력</Mark>
                    </Label>
                  </CellTitle>
                  <CellContents>
                    <InputWrap>
                      <InputBox>
                        <InputValid
                          type={'tel'}
                          id={'userTel'}
                          title={'* 연락처를 8자리 이상 입력하세요.'}
                          placeholder={'연락처를 입력해주세요.'}
                          pattern={'^[0-9]{7,}$'}
                          placeholder={'숫자만 입력가능 합니다.'}
                          minLength={8}
                          required={true}
                          onChange={this.handleChangeUserTel}
                          onBlur={this.handleCheckUserTel}
                          value={userTel}
                        />
                        <Check>
                          <CheckSuccess color={'#23b24b'} />
                          <CheckFail color={'#f4433a'} />
                        </Check>
                        {!userTelCheck && <RequiredText>{'* 연락처를 8자리 이상 입력하세요.'}</RequiredText>}
                      </InputBox>
                    </InputWrap>
                  </CellContents>
                </Row>
                <Row>
                  <CellTitle>
                    <Label htmlFor={'zipCode'}> 주소 </Label>
                  </CellTitle>
                  <CellContents>
                    <InputWrap>
                      <InputBox>
                        <ZipCode
                          id={'zipCode'}
                          readOnly={true}
                          value={zipCode}
                          minLength={5}
                          maxLength={5}
                          onClick={e => {
                            this.handleFindAddress()
                          }}
                        />
                        <AddresssBase
                          id={'address01'}
                          readOnly={true}
                          value={address01}
                          onClick={e => {
                            this.handleFindAddress()
                          }}
                        />
                        <BtnAddressSearch
                          type={'button'}
                          onClick={e => {
                            this.handleFindAddress()
                          }}
                        >
                          주소찾기
                        </BtnAddressSearch>

                        <AddresssDetaile
                          id={'address02'}
                          readOnly={!companyAddressCheck ? true : false}
                          value={address02}
                          ref={this.refInputAddress}
                          onChange={this.handleChangeAddressDetail}
                          onBlur={this.handleCheckAddressDetail}
                        />
                      </InputBox>
                    </InputWrap>
                  </CellContents>
                </Row>
              </Group>
              <Btns>
                <Btn
                  onSubmit={e => {
                    this.handleSubmit(e)
                  }}
                >
                  저장 후 가입완료
                </Btn>
              </Btns>
            </FormBox>
          </WrapInner>
        </Wrap>
      </>
    )
  }
}

const modalStateToProps = state => ({
  modal: state.modal,
})
const modalDispatchToProps = dispatch => ({
  onModalOpen: (modalProps, modalType) => dispatch(modalOpen(modalProps, modalType)),
  onModalClose: modalProps => {
    dispatch(modalClose(modalProps))
  },
})
export default connect(modalStateToProps, modalDispatchToProps)(Form)
