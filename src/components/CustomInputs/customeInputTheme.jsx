import { createTheme } from '@mui/material/styles'
import {
   primaryColor,
   dangerColor,
   successColor,
   grayColor,
   defaultFont,
} from '../../assets/jss/material-dashboard-react'

const customInputTheme = createTheme({
   typography: {
      ...defaultFont,
   },
   marginTop: {
      marginTop: '16px',
   },
   labelRTL: {
      right: 0,
      transition: 'all 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
      '&.MuiInputLabel-shrink': {
         transform: 'translate(0, 1.5px)',
      },
   },
   underline: {
      '&:hover:not($disabled):before,&:before': {
         borderColor: `${grayColor[4]} !important`,
         borderWidth: '1px !important',
      },
      '&:after': {
         borderColor: primaryColor[0],
      },
   },
   underlineError: {
      '&:after': {
         borderColor: dangerColor[0],
      },
   },
   underlineSuccess: {
      '&:after': {
         borderColor: successColor[0],
      },
   },
   labelRootError: {
      color: dangerColor[0],
   },
   labelRootSuccess: {
      color: successColor[0],
   },
   feedback: {
      position: 'absolute',
      top: '18px',
      right: '0',
      zIndex: '2',
      display: 'block',
      width: '24px',
      height: '24px',
      textAlign: 'center',
      pointerEvents: 'none',
   },
   palette: {
      primary: {
         main: primaryColor[0],
         primary: primaryColor[0],
         danger: dangerColor[0],
         gray: grayColor[0],
         success: successColor[0],
      },
   },
   components: {
      MuiInputLabel: {
         styleOverrides: {
            root: {
               ...defaultFont,
               color: `${grayColor[3]} !important`,
               fontWeight: '400',
               fontSize: '14px',
               lineHeight: '1.42857',
               letterSpacing: 'unset',
            },
         },
      },
      MuiFormControl: {
         styleOverrides: {
            root: {
               paddingBottom: '10px',
               margin: '27px 0 0 0',
               position: 'relative',
               verticalAlign: 'unset',
            },
         },
      },
      MuiInput: {
         styleOverrides: {
            root: {
               '&:hover:not($disabled):before,&:before': {
                  borderColor: `${grayColor[4]} !important`,
                  borderWidth: '1px !important',
               },
               '&:after': {
                  borderColor: primaryColor[0],
               },
               marginTop: '16px',
            },
            disabled: {
               '&:before': {
                  backgroundColor: 'transparent !important',
               },
            },
         },
      },
   },
})

export default customInputTheme
