import MuiCardBody from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import styles from './cardBodyStyles'

const CardBodyRoot = styled(MuiCardBody)(({ plain, profile }) => ({
   ...(plain && styles.cardBodyPlain),
   ...styles.cardBody,
   ...(profile && styles.cardBodyProfile),
}))
const CardBody = () => {
   const { className, children, plain, profile, ...rest } = props
   return (
      <CardBodyRoot
         className={className}
         plain={plain}
         profile={profile}
         {...rest}
      >
         {children}
      </CardBodyRoot>
   )
}

CardBody.propTypes = {
   className: PropTypes.string,
   plain: PropTypes.bool,
   profile: PropTypes.bool,
   children: PropTypes.node,
}
export default CardBody
