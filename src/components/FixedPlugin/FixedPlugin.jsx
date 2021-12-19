/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import Button from '../CustomButtons/Button'

const imagine1 = '/img/sidebar-1.jpg'
const imagine2 = '/img/sidebar-2.jpg'
const imagine3 = '/img/sidebar-3.jpg'
const imagine4 = '/img/sidebar-4.jpg'

const FixedPlugin = (props) => {
   const {
      handleColorClick,
      handleImageClick,
      bgColor,
      bgImage,
      // eslint-disable-next-line no-unused-vars
      rtlActive,
      fixedClasses,
      handleFixedClick,
   } = props
   // eslint-disable-next-line no-unused-vars
   const [classes, setClasses] = useState('dropdown show')
   // eslint-disable-next-line no-unused-vars
   const [bgChecked, setBgChecked] = useState(true)
   const [bgImage1, setBgImage1] = useState(bgImage)
   const handleClick = () => {
      handleFixedClick()
   }
   return (
      <div className={`fixed-plugin ${rtlActive ? 'rtl-fixed-plugin' : ''}`}>
         <div id="fixedPluginClasses" className={fixedClasses}>
            <div onClick={handleClick}>
               <FontAwesomeIcon icon={faCog} />
            </div>
         </div>
         <ul className="dropdown-menu">
            <li className="header-title">SIDEBAR FILTERS</li>
            <li className="adjustments-line">
               <a href="#" className="switch-trigger">
                  <div>
                     <span
                        className={
                           bgColor === 'purple'
                              ? 'badge filter badge-purple active'
                              : 'badge filter badge-purple'
                        }
                        data-color="purple"
                        onClick={() => {
                           handleColorClick('purple')
                        }}
                     />
                     <span
                        className={
                           bgColor === 'blue'
                              ? 'badge filter badge-blue active'
                              : 'badge filter badge-blue'
                        }
                        data-color="blue"
                        onClick={() => {
                           handleColorClick('blue')
                        }}
                     />
                     <span
                        className={
                           bgColor === 'green'
                              ? 'badge filter badge-green active'
                              : 'badge filter badge-green'
                        }
                        data-color="green"
                        onClick={() => {
                           handleColorClick('green')
                        }}
                     />
                     <span
                        className={
                           bgColor === 'red'
                              ? 'badge filter badge-red active'
                              : 'badge filter badge-red'
                        }
                        data-color="red"
                        onClick={() => {
                           handleColorClick('red')
                        }}
                     />
                     <span
                        className={
                           bgColor === 'orange'
                              ? 'badge filter badge-orange active'
                              : 'badge filter badge-orange'
                        }
                        data-color="orange"
                        onClick={() => {
                           handleColorClick('orange')
                        }}
                     />
                  </div>
               </a>
            </li>
            <li className="header-title">Images</li>
            <li className={bgImage1 === imagine1 ? 'active' : ''}>
               <a
                  className="img-holder switch-trigger"
                  onClick={() => {
                     setBgImage1(imagine1)
                     handleImageClick(imagine1)
                  }}
               >
                  <img src={imagine1} alt="..." />
               </a>
            </li>
            <li className={bgImage1 === imagine2 ? 'active' : ''}>
               <a
                  className="img-holder switch-trigger"
                  onClick={() => {
                     setBgImage1(imagine2)
                     handleImageClick(imagine2)
                  }}
               >
                  <img src={imagine2} alt="..." />
               </a>
            </li>
            <li className={bgImage1 === imagine3 ? 'active' : ''}>
               <a
                  className="img-holder switch-trigger"
                  onClick={() => {
                     setBgImage1(imagine3)
                     handleImageClick(imagine3)
                  }}
               >
                  <img src={imagine3} alt="..." />
               </a>
            </li>
            <li className={bgImage1 === imagine4 ? 'active' : ''}>
               <a
                  className="img-holder switch-trigger"
                  onClick={() => {
                     setBgImage1(imagine4)
                     handleImageClick(imagine4)
                  }}
               >
                  <img src={imagine4} alt="..." />
               </a>
            </li>

            <li className="button-container">
               <div className="button-container">
                  <Button
                     color="success"
                     href="#https://www.creative-tim.com/product/material-dashboard-react?ref=mdr-fixed-plugin"
                     target="_blank"
                     fullWidth
                  >
                     Download free!
                  </Button>
               </div>
            </li>
            <li className="button-container">
               <div className="button-container">
                  <Button
                     color="warning"
                     href="#https://www.creative-tim.com/product/material-dashboard-pro-react?ref=mdr-fixed-plugin"
                     target="_blank"
                     fullWidth
                  >
                     Get PRO version
                  </Button>
               </div>
            </li>
            <li className="button-container">
               <Button
                  color="info"
                  fullWidth
                  href="#https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
                  target="_blank"
               >
                  Documentation
               </Button>
            </li>
            <li className="adjustments-line" />
         </ul>
      </div>
   )
}

FixedPlugin.propTypes = {
   bgImage: PropTypes.string,
   handleFixedClick: PropTypes.func,
   rtlActive: PropTypes.bool,
   fixedClasses: PropTypes.string,
   bgColor: PropTypes.oneOf(['purple', 'blue', 'green', 'orange', 'red']),
   handleColorClick: PropTypes.func,
   handleImageClick: PropTypes.func,
}
export default FixedPlugin
