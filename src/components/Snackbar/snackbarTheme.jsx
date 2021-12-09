import { createTheme } from '@mui/material/styles'
import {
   defaultFont,
   primaryBoxShadow,
   infoBoxShadow,
   successBoxShadow,
   warningBoxShadow,
   dangerBoxShadow,
   roseBoxShadow,
   whiteColor,
   blackColor,
   grayColor,
   infoColor,
   successColor,
   dangerColor,
   roseColor,
   primaryColor,
   warningColor,
   hexToRgb,
} from '../../assets/jss/material-dashboard-react'

const snackbarTheme = createTheme({
   components: {
      MySnackComponent: {
         styleOverrides: {
            root: {
               ...defaultFont,
               flexWrap: 'unset',
               position: 'relative',
               padding: '20px 15px',
               lineHeight: '20px',
               marginBottom: '20px',
               fontSize: '14px',
               backgroundColor: whiteColor,
               color: grayColor[7],
               borderRadius: '3px',
               minWidth: 'unset',
               maxWidth: 'unset',
               boxShadow: `0 12px 20px -10px rgba(${hexToRgb(
                  whiteColor
               )}, 0.28), 0 4px 20px 0px rgba(${hexToRgb(
                  blackColor
               )}, 0.12), 0 7px 8px -5px rgba(${hexToRgb(whiteColor)}, 0.2)`,
            },
            message: {
               padding: '0',
               display: 'block',
               maxWidth: '89%',
            },
            actionRTL: {
               marginLeft: '-8px',
               marginRight: 'auto',
            },
            info: {
               backgroundColor: infoColor[3],
               color: whiteColor,
               ...infoBoxShadow,
            },
            success: {
               backgroundColor: successColor[3],
               color: whiteColor,
               ...successBoxShadow,
            },
            warning: {
               backgroundColor: warningColor[3],
               color: whiteColor,
               ...warningBoxShadow,
            },
            danger: {
               backgroundColor: dangerColor[3],
               color: whiteColor,
               ...dangerBoxShadow,
            },
            primary: {
               backgroundColor: primaryColor[3],
               color: whiteColor,
               ...primaryBoxShadow,
            },
            rose: {
               backgroundColor: roseColor[3],
               color: whiteColor,
               ...roseBoxShadow,
            },
         },
      },
      MuiIconButton: {
         styleOverrides: {
            root: {
               width: '24px',
               height: '24px',
               padding: '0px',
            },
         },
      },
      MyCustomIcon: {
         styleOverrides: {
            root: {
               width: '11px',
               height: '11px',
            },
         },
      },
      MySpanComponent: {
         styleOverrides: {
            root: {
               paddingLeft: '50px',
               display: 'block',
            },
            iconMessage: {
               paddingLeft: '50px',
               display: 'block',
            },
         },
      },
   },
   infoIcon: {
      color: infoColor[3],
   },
   successIcon: {
      color: successColor[3],
   },
   warningIcon: {
      color: warningColor[3],
   },
   dangerIcon: {
      color: dangerColor[3],
   },
   primaryIcon: {
      color: primaryColor[3],
   },
   roseIcon: {
      color: roseColor[3],
   },
   top20: {
      top: '20px',
   },
   top40: {
      top: '40px',
   },
})

export default snackbarTheme
