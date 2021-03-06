import { createTheme } from '@mui/material/styles'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'
import {
   grayColor,
   primaryColor,
   infoColor,
   successColor,
   warningColor,
   dangerColor,
   roseColor,
   whiteColor,
   blackColor,
   hexToRgb,
} from '../../assets/jss/material-dashboard-react'

const buttonTheme = createTheme({
   palette: {
      primary: {
         primary: primaryColor[0],
         info: infoColor[0],
         success: successColor[0],
         warning: warningColor[0],
         gray: grayColor[0],
         danger: dangerColor[0],
         rose: roseColor[0],
         white: whiteColor[0],
         black: blackColor[0],
      },
   },
   components: {
      MuiButton: {
         variants: [
            {
               props: { color: 'white' },
               style: {
                  [`& .${outlinedInputClasses.focused}`]: {
                     backgroundColor: whiteColor,
                     color: grayColor[0],
                  },
                  '&,&:focus,&:hover': {
                     backgroundColor: whiteColor,
                     color: grayColor[0],
                  },
               },
            },
            {
               props: { color: 'rose' },
               style: {
                  backgroundColor: roseColor[0],
                  boxShadow: `0 2px 2px 0 rgba(${hexToRgb(
                     roseColor[0]
                  )}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
                     roseColor[0]
                  )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(roseColor[0])}, 0.12)`,
                  '&:hover,&:focus': {
                     backgroundColor: roseColor[0],
                     boxShadow: `0 14px 26px -12px rgba(${hexToRgb(
                        roseColor[0]
                     )}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
                        blackColor
                     )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(
                        roseColor[0]
                     )}, 0.2)`,
                  },
               },
            },
            {
               props: { color: 'primary' },
               style: {
                  backgroundColor: primaryColor[0],
                  boxShadow: `0 2px 2px 0 rgba(${hexToRgb(
                     primaryColor[0]
                  )}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
                     primaryColor[0]
                  )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(
                     primaryColor[0]
                  )}, 0.12)`,
                  '&:hover,&:focus': {
                     backgroundColor: primaryColor[0],
                     boxShadow: `0 14px 26px -12px rgba(${hexToRgb(
                        primaryColor[0]
                     )}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
                        blackColor
                     )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(
                        primaryColor[0]
                     )}, 0.2)`,
                  },
               },
            },
            {
               props: { color: 'info' },
               style: {
                  backgroundColor: infoColor[0],
                  boxShadow: `0 2px 2px 0 rgba(${hexToRgb(
                     infoColor[0]
                  )}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
                     infoColor[0]
                  )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(infoColor[0])}, 0.12)`,
                  '&:hover,&:focus': {
                     backgroundColor: infoColor[0],
                     boxShadow: `0 14px 26px -12px rgba(${hexToRgb(
                        infoColor[0]
                     )}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
                        blackColor
                     )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(
                        infoColor[0]
                     )}, 0.2)`,
                  },
               },
            },
            {
               props: { color: 'success' },
               style: {
                  backgroundColor: successColor[0],
                  boxShadow: `0 2px 2px 0 rgba(${hexToRgb(
                     successColor[0]
                  )}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
                     successColor[0]
                  )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(
                     successColor[0]
                  )}, 0.12)`,
                  '&:hover,&:focus': {
                     backgroundColor: successColor[0],
                     boxShadow: `0 14px 26px -12px rgba(${hexToRgb(
                        successColor[0]
                     )}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
                        blackColor
                     )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(
                        successColor[0]
                     )}, 0.2)`,
                  },
               },
            },
            {
               props: { color: 'warning' },
               style: {
                  backgroundColor: warningColor[0],
                  boxShadow: `0 2px 2px 0 rgba(${hexToRgb(
                     warningColor[0]
                  )}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
                     warningColor[0]
                  )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(
                     warningColor[0]
                  )}, 0.12)`,
                  '&:hover,&:focus': {
                     backgroundColor: warningColor[0],
                     boxShadow: `0 14px 26px -12px rgba(${hexToRgb(
                        warningColor[0]
                     )}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
                        blackColor
                     )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(
                        warningColor[0]
                     )}, 0.2)`,
                  },
               },
            },
            {
               props: { color: 'danger' },
               style: {
                  backgroundColor: dangerColor[0],
                  boxShadow: `0 2px 2px 0 rgba(${hexToRgb(
                     dangerColor[0]
                  )}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
                     dangerColor[0]
                  )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(
                     dangerColor[0]
                  )}, 0.12)`,
                  '&:hover,&:focus': {
                     backgroundColor: dangerColor[0],
                     boxShadow: `0 14px 26px -12px rgba(${hexToRgb(
                        dangerColor[0]
                     )}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
                        blackColor
                     )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(
                        dangerColor[0]
                     )}, 0.2)`,
                  },
               },
            },
            {
               props: { color: 'transparent' },
               style: {
                  '&,&:focus,&:hover': {
                     color: 'inherit',
                     background: 'transparent',
                     boxShadow: 'none',
                  },
               },
            },
            {
               props: { size: 'small' },
               style: {
                  padding: '0.40625rem 1.25rem',
                  fontSize: '0.6875rem',
                  lineHeight: '1.5',
                  borderRadius: '0.2rem',
               },
            },
            {
               props: { size: 'large' },
               style: {
                  padding: '1.125rem 2.25rem',
                  fontSize: '0.875rem',
                  lineHeight: '1.333333',
                  borderRadius: '0.2rem',
               },
            },
         ],
         styleOverrides: {
            disabled: {
               opacity: '0.65',
               pointerEvents: 'none',
            },
            root: {
               minHeight: 'auto',
               minWidth: 'auto',
               backgroundColor: grayColor[0],
               color: whiteColor,
               boxShadow: `0 2px 2px 0 rgba(${hexToRgb(
                  grayColor[0]
               )}, 0.14), 0 3px 1px -2px rgba(${hexToRgb(
                  grayColor[0]
               )}, 0.2), 0 1px 5px 0 rgba(${hexToRgb(grayColor[0])}, 0.12)`,
               border: 'none',
               borderRadius: '3px',
               position: 'relative',
               padding: '12px 30px',
               margin: '.3125rem 1px',
               fontSize: '12px',
               fontWeight: '400',
               textTransform: 'uppercase',
               letterSpacing: '0',
               willChange: 'box-shadow, transform',
               transition:
                  'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
               lineHeight: '1.42857143',
               textAlign: 'center',
               whiteSpace: 'nowrap',
               verticalAlign: 'middle',
               touchAction: 'manipulation',
               cursor: 'pointer',
               '&:hover,&:focus': {
                  color: whiteColor,
                  backgroundColor: grayColor[0],
                  boxShadow: `0 14px 26px -12px rgba(${hexToRgb(
                     grayColor[0]
                  )}, 0.42), 0 4px 23px 0px rgba(${hexToRgb(
                     blackColor
                  )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(
                     grayColor[0]
                  )}, 0.2)`,
               },
               '& .fab,& .fas,& .far,& .fal, &.material-icons': {
                  position: 'relative',
                  display: 'inline-block',
                  top: '0',
                  marginTop: '-1em',
                  marginBottom: '-1em',
                  fontSize: '1.1rem',
                  marginRight: '4px',
                  verticalAlign: 'middle',
               },
               '& svg': {
                  position: 'relative',
                  display: 'inline-block',
                  top: '0',
                  width: '18px',
                  height: '18px',
                  marginRight: '4px',
                  verticalAlign: 'middle',
               },
               '&$justIcon': {
                  '& .fab,& .fas,& .far,& .fal,& .material-icons': {
                     marginTop: '0px',
                     position: 'absolute',
                     width: '100%',
                     transform: 'none',
                     left: '0px',
                     top: '0px',
                     height: '100%',
                     lineHeight: '41px',
                     fontSize: '20px',
                  },
               },
            },
         },
      },
   },
})

export default buttonTheme
