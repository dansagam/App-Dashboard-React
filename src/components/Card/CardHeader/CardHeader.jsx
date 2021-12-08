import MuiCardHeader from '@mui/material/CardHeader'
import PropTypes from 'prop-types'
import { styled, ThemeProvider } from '@mui/material/styles'
import customCardHeaderTheme from './customCardHeaderTheme'
// import styles from './cardHeaderStyles'

const CardHeaderRoot = styled(MuiCardHeader, {
   shouldForwardProp: (prop) => prop !== 'color',
   slot: 'Root',
   overridesResolver: (props, style) => [
      style.root,
      props.color && style[`${props.color}CardHeader`],
   ],
})(({ theme, plain, stats, icon }) => ({
   ...(plain && theme.cardHeaderPlain),
   ...(stats && theme.cardHeaderStats),
   ...(icon && theme.cardHeaderIcon),
}))

const CardHeader = (props) => {
   const { className, children, color, plain, stats, icon, ...rest } = props
   return (
      <ThemeProvider theme={customCardHeaderTheme}>
         <CardHeaderRoot
            {...rest}
            stats={stats}
            icon={icon}
            plain={plain}
            color={color}
            className={className}
         >
            {children}
         </CardHeaderRoot>
      </ThemeProvider>
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
