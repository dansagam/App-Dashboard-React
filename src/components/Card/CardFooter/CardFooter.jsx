// import MuiCardActions from '@mui/material/CardActions'
// import { styled, ThemeProvider } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import PropTypes from 'prop-types'
import cardFooterStyle from './cardFooterStyles'
// import customCardFooterTheme from './customCardFooterTheme'
const useStyles = makeStyles(cardFooterStyle)

// const CardFooterRoot = styled(MuiCardActions, {
//    overridesResolver: (props, style) => [style.root],
// })(({ theme, plain, profile, stats, chart }) => ({
//    ...(plain && theme.cardFooterPlain),
//    ...(profile && theme.cardFooterProfile),
//    ...(chart && theme.cardFooterChart),
//    ...(stats && theme.cardFooterStats),
// }))

const CardFooter = (props) => {
   const classes = useStyles()
   const { className, children, plain, profile, stats, chart, ...rest } = props
   const cardFooterClasses = `${classes.cardFooter} 
      ${plain ? classes.cardFooterPlain : ''} 
      ${profile ? classes.cardFooterProfile : ''} 
      ${stats ? classes.cardFooterStats : ''} 
      ${chart ? classes.cardFooterChart : ''}
      ${className !== undefined ? className : ''}`
   return (
      <div className={cardFooterClasses} {...rest}>
         {children}
      </div>
      // <ThemeProvider theme={customCardFooterTheme}>
      //    <CardFooterRoot
      //       {...rest}
      //       plain={plain}
      //       chart={chart}
      //       profile={profile}
      //       stats={stats}
      //       className={className}
      //    >
      //       {children}
      //    </CardFooterRoot>
      // </ThemeProvider>
   )
}

CardFooter.propTypes = {
   className: PropTypes.string,
   plain: PropTypes.bool,
   profile: PropTypes.bool,
   stats: PropTypes.bool,
   chart: PropTypes.bool,
   children: PropTypes.node,
}

export default CardFooter
