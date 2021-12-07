import MuiCardActions from '@mui/material/CardActions'
import { styled } from '@mui/material/styles'
import styles from './cardFooterStyles'

const CardFooterRoot = styled(MuiCardActions)(
   ({ plain, profile, stats, chart }) => ({
      ...styles.cardFooter,
      ...(plain && styles.cardFooterPlain),
      ...(profile && styles.cardFooterProfile),
      ...(chart && styles.cardFooterChart),
      ...(stats && styles.cardFooterStats),
   })
)

const CardFooter = (props) => {
   const { className, children, plain, profile, stats, chart, ...rest } = props
   return (
      <CardFooterRoot
         {...rest}
         plain={plain}
         chart={chart}
         profile={profile}
         stats={stats}
         className={className}
      >
         {children}
      </CardFooterRoot>
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
