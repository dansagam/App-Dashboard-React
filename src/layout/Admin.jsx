import { createRef, useEffect, useState } from 'react'
// import { Routes, Route, Navigate, useRoutes, Outlet } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import { makeStyles } from '@mui/styles'
// eslint-disable-next-line no-unused-vars
import { styled, ThemeProvider, createTheme } from '@mui/material/styles'
// eslint-disable-next-line import/no-cycle
import Navbar from '../components/Navbars/Navbar'
import Footer from '../components/Footer/Footer'
import Sidebar from '../components/Sidebars/Sidebar'
import FixedPlugin from '../components/FixedPlugin/FixedPlugin'
import routes from '../routes'
import appStyle from './adminTheme'
// import bgImage from './img/sidebar-2.jpg'

let ps
// {/* <Route path="/" element={<Navigate replace to="/admin" />} />
// <Route path="admin" element={<Navigate replace to="/admin/dashboard" />}> */}

// const switchRoutes = (
//    <Routes>
//       {routes.map((prop, index) => (
//          <Route
//             // eslint-disable-next-line react/no-array-index-key
//             key={index}
//             path={prop.path}
//             element={prop.element}
//          />
//       ))}
//    </Routes>
// )
const theme = createTheme()
const useStyles = makeStyles(appStyle(theme))
const Admin = ({ ...rest }) => {
   // const switchRoutes = useRoutes(sideRoutes)
   const classes = useStyles()
   const mainPanel = createRef()
   const [image, setImage] = useState('/img/sidebar-2.jpg')
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
   // console.log(getRoute())
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
            logoText="Peonet"
            logo="/img/reactlogo.png"
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
            {/* On the /maps route we want the map to be on full screen -
            this is not possible if the content and conatiner classes are present because
            they have some paddings which would make the map smaller */}
            {/* {getRoute() ? (
               <div className={classes.content}>
                  <div className={classes.container}>{switchRoutes}</div>
               </div>
            ) : (
               <div className={classes.map}>{switchRoutes}</div>
            )} */}
            {/* <div className={classes.content}>
               <div className={classes.container}>
                  <Outlet />
               </div>
            </div> */}
            {getRoute() ? (
               <div className={classes.content}>
                  <div className={classes.container}>
                     <Outlet />
                  </div>
               </div>
            ) : (
               <div className={classes.map}>
                  <Outlet />
               </div>
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
// import { Outlet } from 'react-router-dom'

// const Admin = () => (
//    <div>
//       <main style={{ display: 'flex' }}>
//          <p>djhdhjd</p>
//          <p style={{ display: 'flex' }}>
//             <p>djdd</p>
//             <p>dndjdhdd</p>
//             <p>
//                <Outlet />
//             </p>
//             <p>dkjdkjd</p>
//          </p>
//          <p>sdhdjhd</p>
//       </main>
//       admin testing
//    </div>
// )

// export default Admin
