import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import MuiIcon from '@mui/material/Icon'
import styles from './cardIconStyles'

const CardIconRoot = styled(MuiIcon)(({ color }) => ({
   ...styles.cardIcon,
   ...(color && styles[`${color}CardHeader`]),
}))
const CardIcon = () => {
   const { className, children, color, ...rest } = props
   return (
      <CardIconRoot {...rest} color={color} className={className}>
         {children}
      </CardIconRoot>
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
