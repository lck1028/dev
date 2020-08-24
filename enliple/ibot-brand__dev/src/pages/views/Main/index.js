import React from 'react'
import styled, {css} from 'styled-components'
import scrollSnapPolyfill from 'css-scroll-snap-polyfill'
import 'intersection-observer'
import {connect} from 'react-redux'
import {isMobile, isIE, isIOS} from 'react-device-detect'

import Header from '../../common/Header/index'
import Footer from '../../common/Footer'
import {Overview, Products, Experience, Price, Partners, ContactUs} from '../../../components/main'

const DefaultSnapStyle = css`
  height: 100vh;
  max-height: 100vh;
  //scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: mandatory;
  scroll-snap-type: y mandatory;

  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
`
const IosSnapStyle = css`
  height: 100%;

  overflow-x: hidden;
  overflow-y: scroll;
  scroll-snap-type: ${props => (props.observePrice ? 'none' : 'mandatory')};
  scroll-snap-type: ${props => (props.observePrice ? 'none' : 'y mandatory')};
`

const ScrollbarStyle = css`
  &::-webkit-scrollbar-track {
    background-color: #efefef;
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #666666;
    border: 1px solid transparent;
    background-clip: content-box;
  }
  &::-webkit-scrollbar {
    width: 8px;
  }
`

const ScrollSnap = styled.main`
  display: block;
  -webkit-overflow-scrolling: touch;
  ${!isIOS ? DefaultSnapStyle : IosSnapStyle}
  ${!isMobile ? ScrollbarStyle : null}
`
const ScrollSnapItem = styled.div`
  scroll-snap-align: start;
  scroll-snap-stop: always;
  min-width: 1px;
  min-height: 1px;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
`
const ScrollSnapPrice = styled(ScrollSnapItem)`
  height: auto;
  min-height: auto;
`
const ScrollSnapFooter = styled(ScrollSnapItem)`
  height: auto;
  min-height: auto;
  scroll-snap-align: end;
`

