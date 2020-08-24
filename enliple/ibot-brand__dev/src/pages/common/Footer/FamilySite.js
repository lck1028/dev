import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {RiArrowDownSLine} from 'react-icons/ri'

import rem from '../../../assets/styled/rem'
import {NotoSans} from '../../../assets/styled/fonts'

const Wrap = styled.div`
  position: relative;
  padding-right: 57px;
`
const SelectBox = styled.div`
  position: relative;
  line-height: 0;
`
const Select = styled.select`
  ${NotoSans};
  appearance: none;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  height: 50px;
  padding: 12px 50px 12px 30px;
  border: 1px solid #555555;
  border-radius: 0;
  background-color: transparent;
  color: #999999;
  font-size: ${rem('16px')};
  vertical-align: top;
  &::-ms-expand {
    display: none;
  }
  & > option {
    background-color: #222222;
    color: #999999;
  }
`
const Arrow = styled(RiArrowDownSLine)`
  position: absolute;
  right: 20px;
  top: 50%;
  pointer-events: none;
  color: #ffe610;
  font-size: ${rem('16px')};
  transform: translateY(-50%);
`
const Button = styled.button`
  ${NotoSans};
  position: absolute;
  right: 0;
  top: 0;
  width: 58px;
  height: 50px;
  border: 1px solid #555555;
  color: #eeeeee;
  font-size: ${rem('16px')};
  text-align: center;
`

const FamilySite = props => {
  const [familyUrl, setUrl] = useState(null)
  const [familyTitle, setTitle] = useState(null)
  useEffect(() => {
    setTitle('패밀리사이트를 선택해주세요')
  })
  const handleSetUrl = e => {
    const target = e.target
    if (target.selectedIndex === 0) {
      setUrl(null)
      setTitle(target.options[target.selectedIndex].text)
      return
    }
    setUrl(target.value)
    setTitle(target.options[target.selectedIndex].text + '_' + target.value)
  }
  const handleFamilySite = e => {
    if (familyUrl == null) {
      e.preventDefault()
      return
    }
    window.open(familyUrl, '_blank', 'noopener,noreferrer')
  }
  return (
    <>
      <Wrap>
        <SelectBox>
          <Select defaultValue={null} onChange={(e, familyUrl) => handleSetUrl(e, familyUrl)} title={familyTitle}>
            <option value={null}>패밀리사이트</option>
            <option value={'http://enliple.com/doc/mobon'}>MOBON</option>
            <option value={'http://www.ad-vantage.co.kr/'}>Advantage</option>
            <option value={'https://www.shop-tree.com/'}>샵트리</option>
            <option value={'https://tinyurl.com/y9ylftvj'}>스타일썸</option>
            <option value={'https://tinyurl.com/y8lxe765'}>스타일룩</option>
            <option value={'https://tinyurl.com/y7rlctzb'}>옷잘남</option>
          </Select>
          <Arrow />
        </SelectBox>
        <Button
          onClick={e => handleFamilySite(e)}
          data-test1={familyUrl}
          title={familyUrl == null ? '패밀리사이트를 선택해주세요' : '[새창]' + familyUrl}
        >
          이동
        </Button>
      </Wrap>
    </>
  )
}

export default FamilySite
