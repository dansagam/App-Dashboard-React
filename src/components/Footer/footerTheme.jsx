import { createTheme } from '@mui/material/styles'
import {
   defaultFont,
   container,
   primaryColor,
   grayColor,
} from '../../assets/jss/material-dashboard-react'

const footerTheme = createTheme({
   components: {
      MyFooterComponent: {
         styleOverrides: {
            root: {
               bottom: '0',
               borderTop: `1px solid ${grayColor[11]}`,
               padding: '15px 0',
               ...defaultFont,
            },
         },
      },
      MyDivContainer: {
         styleOverrides: {
            root: {
               container,
            },
         },
      },
      MyALinkComponent: {
         styleOverrides: {
            root: {
               color: primaryColor,
               textDecoration: 'none',
               backgroundColor: 'transparent',
            },
            block: {
               color: 'inherit',
               padding: '15px',
               textTransform: 'uppercase',
               borderRadius: '3px',
               textDecoration: 'none',
               position: 'relative',
               display: 'block',
               ...defaultFont,
               fontWeight: '500',
               fontSize: '12px',
            },
         },
      },
      MuiListItem: {
         styleOverrides: {
            root: {
               display: 'inline-block',
               padding: '0px',
               width: 'auto',
            },
         },
      },
      MuiList: {
         styleOverrides: {
            root: {
               marginBottom: '0',
               padding: '0',
               marginTop: '0',
            },
         },
      },
      MyDivLeftComponent: {
         styleOverrides: {
            root: {
               float: 'left!important',
               display: 'block',
            },
         },
      },
      MyDivRightComponent: {
         styleOverrides: {
            root: {
               padding: '15px 0',
               margin: '0',
               fontSize: '14px',
               float: 'right!important',
            },
         },
      },
   },
})
export default footerTheme