class Main extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      observeOverview: false,
      observeProducts: false,
      observeExperience: false,
      observePrice: false,
      observeReference: false,
      observeContactus: false,
      isMain: !isMobile ? true : false, //IE 예외처리 해야됨
    }
    this.refScrollSnap = React.createRef()
    this.refOverview = React.createRef()
    this.refProducts = React.createRef()
    this.refExperience = React.createRef()
    this.refPrice = React.createRef()
    this.refReference = React.createRef()
    this.refContactus = React.createRef()
  }

  handleObserver() {
    //io = IntersectionObserver
    const targetOverview = this.refOverview.current
    const targetProducts = this.refProducts.current
    const targetExperience = this.refExperience.current
    const targetPrice = this.refPrice.current
    const targetReference = this.refReference.current
    const targetContactus = this.refContactus.current

    if (targetOverview == null) {
      return
    }
    const ioDefaultOptions = {
      root: this.refScrollSnap.current,
      rootMargin: !isIE ? '0px' : '-200px 0px -200px 0px',
      threshold: [0.1, 0.9],
    }
    const ioPriceOptions = {
      root: this.refScrollSnap.current,
      rootMargin: '0px',
      threshold: [0.1, 0.9],
    }
    const ioCallbackOverview = (entries, observer) => {
      entries.forEach(entry => {
        const isIntersecting = entry.isIntersecting
        const targetIntersecting = entry.target
        if (isIntersecting) {
          this.setState({observeOverview: true})
        } else {
          this.setState({observeOverview: false})
        }
      })
    }
    const ioCallbackProducts = (entries, observer) => {
      entries.forEach(entry => {
        const isIntersecting = entry.isIntersecting
        const targetIntersecting = entry.target
        if (isIntersecting) {
          this.setState({observeProducts: true})
        } else {
          this.setState({observeProducts: false})
        }
      })
    }
    const ioCallbackExperience = (entries, observer) => {
      entries.forEach(entry => {
        const isIntersecting = entry.isIntersecting
        const targetIntersecting = entry.target
        if (isIntersecting) {
          this.setState({observeExperience: true})
        } else {
          this.setState({observeExperience: false})
        }
      })
    }
    const ioCallbackPrice = (entries, observer) => {
      entries.forEach(entry => {
        const isIntersecting = entry.isIntersecting
        const targetIntersecting = entry.target

        if (isIntersecting) {
          this.setState({observePrice: true})
        } else {
          this.setState({observePrice: false})
        }
      })
    }
    const ioCallbackReference = (entries, observer) => {
      entries.forEach(entry => {
        const isIntersecting = entry.isIntersecting
        const targetIntersecting = entry.target

        if (isIntersecting) {
          this.setState({observeReference: true})
        } else {
          this.setState({observeReference: false})
        }
      })
    }
    const ioCallbackContactus = (entries, observer) => {
      entries.forEach(entry => {
        const isIntersecting = entry.isIntersecting
        const targetIntersecting = entry.target

        if (isIntersecting) {
          this.setState({observeContactus: true})
        } else {
          this.setState({observeContactus: false})
        }
      })
    }

    const observerOverview = new IntersectionObserver(ioCallbackOverview, ioDefaultOptions)
    const observerProducts = new IntersectionObserver(ioCallbackProducts, ioDefaultOptions)
    const observerExperience = new IntersectionObserver(ioCallbackExperience, ioDefaultOptions)
    const observerPrice = new IntersectionObserver(ioCallbackPrice, ioPriceOptions)
    const observerReference = new IntersectionObserver(ioCallbackReference, ioDefaultOptions)
    const observerContactus = new IntersectionObserver(ioCallbackContactus, ioDefaultOptions)

    observerOverview.observe(targetOverview)
    observerProducts.observe(targetProducts)
    observerExperience.observe(targetExperience)
    //observerPrice.observe(targetPrice)
    observerReference.observe(targetReference)
    observerContactus.observe(targetContactus)

    if (isIOS) {
      //observerPrice.observe(targetPrice)
    } else {
      return
    }
  }

  componentDidMount() {
    !isIE ? scrollSnapPolyfill() : null
    this.handleObserver()
  }
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {
    //console.log('언마운트!!!')
  }

  render() {
    const {observeOverview, observeProducts, observeExperience, observePrice, observeReference, observeContactus, isMain} = this.state

    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html,body{
                overflow:hidden;
                ${isMobile ? 'height:100%;' : ''}
              }
              `,
          }}
        />
        <Header
          observeoverview={observeOverview}
          observeProducts={observeProducts}
          observeExperience={observeExperience}
          observePrice={observePrice}
          observeReference={observeReference}
          observeContactus={observeContactus}
          isMain={isMain}
        />
        <ScrollSnap as={isIE ? 'div' : null} ref={this.refScrollSnap} observePrice={observePrice}>
          <ScrollSnapItem id={'overview'} ref={this.refOverview}>
            <Overview />
          </ScrollSnapItem>
          <ScrollSnapItem id={'products'} ref={this.refProducts}>
            <Products />
          </ScrollSnapItem>
          <ScrollSnapItem id={'experience'} ref={this.refExperience}>
            <Experience observeexperience={observeExperience} />
          </ScrollSnapItem>
          {/* <ScrollSnapPrice id={'price'} ref={this.refPrice}>
            <Price />
          </ScrollSnapPrice> */}
          <ScrollSnapItem id={'reference'} ref={this.refReference}>
            <Partners />
          </ScrollSnapItem>
          <ScrollSnapItem id={'contactus'} ref={this.refContactus}>
            <ContactUs />
          </ScrollSnapItem>
          <ScrollSnapFooter>
            <Footer />
          </ScrollSnapFooter>
        </ScrollSnap>
      </>
    )
  }
}

export default Main
