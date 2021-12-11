import PropTypes from 'prop-types'
import { styled, ThemeProvider } from '@mui/material/styles'
import typographyTheme from './typographyTheme'

const DivRoot = styled('div')(({ theme }) => ({
   ...theme.defaultFontStyle,
   ...theme.infoText,
}))
const Info = (props) => {
   const { children } = props
   return (
      <ThemeProvider theme={typographyTheme}>
         <DivRoot>{children}</DivRoot>
      </ThemeProvider>
   )
}

Info.propTypes = {
   children: PropTypes.node,
}
export default Info
