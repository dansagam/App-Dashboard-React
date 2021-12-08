import { createTheme } from '@mui/material/styles'

const customCardBodyTheme = createTheme({
   components: {
      MuiCardContent: {
         styleOverrides: {
            root: {
               padding: '0.9375rem 20px',
               flex: '1 1 auto',
               WebkitBoxFlex: '1',
               position: 'relative',
            },
            profile: {
               marginTop: '15px',
            },
            plain: {
               paddingLeft: '5px',
               paddingRight: '5px',
            },
         },
      },
   },
})

export default customCardBodyTheme
