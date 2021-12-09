/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types'
import { styled, ThemeProvider } from '@mui/material/styles'
import MuiIconButton from '@mui/material/IconButton'
import MuiSnack from '@mui/material/Snackbar'
import MuiClose from '@mui/icons-material/Close'
import snackbarTheme from './snackbarTheme'

const SnackbarRoot = styled(MuiSnack, {
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
const Snackbar = (props) => {
   const {
      message,
      color,
      close,
      icon,
      place,
      open,
      rtlActive,
      closeNotification,
   } = props
   let action = []
   if (close !== undefined) {
      action = [
         <IconButtonRoot
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => closeNotification()}
         >
            <CloseRoot />
         </IconButtonRoot>,
      ]
   }
   return (
      <ThemeProvider theme={snackbarTheme}>
         <SnackbarRoot
            anchorOrigin={{
               vertical: place.indexOf('t') === -1 ? 'bottom' : 'top',
               horizontal:
                  place.indexOf('l') !== -1
                     ? 'left'
                     : place.indexOf('c') !== -1
                        ? 'center'
                        : 'right',
            }}
            rtlActive={rtlActive}
            open={open}
            color={color}
            message={
               <div>
                  {icon !== undefined ? (
                     <props.icon className={classes.icon} />
                  ) : null}
                  <SpanRoot className={messageClasses}>{message}</SpanRoot>
               </div>
            }
            action={action}
            ContentProps
         />
      </ThemeProvider>
   )
}

Snackbar.propTypes = {
   message: PropTypes.node.isRequired,
   color: PropTypes.oneOf(['info', 'success', 'warning', 'danger', 'primary']),
   close: PropTypes.bool,
   icon: PropTypes.object,
   place: PropTypes.oneOf(['tl', 'tr', 'tc', 'br', 'bl', 'bc']),
   open: PropTypes.bool,
   rtlActive: PropTypes.bool,
   closeNotification: PropTypes.func,
}
export default Snackbar
