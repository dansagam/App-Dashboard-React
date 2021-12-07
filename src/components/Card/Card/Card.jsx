// eslint-disable-next-line no-unused-vars
import { experimentalStyled as styled, makeStyles } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import PropTypes from 'prop-types'
import styles from './cardStyles'

const CardRoot = styled(MuiCard, {
   shouldForwardProp: (prop) => prop !== 'size' && prop !== 'color',
})((className, plain, profile, chart) => ({
   ...styles.card,
   ...(plain && styles.cardPlain),
   ...(profile && styles.cardProfile),
   ...(chart && styles.cardChart),
}))
const Card = (props) => {
   const { className, children, plain, profile, chart, ...rest } = props
   return (
      <CardRoot className={className} {...rest}>
         {children}
      </CardRoot>
   )
}

Card.propTypes = {
   className: PropTypes.string,
   plain: PropTypes.bool,
   profile: PropTypes.bool,
   chart: PropTypes.bool,
   children: PropTypes.node,
}
export default Card
