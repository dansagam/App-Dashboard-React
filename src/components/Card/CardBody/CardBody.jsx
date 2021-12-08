import MuiCardBody from '@mui/material/CardContent'
import { styled, ThemeProvider } from '@mui/material/styles'
import PropTypes from 'prop-types'
// import styles from './cardBodyStyles'
import customCardBodyTheme from './customCardBodyTheme'

const CardBodyRoot = styled(MuiCardBody, {
   overridesResolver: (props, style) => [
      style.root,
      props.profile && style.profile,
      props.plain && style.plain,
   ],
   // eslint-disable-next-line no-unused-vars
})(({ theme }) => ({}))
const CardBody = (props) => {
   const { className, children, plain, profile, ...rest } = props
   return (
      <ThemeProvider theme={customCardBodyTheme}>
         <CardBodyRoot
            className={className}
            plain={plain}
            profile={profile}
            {...rest}
         >
            {children}
         </CardBodyRoot>
      </ThemeProvider>
   )
}

CardBody.propTypes = {
   className: PropTypes.string,
   plain: PropTypes.bool,
   profile: PropTypes.bool,
   children: PropTypes.node,
}
export default CardBody
