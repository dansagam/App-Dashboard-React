import {
   warningCardHeader,
   successCardHeader,
   dangerCardHeader,
   infoCardHeader,
   primaryCardHeader,
   roseCardHeader,
   grayColor,
} from '../../../assets/jss/material-dashboard-react'

const cardIconStyle = {
   cardIcon: {
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
}

export default cardIconStyle
