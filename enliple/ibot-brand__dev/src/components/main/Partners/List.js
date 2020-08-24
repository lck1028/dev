import React from 'react'
import {Route, Link} from 'react-router-dom'
import _ from 'lodash'
import styled from 'styled-components'
import Swiper from 'react-id-swiper'
import {MdArrowBack, MdArrowForward} from 'react-icons/md'

import {API} from '../../../common/services'
import rem from '../../../assets/styled/rem'

const PartnerList = styled.div`
  .swiper {
    &-wrapper {
      line-height: 0;
    }
    &-container {
      box-sizing: border-box;
      height: 100%;
      padding: 100px 0;
    }
    &-pagination {
      display: none;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      text-align: center;
      line-height: 1;
      &-bullet {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin: 0 3px;
        border-radius: 50%;
        background-color: #888888;
        &-active {
          background-color: #111111;
        }
      }
    }
  }
  @media ${props => props.theme.media_md} {
    .swiper {
      &-wrapper {
      }
      &-container {
        height: auto;
        padding: 10px 0;
      }
      &-pagination {
        display: block;
      }
    }
  }
`
const PartinerItemBox = styled.div`
  display: inline-block;
  width: auto;
  height: auto;
`
const PartinerItem = styled.div`
  box-sizing: border-box;
  display: block;
  width: auto;
  height: auto;
  padding: 20px 50px;
  text-align: center;
  line-height: 1.4;
  vertical-align: top;
  @media ${props => props.theme.media_md} {
    padding: 5px 10px;
  }
`
const PartinerLink = styled.a`
  display: block;
  color: #111111;
  text-align: center;
  text-decoration: none;
  transform: scale(1, 1);
  &:hover {
    transform: scale(1.1, 1.1);
    transition: transform 0.2s linear 0s;
  }
`
const PartinerLogo = styled.span`
  display: block;
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  border: 2px solid #e2e2e2;
  box-shadow: 3px 3px 5px 0 rgba(77, 77, 77, 0.1);
  background-color: #e2e2e2;
  background-image: url(${props => (props.logo ? props.logo : null)});
  background-position: 50% 0%;
  background-repeat: no-repeat;
  background-size: cover;
  ${PartinerLink}:hover & {
    box-shadow: 3px 3px 10px 0 rgba(77, 77, 77, 0.4);
    transition: box-shadow 0.2s linear 0s;
  }
  @media ${props => props.theme.media_md} {
    width: 100px;
    height: 100px;
    border: 1px solid #e2e2e2;
    box-shadow: none;
    ${PartinerLink}:hover & {
      box-shadow: none;
      transition: none;
    }
  }
  @media ${props => props.theme.media_rg} {
    width: 70px;
    height: 70px;
    border: 1px solid #e2e2e2;
    box-shadow: none;
    ${PartinerLink}:hover & {
      box-shadow: none;
      transition: none;
    }
  }
`
const PartinerInfo = styled.div`
  margin-top: 10px;
  @media ${props => props.theme.media_md} {
    margin-top: 5px;
  }
`
const PartinerTitle = styled.strong`
  display: block;
  width: 200px;
  font-size: ${rem('26px')};
  font-weight: 800;
  letter-spacing: -0.4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${props => props.theme.media_md} {
    width: 100px;
    font-size: ${rem('14px')};
  }
  @media ${props => props.theme.media_rg} {
    width: 80px;
  }
`
const PartinerDescription = styled.p`
  display: block;
  margin-top: 10px;
  font-size: ${rem('24px')};
  font-weight: 300;
  letter-spacing: -0.6px;
  @media ${props => props.theme.media_md} {
    margin-top: 5px;
    font-size: ${rem('12px')};
  }
`

const PartnersArrowText = styled.span`
  font: 0/0 a;
`

const PartnersArrow = styled.button`
  position: absolute;
  bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border: 2px solid #aaaaaa;
  color: #aaaaaa;
  font-size: 40px;
  z-index: 1;
  &:hover {
    border: 2px solid #111111;
    color: #111111;
    transition: border 0.3s ease-out 0s, color 0.3s ease-out 0s;
  }
  @media ${props => props.theme.media_md} {
    display: none;
  }
`

