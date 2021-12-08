import { createTheme } from '@mui/material/styles'
import {
   warningCardHeader,
   successCardHeader,
   dangerCardHeader,
   infoCardHeader,
   primaryCardHeader,
   roseCardHeader,
   grayColor,
} from '../../../assets/jss/material-dashboard-react'

const customCardIconTheme = createTheme({
   palette: {
      primary: {
         main: '#f01',
      },
   },
   warningCardHeader,
   successCardHeader,
   dangerCardHeader,
   infoCardHeader,
   primaryCardHeader,
   roseCardHeader,
   components: {
      MuiIcon: {
         styleOverrides: {
            root: {
               '&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,': {
                  borderRadius: '3px',
                  backgroundColor: grayColor[0],
                  padding: '15px',
                  marginTop: '-20px',
                  marginRight: '15px',
                  float: 'left',
               },
               '&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader': {
                  borderRadius: '3px',
                  backgroundColor: grayColor[0],
                  padding: '15px',
                  marginTop: '-20px',
                  marginRight: '15px',
                  float: 'left',
               },
            },
            warningCardHeader,
            successCardHeader,
            dangerCardHeader,
            infoCardHeader,
            primaryCardHeader,
            roseCardHeader,
         },
         variants: [
            {
               props: { color: 'primary' },
            },
            {
               props: { color: 'warning' },
            },
            {
               props: { color: 'success' },
            },
            {
               props: { color: 'info' },
            },
            {
               props: { color: 'danger' },
            },
            {
               props: { color: 'rose' },
            },
         ],
      },
   },
})

export default customCardIconTheme
