import MuiButton from '@mui/material/Button'
import {
   experimentalStyled as styled,
   // makeStyles,
   ThemeProvider,
} from '@mui/material/styles'
import PropTypes from 'prop-types'
// import styles from './buttonStyles'
import customButtonTheme from './customButtonTheme'

// const useStyles = makeStyles(styles)

const ButtonRoot = styled(MuiButton, {
   shouldForwardProp: (prop) => prop !== 'size' && prop !== 'color',
   name: 'MyButtonComponent',
   slot: 'Root',
   overridesResolver: (props, styl) => [
      styl.root,
      props.color && styl[props.color],
      props.size && styl[props.size],
      props.round && styl.round,
      props.link && styl.link,
      props.block && styl.block,
      props.simple && styl.simple,
      props.justIcon && styl.justIcon,
   ],
})(
   // eslint-disable-next-line no-unused-vars
   ({ theme }) => ({})
)

const RegularButton = (props) => {
   const {
      color,
      round,
      children,
      disabled,
      simple,
      size,
      block,
      link,
      justIcon,
      className,
      muiClasses,
      ...rest
   } = props
   return (
      <ThemeProvider theme={customButtonTheme}>
         <ButtonRoot
            block={block}
            color={color}
            disabled={disabled}
            simple={simple}
            link={link}
            size={size}
            round={round}
            classes={muiClasses}
            justIcon={justIcon}
            {...rest}
         >
            {children}
         </ButtonRoot>
      </ThemeProvider>
      // <MuiButton {...rest} classes={muiClasses} className={btnClasses}>
      //    {children}
      // </MuiButton>
   )
}

RegularButton.propTypes = {
   color: PropTypes.oneOf([
      'primary',
      'info',
      'success',
      'warning',
      'danger',
      'rose',
      'white',
      'transparent',
   ]),
   size: PropTypes.oneOf(['small', 'large']),
   simple: PropTypes.bool,
   round: PropTypes.bool,
   disabled: PropTypes.bool,
   block: PropTypes.bool,
   link: PropTypes.bool,
   justIcon: PropTypes.bool,
   className: PropTypes.string,
   // use this to pass the classes props from Material-UI
   muiClasses: PropTypes.object,
   children: PropTypes.node,
}

export default RegularButton

// ({
// eslint-disable-next-line no-unused-vars
// theme,
// size,
// color,
// round,
// disabled,
// simple,
// block,
// link,
// justIcon,
// }) => ({
// ...(size && styles[size]),
// ...(color && styles[color]),
// ...(round && styles.round),
// ...(disabled && styles.disabled),
// ...(simple && styles.simple),
// ...(block && styles.block),
// ...(link && styles.link),
// ...styles.button,
// ...(justIcon && styles.justIcon),
// borderRadius: 0,
// fontWeight: theme.typography.fontWeightMedium,
// fontFamily: theme.typography.h1.fontFamily,
// padding: theme.spacing(2, 4),
// fontSize: theme.typography.pxToRem(14),
// boxShadow: 'none',
// '&:active, &:focus': {
//    boxShadow: 'none',
// },
// ...(size === 'small' && {
//    padding: theme.spacing(1, 3),
//    fontSize: theme.typography.pxToRem(13),
// }),
// ...(size === 'large' && {
//    padding: theme.spacing(2, 5),
//    fontSize: theme.typography.pxToRem(16),
// }),
