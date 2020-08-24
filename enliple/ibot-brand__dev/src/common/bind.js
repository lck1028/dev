import classNames from 'classnames/bind'

/**
 * class 생성자에서 호출하여 공통 함수 호출
 */
export const cBind = (reactComp, styles) => {
  reactComp.cx = classNames.bind(styles)
  reactComp.handleInputChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    reactComp.setState({[target.name]: value}, () => console.log(`${target.name}:`, value))
  }
  reactComp.handleNumberInputChange = event => {
    const target = event.target
    const value = Number(target.value)
    reactComp.setState({[target.name]: value}, () => console.log(`${target.name}:`, value))
  }
}
