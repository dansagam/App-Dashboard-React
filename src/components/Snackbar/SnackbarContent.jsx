import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
// import { styled, ThemeProvider } from '@mui/material/styles'
import Snack from '@mui/material/SnackbarContent'
import IconButton from '@mui/material/IconButton'
import Close from '@mui/icons-material/Close'

import snackbarContentStyle from './snackbarStyles'

const useStyles = makeStyles(snackbarContentStyle)

const SnackbarContent = (props) => {
   const classes = useStyles()
   const { message, color, close, icon, rtlActive } = props
   let action = []
   if (close !== undefined) {
      action = [
         <IconButton
            className={classes.iconButton}
            key="close"
            aria-label="Close"
            color="inherit"
         >
            <Close className={classes.close} />
         </IconButton>,
      ]
   }
   return (
      <Snack
         message={
            <div>
               {icon !== undefined ? (
                  <props.icon className={classes.icon} />
               ) : null}
               <span className={messageClasses}>{message}</span>
            </div>
         }
         classes={{
            root: `${classes.root} ${classes[color]}`,
            message: classes.message,
            action: rtlActive ? classes.actionRTL : '',
            // classNames({ [classes.actionRTL]: rtlActive }),
         }}
         action={action}
      />
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

// const SnackbarRoot = styled(MuiSnackbarContent, {
//    name: 'MySnackComponent',
//    slot: 'Root',
//    overridesResolver: (props, style) => [
//       style.root,
//       props.message && style.message,
//       props.color && style[props.color],
//       props.rtlActive && style.actionRTL,
//    ],
// })(() => ({}))
// const IconButtonRoot = styled(MuiIconButton, {
//    overridesResolver: (props, style) => [style.root],
// })(() => ({}))
// const CloseRoot = styled(MuiClose, {
//    shouldForwardProp: (prop) =>
//       prop !== 'color' && prop !== 'variant' && prop !== 'sx',
//    name: 'MyCustomIcon',
//    slot: 'Root',
//    overridesResolver: (props, style) => [style.root],
// })(() => ({}))
// const SpanRoot = styled('span', {
//    shouldForwardProp: (prop) =>
//       prop !== 'color' && prop !== 'variant' && prop !== 'sx',
//    name: 'MySpanComponent',
//    slot: 'Root',
//    overridesResolver: (props, style) => [
//       style.root,
//       props.icon !== undefined && style.iconMessage,
//    ],
// })(() => ({}))

// if (close !== undefined) {
//    action = [
//       <IconButtonRoot key="close" aria-label="Close" color="inherit">
//          <CloseRoot />
//       </IconButtonRoot>,
//    ]
// }

// <ThemeProvider theme={snackbarTheme}>
//    <SnackbarRoot
//       message={
//          <div>
//             {icon !== undefined ? (
//                <props.icon className={classes.icon} />
//             ) : null}
//             <SpanRoot icon>{message}</SpanRoot>
//          </div>
//       }
//       color={color}
//       rtlActive={rtlActive}
//       classes
//       action={action}
//    />
// </ThemeProvider>
