import PropTypes from 'prop-types'
import { styled, ThemeProvider } from '@mui/material/styles'
import typographyTheme from './typographyTheme'

const DivRoot = styled('div')(({ theme }) => ({
   ...theme.defaultFontStyle,
   ...theme.warningText,
}))
const Warning = () => {
   const { children } = props
   return (
      <ThemeProvider theme={typographyTheme}>
         <DivRoot>{children}</DivRoot>
      </ThemeProvider>
   )
}

Warning.propTypes = {
   children: PropTypes.node,
}
export default Warning
