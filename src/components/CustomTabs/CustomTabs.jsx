/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
// import {
//    experimentalStyled as styled,
//    // makeStyles,
//    ThemeProvider,
// } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
// import customTabsTheme from './customTabsTheme'
import Card from '../Card/Card/Card'
import CardBody from '../Card/CardBody/CardBody'
import CardHeader from '../Card/CardHeader/CardHeader'

import styles from './customTabStyle'

const useStyles = makeStyles(styles)

const CustomTabs = (props) => {
   const classes = useStyles()
   const [value, setValue] = useState(0)
   const handleChange = (event, valu) => {
      setValue(valu)
   }
   const { headerColor, plainTabs, tabs, title, rtlActive } = props
   const cardTitle = `${classes.cardTitle} 
      ${rtlActive ? classes.cardTitleRTL : ''} `
   // classNames({
   //   [classes.cardTitle]: true,
   //   [classes.cardTitleRTL]: rtlActive,
   // });

   return (
      <Card plain={plainTabs}>
         <CardHeader color={headerColor} plain={plainTabs}>
            {title !== undefined ? (
               <div className={cardTitle}>{title}</div>
            ) : null}
            <Tabs
               value={value}
               onChange={handleChange}
               classes={{
                  root: classes.tabsRoot,
                  indicator: classes.displayNone,
                  scrollButtons: classes.displayNone,
               }}
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
                  return (
                     <Tab
                        classes={{
                           root: classes.tabRootButton,
                           selected: classes.tabSelected,
                           wrapper: classes.tabWrapper,
                        }}
                        key={key}
                        label={prop.tabName}
                        {...icon}
                     />
                  )
               })}
            </Tabs>
         </CardHeader>
         <CardBody>
            {tabs.map((prop, key) => {
               if (key === value) {
                  return <div key={key}>{prop.tabContent}</div>
               }
               return null
            })}
         </CardBody>
      </Card>
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

// const DivRoot = styled('div')(({ theme, rtlActive }) => ({
//    ...theme.cardTitle,
//    ...(rtlActive && theme.cardTitleRTL),
// }))
// const TabsRoot = styled(MuiTabs, {
//    overridesResolver: (props, style) => [style.root],
// })(({ theme, indicator, scrollButtons }) => ({
//    ...(indicator && theme.displayNone),
//    ...(scrollButtons && theme.displayNone),
// }))

// const TabRoot = styled(MuiTab, {
//    overridesResolver: (props, style) => [style.root],
// })(({ theme, wrapper, selected }) => ({
//    ...(wrapper && theme.tabWrapper),
//    ...(selected && theme.tabSelected),
// }))
//    <ThemeProvider theme={customTabsTheme}>
//       <Card plain={plainTabs}>
//          <CardHeader color={headerColor} plain={plainTabs}>
//             {title !== undefined ? (
//                <DivRoot rtlActive={rtlActive}>{title}</DivRoot>
//             ) : null}
//             <TabsRoot
//                value={value}
//                onChange={handleChange}
//                variant="scrollable"
//                scrollButtons="auto"
//             >
//                {tabs.map((prop, key) => {
//                   let icon = {}
//                   if (prop.tabIcon) {
//                      icon = {
//                         icon: <prop.tabIcon />,
//                      }
//                   }
//                   // eslint-disable-next-line react/no-array-index-key
//                   return <TabRoot key={key} label={prop.tabName} {...icon} />
//                })}
//             </TabsRoot>
//          </CardHeader>
//          <CardBody>
//             {tabs.map((prop, index) => {
//                if (index === value) {
//                   // eslint-disable-next-line react/no-array-index-key
//                   return <div key={index}>{prop.tabContent}</div>
//                }
//                return null
//             })}
//          </CardBody>
//       </Card>
//    </ThemeProvider>
