import MuiGrid from '@mui/material/Grid'
import PropTypes from 'prop-types'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
   components: {
      MuiGrid: {
         styleOverrides: {
            root: {
               padding: '0 15px !important',
            },
         },
      },
   },
})

const GridItem = (props) => {
   const { children, ...rest } = props
   return (
      <ThemeProvider theme={theme}>
         <MuiGrid item {...rest}>
            {children}
         </MuiGrid>
      </ThemeProvider>
   )
}

GridItem.propTypes = {
   children: PropTypes.node,
}
export default GridItem
