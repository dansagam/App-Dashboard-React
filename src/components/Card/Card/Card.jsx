import {
   experimentalStyled as styled,
   // makeStyles,
   ThemeProvider,
} from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import PropTypes from 'prop-types'
// import styles from './cardStyles'
import customCardTheme from './customCardTheme'

const CardRoot = styled(MuiCard, {
   shouldForwardProp: (prop) => prop !== 'size' && prop !== 'color',
   overridesResolver: (props, styl) => [styl.root],
})(({ theme, plain, profile, chart }) => ({
   // ...styles.card,
   ...(plain && theme.cardPlain),
   ...(profile && theme.cardProfile),
   ...(chart && theme.cardChart),
}))
const Card = (props) => {
   const { className, children, plain, profile, chart, ...rest } = props
   return (
      <ThemeProvider theme={customCardTheme}>
         <CardRoot
            className={className}
            plain={plain}
            profile={profile}
            chart={chart}
            {...rest}
         >
            {children}
         </CardRoot>
      </ThemeProvider>
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
