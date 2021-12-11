// import { RouteObject } from 'react-router-dom'
// @material-ui/icons
import Dashboard from '@mui/icons-material/Dashboard'
import Person from '@mui/icons-material/Person'
import LibraryBooks from '@mui/icons-material/LibraryBooks'
import BubbleChart from '@mui/icons-material/BubbleChart'
import LocationOn from '@mui/icons-material/LocationOn'
import Notifications from '@mui/icons-material/Notifications'
import Unarchive from '@mui/icons-material/Unarchive'
import Language from '@mui/icons-material/Language'
// core components/views for Admin layout
// import { Navigate } from 'react-router-dom'
import DashboardPage from './views/Dashboard/Dashboard'
import Icons from './views/Icons/Icons'
import Maps from './views/Maps/Maps'
import NotificationsPage from './views/Notifications/Notifications'
import RTLPage from './views/RTLPage/RTLPage'
import TableList from './views/TableList/TableList'
import Typography from './views/Typography/Typography'
import UpgradeToPro from './views/UpgradeToPro/UpgradeToPro'
import UserProfile from './views/UserProfile/UserProfile'
// import App from './App'
// eslint-disable-next-line import/no-cycle
// import Admin from './layout/Admin'
// import Layout from './Layout'

// const routes = RouteObject

const dashboardRoutes = [
   {
      path: 'dashboard',
      name: 'Dashboard',
      rtlName: 'لوحة القيادة',
      icon: Dashboard,
      element: <DashboardPage />,
      layout: '/admin',
   },
   {
      path: 'user',
      name: 'User Profile',
      rtlName: 'ملف تعريفي للمستخدم',
      icon: Person,
      element: <UserProfile />,
      layout: '/admin',
   },
   {
      path: 'table',
      name: 'Table List',
      rtlName: 'قائمة الجدول',
      icon: 'content_paste',
      element: <TableList />,
      layout: '/admin',
   },
   {
      path: 'typography',
      name: 'Typography',
      rtlName: 'طباعة',
      icon: LibraryBooks,
      element: <Typography />,
      layout: '/admin',
   },
   {
      path: 'icons',
      name: 'Icons',
      rtlName: 'الرموز',
      icon: BubbleChart,
      element: <Icons />,
      layout: '/admin',
   },
   {
      path: 'maps',
      name: 'Maps',
      rtlName: 'خرائط',
      icon: LocationOn,
      element: <Maps />,
      layout: '/admin',
   },
   {
      path: 'notifications',
      name: 'Notifications',
      rtlName: 'إخطارات',
      icon: Notifications,
      element: <NotificationsPage />,
      layout: '/admin',
   },
   {
      path: 'rtl-page',
      name: 'RTL Support',
      rtlName: 'پشتیبانی از راست به چپ',
      icon: Language,
      element: <RTLPage />,
      layout: '/rtl',
   },
   {
      path: 'upgrade-to-pro',
      name: 'Upgrade To PRO',
      rtlName: 'التطور للاحترافية',
      icon: Unarchive,
      element: <UpgradeToPro />,
      layout: '/admin',
   },
]
// const appRoutes = [
//    {
//       path: 'dashboard',
//       name: 'Dashboard',
//       rtlName: 'لوحة القيادة',
//       icon: Dashboard,
//       element: <DashboardPage />,
//       layout: '/admin',
//    },
//    {
//       path: '/user',
//       name: 'User Profile',
//       rtlName: 'ملف تعريفي للمستخدم',
//       icon: Person,
//       element: <UserProfile />,
//       layout: '/admin',
//    },
//    {
//       path: '/table',
//       name: 'Table List',
//       rtlName: 'قائمة الجدول',
//       icon: 'content_paste',
//       element: <TableList />,
//       layout: '/admin',
//    },
//    {
//       path: '/typography',
//       name: 'Typography',
//       rtlName: 'طباعة',
//       icon: LibraryBooks,
//       element: <Typography />,
//       layout: '/admin',
//    },
//    {
//       path: '/icons',
//       name: 'Icons',
//       rtlName: 'الرموز',
//       icon: BubbleChart,
//       element: <Icons />,
//       layout: '/admin',
//    },
//    {
//       path: '/maps',
//       name: 'Maps',
//       rtlName: 'خرائط',
//       icon: LocationOn,
//       element: <Maps />,
//       layout: '/admin',
//    },
//    {
//       path: '/notifications',
//       name: 'Notifications',
//       rtlName: 'إخطارات',
//       icon: Notifications,
//       element: <NotificationsPage />,
//       layout: '/admin',
//    },
//    {
//       path: '/rtl-page',
//       name: 'RTL Support',
//       rtlName: 'پشتیبانی از راست به چپ',
//       icon: Language,
//       element: <RTLPage />,
//       layout: '/rtl',
//    },
//    {
//       path: '/upgrade-to-pro',
//       name: 'Upgrade To PRO',
//       rtlName: 'التطور للاحترافية',
//       icon: Unarchive,
//       element: <UpgradeToPro />,
//       layout: '/admin',
//    },
// ]
// const sideRoutes = [
//    {
//       path: '/admin',
//       element: <Layout />,
//       children: dashboardRoutes,
//       // [
//       //    {
//       //       index: true,
//       //       // path: 'admin',
//       //       element: <Layout />,
//       //       children: dashboardRoutes,
//       //       layout: '/admin',
//       //    },
//       // ],
//    },
//    {
//       path: 'rtl',
//       name: 'RTLPage',
//       rtlName: 'التطور للاحترافية',
//       element: <Layout />,
//       layout: '/rtl',
//       children: dashboardRoutes,
//       // [
//       //    {
//       //       index: true,
//       //       element: <Admin />,
//       //       children: dashboardRoutes,
//       //       layout: '/admin',
//       //    },
//       // ],
//    },
// ]
// export { appRoutes, sideRoutes }
export default dashboardRoutes
