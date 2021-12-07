/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { useState } from 'react'
import { experimentalStyled as styled, makeStyles } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import styles from './customTabStyle'

const CustomTabs = (props) => {
   const [value, setValue] = useState(0)
   const handleChange = (event, valu) => {
      setValue(valu)
   }
   const { headerColor, plainTabs, tabs, title, rtlActive } = props
   // thjbksdjksajdad
   return (
      <div>
         <h1>djsdhjd</h1>
      </div>
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
