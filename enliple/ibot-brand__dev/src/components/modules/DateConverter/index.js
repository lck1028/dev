import React from 'react'
import styled from 'styled-components'
import moment from 'moment/locale/ko'
import Moment from 'react-moment'

Moment.globalLocale = 'ko'
Moment.globalFormat = 'YYYY-MM-DD'

const Time = styled(Moment)``

const DateConverter = props => {
  const {children, className, as, date, format, startDate, endDate} = props

  //무제한은 component에서 처리
  if (startDate && endDate) {
    // 시작일 종료일 둘다 있을때
    return (
      <>
        <Time className={className} as={as} format={format}>
          {startDate}
        </Time>{' '}
        ~{' '}
        <Time className={className} as={as} format={format}>
          {endDate}
        </Time>
      </>
    )
  } else if (startDate && endDate == null) {
    //시작일 있고 종료일 없을때
    return (
      <>
        <Time className={className} as={as} format={format}>
          {startDate}
        </Time>{' '}
        ~ 종료시
      </>
    )
  } else if (startDate == null && endDate) {
    //시작일 없고 종료일 있을떄
    return (
      <>
        ~{' '}
        <Time className={className} as={as} format={format}>
          {endDate}
        </Time>{' '}
        까지
      </>
    )
  } else {
    return (
      //기본 날짜 convert
      <>
        <Time className={className} as={as} format={format}>
          {date}
        </Time>
      </>
    )
  }
}

export default DateConverter

DateConverter.defaultProps = {
  locale: Moment.globalLocale,
  format: Moment.globalFormat,
  date: new Date(),
}
