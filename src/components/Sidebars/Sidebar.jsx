import { NavLink, useLocation } from 'react-router-dom'
import { createTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import PropTypes from 'prop-types'
// @material-ui/core components
import Drawer from '@mui/material/Drawer'
import Hidden from '@mui/material/Hidden'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Icon from '@mui/material/Icon'
// core components
import AdminNavbarLinks from '../Navbars/AdminNavbarLinks'
import RTLNavbarLinks from '../Navbars/RTLNavbarLinks'
import sidebarStyle from './sidebarTheme'

const theme = createTheme()
const useStyles = makeStyles(sidebarStyle(theme))
const Sidebar = (props) => {
   const location = useLocation()
   // verifies if routeName is the one active (in browser input)
   function activeRoute(routeName) {
      return location.pathname === routeName
   }

   const {
      color,
      logo,
      image,
      logoText,
      routes,
      rtlActive,
      handleDrawerToggle,
      open,
   } = props
   const classes = useStyles()
   const links = (
      <List className={classes.list}>
         {routes.map((prop, key) => {
            let activePro = ' '
            let listItemClasses
            if (prop.path === '/upgrade-to-pro') {
               activePro = `${classes.activePro} `
               listItemClasses = ` ${classes[color]}`
            } else {
               listItemClasses =
                  activeRoute(prop.layout + prop.path) && classes[color]
               // classNames({
               //    [` ${classes[color]}`]: activeRoute(prop.layout + prop.path),
               // })
            }
            const whiteFontClasses =
               activeRoute(prop.layout + prop.path) && classes.whiteFont
            // classNames({
            //    [` ${classes.whiteFont}`]: activeRoute(prop.layout + prop.path),
            // })
            return (
               <NavLink
                  to={prop.layout + prop.path}
                  className={activePro + classes.item}
                  activeClassName="active"
                  // eslint-disable-next-line react/no-array-index-key
                  key={key}
               >
                  <ListItem
                     button
                     className={classes.itemLink + listItemClasses}
                  >
                     {typeof prop.icon === 'string' ? (
                        <Icon
                           className={
                              rtlActive
                                 ? `${classes.itemIcon} ${whiteFontClasses} ${classes.itemIconRTL}`
                                 : `${classes.itemIcon} ${whiteFontClasses}`
                           }
                        >
                           {prop.icon}
                        </Icon>
                     ) : (
                        <prop.icon
                           className={
                              rtlActive
                                 ? `${classes.itemIcon} ${whiteFontClasses} ${classes.itemIconRTL}`
                                 : `${classes.itemIcon} ${whiteFontClasses}`
                           }
                        />
                     )}
                     <ListItemText
                        primary={rtlActive ? prop.rtlName : prop.name}
                        className={
                           rtlActive
                              ? `${classes.itemText} ${whiteFontClasses} ${classes.itemIconRTL}`
                              : `${classes.itemText} ${whiteFontClasses}`
                        }
                        disableTypography
                     />
                  </ListItem>
               </NavLink>
            )
         })}
      </List>
   )
   const brand = (
      <div className={classes.logo}>
         <a
            href="https://www.creative-tim.com?ref=mdr-sidebar"
            className={
               rtlActive
                  ? `${classes.logoLink} ${classes.logoLinkRTL}`
                  : `${classes.logoLink}`
            }
            target="_blank"
            rel="noreferrer"
         >
            <div className={classes.logoImage}>
               <img src={logo} alt="logo" className={classes.img} />
            </div>
            {logoText}
         </a>
      </div>
   )
   return (
      <div>
         <Hidden mdUp implementation="css">
            <Drawer
               variant="temporary"
               anchor={rtlActive ? 'left' : 'right'}
               open={open}
               classes={{
                  paper: rtlActive
                     ? `${classes.drawerPaper} ${classes.drawerPaperRTL}`
                     : classes.drawerPaper,
               }}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
               }}
            >
               {brand}
               <div className={classes.sidebarWrapper}>
                  {rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
                  {links}
               </div>
               {image !== undefined ? (
                  <div
                     className={classes.background}
                     style={{ backgroundImage: `url(${image})` }}
                  />
               ) : null}
            </Drawer>
         </Hidden>
         <Hidden smDown implementation="css">
            <Drawer
               anchor={rtlActive ? 'right' : 'left'}
               variant="permanent"
               open
               classes={{
                  paper: rtlActive
                     ? `${classes.drawerPaper} ${classes.drawerPaperRTL}`
                     : classes.drawerPaper,
               }}
            >
               {brand}
               <div className={classes.sidebarWrapper}>{links}</div>
               {image !== undefined ? (
                  <div
                     className={classes.background}
                     style={{ backgroundImage: `url(${image})` }}
                  />
               ) : null}
            </Drawer>
         </Hidden>
      </div>
   )
}

Sidebar.propTypes = {
   rtlActive: PropTypes.bool,
   handleDrawerToggle: PropTypes.func,
   color: PropTypes.oneOf(['purple', 'blue', 'green', 'orange', 'red']),
   logo: PropTypes.string,
   image: PropTypes.string,
   logoText: PropTypes.string,
   routes: PropTypes.arrayOf(PropTypes.object),
   open: PropTypes.bool,
}
export default Sidebar
