// import { createTheme, ThemeProvider } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import PropTypes from 'prop-types'
// @material-ui/core components
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Hidden from '@mui/material/Hidden'
// @material-ui/icons
import Menu from '@mui/icons-material/Menu'
import AdminNavbarLinks from './AdminNavbarLinks'
import RTLNavbarLinks from './RTLNavbarLinks'
import Button from '../CustomButtons/Button'
// import useRoutesName from '../../hooks/useRouteName'

import navbarTheme from './headerTheme'

// const theme = createTheme()
const useStyles = makeStyles(navbarTheme)

const Navbar = (props) => {
   const classes = useStyles()
   const routeName = 'ssss'
   // const routeName = useRoutesName()
   // eslint-disable-next-line no-unused-vars
   const { color, rtlActive, handleDrawerToggle, routes } = props
   return (
      <AppBar
         className={
            color ? `${classes.appBar} ${classes[color]}` : classes.appBar
         }
      >
         <Toolbar className={classes.container}>
            <div className={classes.flex}>
               {/* Here we create navbar brand, based on route name */}
               <Button color="transparent" href="#" className={classes.title}>
                  {routeName}
               </Button>
            </div>
            <Hidden smDown implementation="css">
               {rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
            </Hidden>
            <Hidden mdUp implementation="css">
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerToggle}
               >
                  <Menu />
               </IconButton>
            </Hidden>
         </Toolbar>
      </AppBar>
   )
}
Navbar.propTypes = {
   color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
   rtlActive: PropTypes.bool,
   handleDrawerToggle: PropTypes.func,
   routes: PropTypes.arrayOf(PropTypes.object),
}
export default Navbar
