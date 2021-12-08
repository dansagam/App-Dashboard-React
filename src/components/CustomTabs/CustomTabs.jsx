import PropTypes from 'prop-types'
import { useState } from 'react'
import {
   experimentalStyled as styled,
   // makeStyles,
   ThemeProvider,
} from '@mui/material/styles'
import MuiTabs from '@mui/material/Tabs'
import MuiTab from '@mui/material/Tab'
// import styles from './customTabStyle'
import customTabsTheme from './customTabsTheme'
import Card from '../Card/Card/Card'
import CardBody from '../Card/CardBody/CardBody'
import CardHeader from '../Card/CardHeader/CardHeader'

const DivRoot = styled('div')(({ theme, rtlActive }) => ({
   ...theme.cardTitle,
   ...(rtlActive && theme.cardTitleRTL),
}))
const TabsRoot = styled(MuiTabs, {
   overridesResolver: (props, style) => [style.root],
})(({ theme, indicator, scrollButtons }) => ({
   ...(indicator && theme.displayNone),
   ...(scrollButtons && theme.displayNone),
}))

const TabRoot = styled(MuiTab, {
   overridesResolver: (props, style) => [style.root],
})(({ theme, wrapper, selected }) => ({
   ...(wrapper && theme.tabWrapper),
   ...(selected && theme.tabSelected),
}))
const CustomTabs = (props) => {
   const [value, setValue] = useState(0)
   const handleChange = (event, valu) => {
      setValue(valu)
   }
   const { headerColor, plainTabs, tabs, title, rtlActive } = props
   return (
      <ThemeProvider theme={customTabsTheme}>
         <Card plain={plainTabs}>
            <CardHeader color={headerColor} plain={plainTabs}>
               {title !== undefined ? (
                  <DivRoot rtlActive={rtlActive}>{title}</DivRoot>
               ) : null}
               <TabsRoot
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
               >
                  {tabs.map((prop, key) => {
                     let icon = {}
                     if (prop.tabIcon) {
                        icon = {
                           icon: <prop.tabIcon />,
                        }
                     }
                     // eslint-disable-next-line react/no-array-index-key
                     return <TabRoot key={key} label={prop.tabName} {...icon} />
                  })}
               </TabsRoot>
            </CardHeader>
            <CardBody>
               {tabs.map((prop, index) => {
                  if (index === value) {
                     // eslint-disable-next-line react/no-array-index-key
                     return <div key={index}>{prop.tabContent}</div>
                  }
                  return null
               })}
            </CardBody>
         </Card>
      </ThemeProvider>
   )
}
CustomTabs.propTypes = {
   headerColor: PropTypes.oneOf([
      'warning',
      'success',
      'danger',
      'info',
      'primary',
      'rose',
   ]),
   title: PropTypes.string,
   tabs: PropTypes.arrayOf(
      PropTypes.shape({
         tabName: PropTypes.string.isRequired,
         tabIcon: PropTypes.object,
         tabContent: PropTypes.node.isRequired,
      })
   ),
   rtlActive: PropTypes.bool,
   plainTabs: PropTypes.bool,
}

export default CustomTabs
