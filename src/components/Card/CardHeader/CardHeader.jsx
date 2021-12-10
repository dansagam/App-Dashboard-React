// import MuiCardHeader from '@mui/material/CardHeader'
import { makeStyles } from '@mui/styles'
import PropTypes from 'prop-types'
// import { styled, ThemeProvider } from '@mui/material/styles'
// import customCardHeaderTheme from './customCardHeaderTheme'
import cardHeaderStyle from './cardHeaderStyles'

const useStyles = makeStyles(cardHeaderStyle)

// const CardHeaderRoot = styled(MuiCardHeader, {
//    shouldForwardProp: (prop) => prop !== 'color',
//    slot: 'Root',
//    overridesResolver: (props, style) => [
//       style.root,
//       props.color && style[`${props.color}CardHeader`],
//    ],
// })(({ theme, plain, stats, icon }) => ({
//    ...(plain && theme.cardHeaderPlain),
//    ...(stats && theme.cardHeaderStats),
//    ...(icon && theme.cardHeaderIcon),
// }))

const CardHeader = (props) => {
   const classes = useStyles()
   const { className, children, color, plain, stats, icon, ...rest } = props
   const cardHeaderClasses = `${classes.cardHeader} 
      ${plain ? classes.cardHeaderPlain : ''} 
      ${stats ? classes.cardHeaderStats : ''} 
      ${icon ? classes.cardHeaderIcon : ''} 
      ${color ? classes[`${color}CardHeader`] : ''} 
      ${className !== undefined ? className : ''} `
   return (
      <div className={cardHeaderClasses} {...rest}>
         {children}
      </div>
      // <ThemeProvider theme={customCardHeaderTheme}>
      //    <CardHeaderRoot
      //       {...rest}
      //       stats={stats}
      //       icon={icon}
      //       plain={plain}
      //       color={color}
      //       className={className}
      //    >
      //       {children}
      //    </CardHeaderRoot>
      // </ThemeProvider>
   )
}

CardHeader.propTypes = {
   className: PropTypes.string,
   color: PropTypes.oneOf([
      'warning',
      'success',
      'danger',
      'info',
      'primary',
      'rose',
   ]),
   plain: PropTypes.bool,
   stats: PropTypes.bool,
   icon: PropTypes.bool,
   children: PropTypes.node,
}
export default CardHeader
