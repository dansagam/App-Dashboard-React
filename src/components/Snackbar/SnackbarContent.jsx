import PropTypes from 'prop-types'
import { styled, ThemeProvider } from '@mui/material/styles'
import MuiSnackbarContent from '@mui/material/SnackbarContent'
import MuiIconButton from '@mui/material/IconButton'
import MuiClose from '@mui/icons-material/Close'

const SnackbarRoot = styled(MuiSnackbarContent, {
   name: 'MySnackComponent',
   slot: 'Root',
   overridesResolver: (props, style) => [
      style.root,
      props.message && style.message,
      props.color && style[props.color],
      props.rtlActive && style.actionRTL,
   ],
})(() => ({}))
const IconButtonRoot = styled(MuiIconButton, {
   overridesResolver: (props, style) => [style.root],
})(() => ({}))
const CloseRoot = styled(MuiClose, {
   shouldForwardProp: (prop) =>
      prop !== 'color' && prop !== 'variant' && prop !== 'sx',
   name: 'MyCustomIcon',
   slot: 'Root',
   overridesResolver: (props, style) => [style.root],
})(() => ({}))
const SpanRoot = styled('span', {
   shouldForwardProp: (prop) =>
      prop !== 'color' && prop !== 'variant' && prop !== 'sx',
   name: 'MySpanComponent',
   slot: 'Root',
   overridesResolver: (props, style) => [
      style.root,
      props.icon !== undefined && style.iconMessage,
   ],
})(() => ({}))

const SnackbarContent = (props) => {
   const { message, color, close, icon, rtlActive } = props
   let action = []
   if (close !== undefined) {
      action = [
         <IconButtonRoot key="close" aria-label="Close" color="inherit">
            <CloseRoot />
         </IconButtonRoot>,
      ]
   }
   return (
      <ThemeProvider theme={snackbarTheme}>
         <SnackbarRoot
            message={
               <div>
                  {icon !== undefined ? (
                     <props.icon className={classes.icon} />
                  ) : null}
                  <SpanRoot icon>{message}</SpanRoot>
               </div>
            }
            color={color}
            rtlActive={rtlActive}
            classes
            action={action}
         />
      </ThemeProvider>
   )
}

SnackbarContent.propTypes = {
   message: PropTypes.node.isRequired,
   color: PropTypes.oneOf(['info', 'success', 'warning', 'danger', 'primary']),
   close: PropTypes.bool,
   icon: PropTypes.object,
   rtlActive: PropTypes.bool,
}
export default SnackbarContent
