import React from 'react'
import styled from 'styled-components'

import rem from '../../../assets/styled/rem'

const Table = styled.table`
  width: 100%;
  th,
  td {
    padding: 14px 10px;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    font-size: ${rem('14px')};
    text-align: center;
  }
  th {
    font-weight: 500;
  }
  td {
  }
  & > thead {
    th {
      padding: 18px 10px;
      border-top: 1px solid #000000;
      border-bottom: 1px solid #000000;
    }
  }
  & > tbody {
  }
`
const Caption = styled.caption``

const TableWrap = props => {
  const {children, className, caption} = props
  return (
    <>
      <Table className={className}>
        <Caption>{caption}</Caption>
        {children}
      </Table>
    </>
  )
}

export default TableWrap
