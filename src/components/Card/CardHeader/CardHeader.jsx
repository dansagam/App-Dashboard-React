import MuiCardHeader from '@mui/material/CardHeader'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import styles from './cardHeaderStyles'

const CardHeaderRoot = styled(MuiCardHeader, {
   shouldForwardProp: (prop) => prop !== 'color',
})(({ color }) => ({
   ...(color && styles[`${color}CardHeader`]),
   ...styles.cardHeader,
   ...(plain && styles.cardHeaderPlain),
   ...(stats && styles.cardHeaderStats),
   ...(icon && styles.cardHeaderIcon),
}))

const CardHeader = (props) => {
   const { className, children, color, plain, stats, icon, ...rest } = props
   return (
      <CardHeaderRoot {...rest} color={color} className={className}>
         {children}
      </CardHeaderRoot>
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
