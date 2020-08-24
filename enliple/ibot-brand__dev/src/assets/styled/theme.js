const RootEm = '16px'

const MediaSize = {
  xs: '0',
  sm: '321px',
  rg: '640px',
  md: '768px',
  lg: '960px',
  xl: '1080px',
  xxl: '1440px',
  xxxl: '1920px',
}

const Theme = {
  rootEm: `${RootEm}`,
  colorRed: 'red',
  media_xs: `(max-width: ${MediaSize.xs})`,
  media_sm: `(max-width: ${MediaSize.sm})`,
  media_rg: `(max-width: ${MediaSize.rg})`,
  media_md: `(max-width: ${MediaSize.md})`,
  media_lg: `(max-width: ${MediaSize.lg})`,
  media_xl: `(max-width: ${MediaSize.xl})`,
  media_xxl: `(max-width: ${MediaSize.xxl})`,
}

// @media ${props => props.theme.media_lg} {
//   &::before {
//     left: 10px;
//   }
//   &::after {
//     left: 30px;
//   }
// }

export default Theme
