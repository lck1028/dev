import Theme from './theme'

const rem = size => {
  const px = size.split('px')[0]
  const rootEm = Theme.rootEm.split('px')[0]
  const rem = px / rootEm
  return rem + 'rem'
}

export default rem
