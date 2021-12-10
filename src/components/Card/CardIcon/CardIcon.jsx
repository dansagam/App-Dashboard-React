import PropTypes from 'prop-types'
// import { styled, ThemeProvider } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
// import MuiIcon from '@mui/material/Icon'
import cardIconStyle from './cardIconStyles'
// import customCardIconTheme from './customeCardIconTheme'

const useStyles = makeStyles(cardIconStyle)

// const CardIconRoot = styled(MuiIcon, {
//    shouldForwardProp: (prop) => prop !== 'color',
//    overridesResolver: (props, style) => [
//       style.root,
//       props.color && style[`${props.color}CardHeader`],
//    ],
//    // eslint-disable-next-line no-unused-vars
// })(({ theme }) => ({}))
const CardIcon = () => {
   const classes = useStyles()
   const { className, children, color, ...rest } = props
   const cardIconClasses = `${classes.cardIcon} 
      ${color ? classes[`${color}CardHeader`] : ''} 
      ${className !== undefined ? className : ''} `
   return (
      <div className={cardIconClasses} {...rest}>
         {children}
      </div>
      // <ThemeProvider theme={customCardIconTheme}>
      //    <CardIconRoot {...rest} color={color} className={className}>
      //       {children}
      //    </CardIconRoot>
      // </ThemeProvider>
   )
}

CardIcon.propTypes = {
   className: PropTypes.string,
   color: PropTypes.oneOf([
      'warning',
      'success',
      'danger',
      'info',
      'primary',
      'rose',
   ]),
   children: PropTypes.node,
}
export default CardIcon
