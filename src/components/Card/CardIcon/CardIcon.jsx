import PropTypes from 'prop-types'
import { styled, ThemeProvider } from '@mui/material/styles'
import MuiIcon from '@mui/material/Icon'
// import styles from './cardIconStyles'
import customCardIconTheme from './customeCardIconTheme'

const CardIconRoot = styled(MuiIcon, {
   shouldForwardProp: (prop) => prop !== 'color',
   overridesResolver: (props, style) => [
      style.root,
      props.color && style[`${props.color}CardHeader`],
   ],
   // eslint-disable-next-line no-unused-vars
})(({ theme }) => ({}))
const CardIcon = () => {
   const { className, children, color, ...rest } = props
   return (
      <ThemeProvider theme={customCardIconTheme}>
         <CardIconRoot {...rest} color={color} className={className}>
            {children}
         </CardIconRoot>
      </ThemeProvider>
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
