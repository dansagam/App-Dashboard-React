import MuiGrid from '@mui/material/Grid'
import PropTypes from 'prop-types'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
   components: {
      MuiGrid: {
         styleOverrides: {
            root: {
               margin: '0 -15px !important',
               width: 'unset',
            },
         },
      },
   },
})

const GridContainer = (props) => {
   const { children, ...rest } = props
   return (
      <ThemeProvider theme={theme}>
         <MuiGrid container {...rest}>
            {children}
         </MuiGrid>
      </ThemeProvider>
   )
}

GridContainer.propTypes = {
   children: PropTypes.node,
}
export default GridContainer
