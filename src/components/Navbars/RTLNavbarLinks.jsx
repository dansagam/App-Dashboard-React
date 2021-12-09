/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react'
// @material-ui/core components
// eslint-disable-next-line no-unused-vars
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Hidden from '@mui/material/Hidden'
import Poppers from '@mui/material/Popper'
// @mui/icons-material
import Person from '@mui/icons-material/Person'
import Notifications from '@mui/icons-material/Notifications'
import Dashboard from '@mui/icons-material/Dashboard'
import Search from '@mui/icons-material/Search'
// customComponents
import CustomInput from '../CustomInputs/Input'
import Button from '../CustomButtons/Button'
import headerLinkTheme from './rtlHeaderTheme'

const theme = createTheme()
const useStyles = makeStyles(headerLinkTheme(theme))

const RTLNavbarLinks = () => {
   const classes = useStyles()
   const [open, setOpen] = useState(null)
   const handleToggle = (event) => {
      if (open && open.contains(event.target)) {
         setOpen(null)
      } else {
         setOpen(event.currentTarget)
      }
   }

   const handleClose = () => {
      setOpen(null)
   }
   return (
      <div>
         <div className={classes.searchWrapper}>
            <CustomInput
               formControlProps={{
                  className: `${classes.margin} ${classes.search}`,
               }}
               inputProps={{
                  placeholder: 'جستجو...',
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
               <p className={classes.linkText}>آمارها</p>
            </Hidden>
         </Button>
         <div className={classes.manager}>
            <Button
               color={window.innerWidth > 959 ? 'transparent' : 'white'}
               justIcon={window.innerWidth > 959}
               simple={!(window.innerWidth > 959)}
               aria-owns={open ? 'menu-list-grow' : null}
               aria-haspopup="true"
               onClick={handleToggle}
               className={classes.buttonLink}
            >
               <Notifications className={classes.icons} />
               <span className={classes.notifications}>۵</span>
               <Hidden mdUp implementation="css">
                  <p onClick={handleToggle} className={classes.linkText}>
                     اعلان‌ها
                  </p>
               </Hidden>
            </Button>
            <Poppers
               open={Boolean(open)}
               anchorEl={open}
               transition
               disablePortal
               className={
                  !open
                     ? `${classes.popperClose} ${classes.popperNav}`
                     : classes.popperNav
               }
            >
               {({ TransitionProps, placement }) => (
                  <Grow
                     {...TransitionProps}
                     id="menu-list-grow"
                     style={{
                        transformOrigin:
                           placement === 'bottom'
                              ? 'center top'
                              : 'center bottom',
                     }}
                  >
                     <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                           <MenuList role="menu">
                              <MenuItem
                                 onClick={handleClose}
                                 className={classes.dropdownItem}
                              >
                                 محمدرضا به ایمیل شما پاسخ داد
                              </MenuItem>
                              <MenuItem
                                 onClick={handleClose}
                                 className={classes.dropdownItem}
                              >
                                 شما ۵ وظیفه جدید دارید
                              </MenuItem>
                              <MenuItem
                                 onClick={handleClose}
                                 className={classes.dropdownItem}
                              >
                                 از حالا شما با علیرضا دوست هستید
                              </MenuItem>
                              <MenuItem
                                 onClick={handleClose}
                                 className={classes.dropdownItem}
                              >
                                 اعلان دیگر
                              </MenuItem>
                              <MenuItem
                                 onClick={handleClose}
                                 className={classes.dropdownItem}
                              >
                                 اعلان دیگر
                              </MenuItem>
                           </MenuList>
                        </ClickAwayListener>
                     </Paper>
                  </Grow>
               )}
            </Poppers>
         </div>
         <Button
            color={window.innerWidth > 959 ? 'transparent' : 'white'}
            justIcon={window.innerWidth > 959}
            simple={!(window.innerWidth > 959)}
            aria-label="Person"
            className={classes.buttonLink}
         >
            <Person className={classes.icons} />
            <Hidden mdUp implementation="css">
               <p className={classes.linkText}>حساب کاربری</p>
            </Hidden>
         </Button>
      </div>
   )
}

export default RTLNavbarLinks
