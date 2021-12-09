import { createRef, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
// eslint-disable-next-line no-unused-vars
import { styled, ThemeProvider, makeStyles } from '@mui/material/styles'
import Navbar from '../components/Navbars/Navbar'
import Footer from '../components/Footer/Footer'
import Sidebar from '../components/Sidebars/Sidebar'
import FixedPlugin from '../components/FixedPlugin/FixedPlugin'
import routes from '../routes'
import appStyle from './adminTheme'

let ps

const switchRoutes = (
   <Routes>
      {routes.map((prop, index) => {
         if (prop.layout === '/admin') {
            return (
               <Route
                  element={<prop.component />}
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  path={prop.layout + prop.path}
               />
            )
         }
         return null
      })}
      {/* //must change the element view component */}
      <Route path="/admin" element={<Footer />} />
   </Routes>
)

const useStyles = makeStyles(appStyle)
const Admin = ({ ...rest }) => {
   const classes = useStyles()
   const mainPanel = createRef()
   const [image, setImage] = useState(bgImage)
   const [color, setColor] = useState('blue')
   const [fixedClasses, setFixedClasses] = useState('dropdown show')
   const [mobileOpen, setMobileOpen] = useState(false)
   const handleImageClick = (img) => {
      setImage(img)
   }
   const handleColorClick = (colour) => {
      setColor(colour)
   }
   const handleFixedClick = () => {
      if (fixedClasses === 'dropdown') {
         setFixedClasses('dropdown show')
      } else {
         setFixedClasses('dropdown')
      }
   }
   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen)
   }
   const getRoute = () => window.location.pathname !== '/admin/maps'
   const resizeFunction = () => {
      if (window.innerWidth >= 960) {
         setMobileOpen(false)
      }
   }
   useEffect(() => {
      if (navigator.userAgent.indexOf('Win') > -1) {
         ps = new PerfectScrollbar(mainPanel.current, {
            suppressScrollX: true,
            suppressScrollY: false,
         })
         document.body.style.overflow = 'hidden'
      }
      window.addEventListener('resize', resizeFunction)
      // Specify how to clean up after this effect:
      return function cleanup() {
         if (navigator.userAgent.indexOf('Win') > -1) {
            ps.destroy()
         }
         window.removeEventListener('resize', resizeFunction)
      }
   }, [mainPanel])
   return (
      <div className={classes.wrapper}>
         <Sidebar
            routes={routes}
            logoText="Creative Tim"
            logo={logo}
            image={image}
            handleDrawerToggle={handleDrawerToggle}
            open={mobileOpen}
            color={color}
            {...rest}
         />
         <div className={classes.mainPanel} ref={mainPanel}>
            <Navbar
               routes={routes}
               handleDrawerToggle={handleDrawerToggle}
               {...rest}
            />
            {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
            {getRoute() ? (
               <div className={classes.content}>
                  <div className={classes.container}>{switchRoutes}</div>
               </div>
            ) : (
               <div className={classes.map}>{switchRoutes}</div>
            )}
            {getRoute() ? <Footer /> : null}
            <FixedPlugin
               handleImageClick={handleImageClick}
               handleColorClick={handleColorClick}
               bgColor={color}
               bgImage={image}
               handleFixedClick={handleFixedClick}
               fixedClasses={fixedClasses}
            />
         </div>
      </div>
   )
}

export default Admin
