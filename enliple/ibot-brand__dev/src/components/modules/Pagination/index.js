import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import {MdFirstPage, MdChevronLeft, MdChevronRight, MdLastPage} from 'react-icons/md'

import rem from '../../../assets/styled/rem'

const Hidden = styled.span`
  font: 0/0 a;
`

const Wrap = styled.div`
  text-align: center;
  margin-top: 50px;
  @media ${props => props.theme.media_lg} {
    margin-top: 30px;
  }
  @media ${props => props.theme.media_md} {
    margin-top: 20px;
  }
`
const Btn = styled.button`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin: 3px 5px;
  border-radius: 50%;
  color: #000000;
  font-size: ${rem('16px')};
  text-align: center;
  line-height: 20px;
  background-color: ${props => (props.active ? '#6e4eb1' : '#eeeeee')};
  color: ${props => (props.active ? '#ffffff' : '#333333')};
  font-size: ${rem('12px')};
  vertical-align: top;
  &:hover {
    background-color: #6e4eb1;
    color: #ffffff;
    transition: background-color 0.3s ease-out 0s, color 0.3s ease-out 0s;
  }
`

var BtnFirst = styled(Btn)`
  margin-right: 3px;
  font-size: ${rem('18px')};
`
var BtnPrev = styled(Btn)`
  margin-right: 10px;
  font-size: ${rem('18px')};
`
const BtnNext = styled(Btn)`
  margin-left: 10px;
  font-size: ${rem('18px')};
`
const BtnLast = styled(Btn)`
  margin-left: 3px;
  font-size: ${rem('18px')};
`

class Pagination extends React.PureComponent {
  constructor(props) {
    super(props)
    const {nowPage, pageSize, totalPage, totalRecord} = this.props
    this.state = {
      nowPage: 1,
    }
  }
  goPage = (e, idx) => {
    const {nowPage, goPage, pageSize} = this.props
    if (idx && nowPage !== idx) {
      goPage(idx, pageSize)
    }
  }

  componentDidMount() {
    const {nowPage, pageSize, totalPage, totalRecord} = this.props
  }

  render() {
    const {nowPage, pageSize, totalPage, totalRecord, goPage} = this.props
    let paginationButton = []

    if (totalPage > pageSize) {
      paginationButton.push(
        <BtnFirst key={'first'} onClick={e => this.goPage(e, 1)}>
          <Hidden>처음으로</Hidden>
          <MdFirstPage />
        </BtnFirst>
      )
      paginationButton.push(
        <BtnPrev key={'prev'} onClick={e => this.goPage(e, nowPage - 1)}>
          <Hidden>이전으로</Hidden>
          <MdChevronLeft />
        </BtnPrev>
      )
      for (let i = this.state.nowPage; i <= totalPage; i++) {
        let idx = i
        paginationButton.push(
          <Btn key={idx} active={nowPage === i ? true : false} onClick={e => this.goPage(e, i)}>
            {i}
          </Btn>
        )
      }

      paginationButton.push(
        <BtnNext key={'next'} onClick={e => this.goPage(e, nowPage + 1 <= totalPage ? nowPage + 1 : null)}>
          <Hidden>다음으로</Hidden>
          <MdChevronRight />
        </BtnNext>
      )
      paginationButton.push(
        <BtnLast key={'last'} onClick={e => this.goPage(e, totalPage)}>
          <Hidden>마지막으로</Hidden>
          <MdLastPage />
        </BtnLast>
      )
    } else {
      for (let i = this.state.nowPage; i <= totalPage; i++) {
        let idx = i
        paginationButton.push(
          <Btn key={idx} active={nowPage === i ? true : false} onClick={e => this.goPage(e, i)}>
            {i}
          </Btn>
        )
      }
    }

    return (
      <>
        <Wrap>{paginationButton}</Wrap>
      </>
    )
  }
}

export default Pagination
