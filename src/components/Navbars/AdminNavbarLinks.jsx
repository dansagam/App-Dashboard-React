/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react'
// @material-ui/core components
import { createTheme /** ThemeProvider */ } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Hidden from '@mui/material/Hidden'
import Poppers from '@mui/material/Popper'
import Divider from '@mui/material/Divider'
// @mui/icons-material
import Person from '@mui/icons-material/Person'
import Notifications from '@mui/icons-material/Notifications'
import Dashboard from '@mui/icons-material/Dashboard'
import Search from '@mui/icons-material/Search'
// customComponents
import CustomInput from '../CustomInputs/Input'
import Button from '../CustomButtons/Button'
import headerLinksStyle from './headerLinkTheme'

const theme = createTheme()
const useStyles = makeStyles(headerLinksStyle(theme))
const AdminNavbarLinks = () => {
   const classes = useStyles()
   const [openNotification, setOpenNotification] = useState(null)
   const [openProfile, setOpenProfile] = useState(null)
   const handleClickNotification = (event) => {
      if (openNotification && openNotification.contains(event.target)) {
         setOpenNotification(null)
      } else {
         setOpenNotification(event.currentTarget)
      }
   }
   const handleCloseNotification = () => {
      setOpenNotification(null)
   }
   const handleClickProfile = (event) => {
      if (openProfile && openProfile.contains(event.target)) {
         setOpenProfile(null)
      } else {
         setOpenProfile(event.currentTarget)
      }
   }
   const handleCloseProfile = () => {
      setOpenProfile(null)
   }
   return (
      // <ThemeProvider theme={theme}>
      <div>
         <div className={classes.searchWrapper}>
            <CustomInput
               formControlProps={{
                  className: `${classes.margin} ${classes.search}`,
               }}
               inputProps={{
                  placeholder: 'Search',
                  inputProps: {
                     'aria-label': 'Search',
                  },
               }}
            />
            <Button color="white" aria-label="edit" justIcon round>
               <Search />
            </Button>
         </div>
         <Button
            color={window.innerWidth > 959 ? 'transparent' : 'white'}
            justIcon={window.innerWidth > 959}
            simple={!(window.innerWidth > 959)}
            aria-label="Dashboard"
            className={classes.buttonLink}
         >
            <Dashboard className={classes.icons} />
            <Hidden mdUp implementation="css">
               <p className={classes.linkText}>Dashboard</p>
            </Hidden>
         </Button>
         <div className={classes.manager}>
            <Button
               color={window.innerWidth > 959 ? 'transparent' : 'white'}
               justIcon={window.innerWidth > 959}
               simple={!(window.innerWidth > 959)}
               aria-owns={
                  openNotification ? 'notification-menu-list-grow' : null
               }
               aria-haspopup="true"
               onClick={handleClickNotification}
               className={classes.buttonLink}
            >
               <Notifications className={classes.icons} />
               <span className={classes.notifications}>5</span>
               <Hidden mdUp implementation="css">
                  <p
                     onClick={handleCloseNotification}
                     className={classes.linkText}
                  >
                     Notification
                  </p>
               </Hidden>
            </Button>
            <Poppers
               open={Boolean(openNotification)}
               anchorEl={openNotification}
               transition
               disablePortal
               className={
                  !openNotification
                     ? `${classes.popperClose} ${classes.popperNav}`
                     : `${classes.popperNav}`
               }
            >
               {({ TransitionProps, placement }) => (
                  <Grow
                     {...TransitionProps}
                     id="notification-menu-list-grow"
                     style={{
                        transformOrigin:
                           placement === 'bottom'
                              ? 'center top'
                              : 'center bottom',
                     }}
                  >
                     <Paper>
                        <ClickAwayListener
                           onClickAway={handleCloseNotification}
                        >
                           <MenuList role="menu">
                              <MenuItem
                                 onClick={handleCloseNotification}
                                 className={classes.dropdownItem}
                              >
                                 Mike John responded to your email
                              </MenuItem>
                              <MenuItem
                                 onClick={handleCloseNotification}
                                 className={classes.dropdownItem}
                              >
                                 You have 5 new tasks
                              </MenuItem>
                              <MenuItem
                                 onClick={handleCloseNotification}
                                 className={classes.dropdownItem}
                              >
                                 You re now friend with Andrew
                              </MenuItem>
                              <MenuItem
                                 onClick={handleCloseNotification}
                                 className={classes.dropdownItem}
                              >
                                 Another Notification
                              </MenuItem>
                              <MenuItem
                                 onClick={handleCloseNotification}
                                 className={classes.dropdownItem}
                              >
                                 Another One
                              </MenuItem>
                           </MenuList>
                        </ClickAwayListener>
                     </Paper>
                  </Grow>
               )}
            </Poppers>
         </div>
         <div className={classes.manager}>
            <Button
               color={window.innerWidth > 959 ? 'transparent' : 'white'}
               justIcon={window.innerWidth > 959}
               simple={!(window.innerWidth > 959)}
               aria-owns={openProfile ? 'profile-menu-list-grow' : null}
               aria-haspopup="true"
               onClick={handleClickProfile}
               className={classes.buttonLink}
            >
               <Person className={classes.icons} />
               <Hidden mdUp implementation="css">
                  <p className={classes.linkText}>Profile</p>
               </Hidden>
            </Button>
            <Poppers
               open={Boolean(openProfile)}
               anchorEl={openProfile}
               transition
               disablePortal
               className={
                  !openProfile
                     ? `${classes.popperClose} ${classes.popperNav}`
                     : `${classes.popperNav}`
               }
            >
               {({ TransitionProps, placement }) => (
                  <Grow
                     {...TransitionProps}
                     id="profile-menu-list-grow"
                     style={{
                        transformOrigin:
                           placement === 'bottom'
                              ? 'center top'
                              : 'center bottom',
                     }}
                  >
                     <Paper>
                        <ClickAwayListener onClickAway={handleCloseProfile}>
                           <MenuList role="menu">
                              <MenuItem
                                 onClick={handleCloseProfile}
                                 className={classes.dropdownItem}
                              >
                                 Profile
                              </MenuItem>
                              <MenuItem
                                 onClick={handleCloseProfile}
                                 className={classes.dropdownItem}
                              >
                                 Settings
                              </MenuItem>
                              <Divider light />
                              <MenuItem
                                 onClick={handleCloseProfile}
                                 className={classes.dropdownItem}
                              >
                                 Logout
                              </MenuItem>
                           </MenuList>
                        </ClickAwayListener>
                     </Paper>
                  </Grow>
               )}
            </Poppers>
         </div>
      </div>
      // </ThemeProvider>
   )
}

export default AdminNavbarLinks