const PartnersArrowPrev = styled(PartnersArrow)`
  left: 50%;
  margin-left: -77px;
`
const PartnersArrowNext = styled(PartnersArrow)`
  right: 50%;
  margin-right: -77px;
`

class List extends React.Component {
  constructor(props) {
    super(props)
    const {match, className} = this.props
    this.state = {
      match: match,
      className: className,
      getCaseListReqData: {
        type: 'list', //list: 목록조회
        now_page: 1,
        page_size: 1000,
        pc_disp_yn: 'Y',
      },
      result: {},
      resultChunk2: {}, // row2개 처리를 위해 데이터 가공함
      flagApi: false,
      swiperPrams: {
        init: false,
        autoplay: false,
        observer: true,
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },
        renderPrevButton: () => (
          <PartnersArrowPrev className="swiper-button-prev">
            <MdArrowBack />
            <PartnersArrowText>이전</PartnersArrowText>
          </PartnersArrowPrev>
        ),
        renderNextButton: () => (
          <PartnersArrowNext className="swiper-button-next">
            <MdArrowForward />
            <PartnersArrowText>다음</PartnersArrowText>
          </PartnersArrowNext>
        ),
      },
      PartnerSwiper: {},
    }
  }
  async handlePartnerData() {
    let {getCaseListReqData} = this.state
    let result = await API.getCaseList(getCaseListReqData)
    let resultChunk2 = _.chunk(await result.lists, 2)
    if (result.respcode === 0) {
      this.setState({
        result: result,
        resultChunk2: resultChunk2, // row2개 처리를 위해 데이터 가공함
        flagApi: true,
      })
    } else if (result.respcode === 1) {
      console.error(result.respcode + 'params error')
      this.setState({
        result: result,
      })
    } else {
      console.error(result.respcode + 'server error')
    }
  }

  hendleSetSwiper = PartnerSwiper => {
    this.setState({PartnerSwiper: PartnerSwiper})
  }

  componentDidMount() {
    this.handlePartnerData()
  }

  componentDidUpdate(prevProps, prevState) {
    const {flagApi, PartnerSwiper} = this.state
    if (prevState.flagApi != flagApi) {
      PartnerSwiper.init()
    }
  }

  render() {
    const {result, flagApi, resultChunk2} = this.state

    return (
      <>
        <PartnerList>
          <Swiper
            {...this.state.swiperPrams}
            getSwiper={PartnerSwiper => {
              this.hendleSetSwiper(PartnerSwiper)
            }}
          >
            {resultChunk2 && flagApi ? (
              // row2개 처리를 위해 데이터 가공함
              _.map(resultChunk2, (item, i) => {
                return (
                  <PartinerItemBox key={i}>
                    <PartinerItem key={item[0].idx}>
                      <PartinerLink href={item[0].link_url} target="_blank" rel="noopener noreferrer" title={item[0].company_name}>
                        <PartinerLogo logo={API.getStoreImgPath + (item[0].logo_img ? item[0].logo_img : item[0].img_url)} />
                        <PartinerInfo>
                          <PartinerTitle>{item[0].company_name}</PartinerTitle>
                          <PartinerDescription>{item[0].company_type}</PartinerDescription>
                        </PartinerInfo>
                      </PartinerLink>
                    </PartinerItem>
                    {item[1] == undefined ? null : (
                      <PartinerItem key={item[1].idx}>
                        <PartinerLink href={item[1].link_url} target="_blank" rel="noopener noreferrer" title={item[1].company_name}>
                          <PartinerLogo logo={API.getStoreImgPath + (item[1].logo_img ? item[1].logo_img : item[1].img_url)} />
                          <PartinerInfo>
                            <PartinerTitle>{item[1].company_name}</PartinerTitle>
                            <PartinerDescription>{item[1].company_type}</PartinerDescription>
                          </PartinerInfo>
                        </PartinerLink>
                      </PartinerItem>
                    )}
                  </PartinerItemBox>
                )
              })
            ) : (
              <></>
            )}
          </Swiper>
        </PartnerList>
      </>
    )
  }
}

export default List
