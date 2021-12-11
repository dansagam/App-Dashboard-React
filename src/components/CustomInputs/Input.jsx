// import {
//    experimentalStyled as styled,
//    // eslint-disable-next-line no-unused-vars
//    makeStyles,
//    ThemeProvider,
// } from '@mui/material/styles'
import PropTypes from 'prop-types'

// @material-ui/core components
import { makeStyles } from '@mui/styles'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
// @material-ui/icons
import Clear from '@mui/icons-material/Clear'
import Check from '@mui/icons-material/Check'

import styles from './customInputStyles'
// import customInputTheme from './customeInputTheme'

const useStyles = makeStyles(styles)
const CustomInput = (props) => {
   const classes = useStyles()
   const {
      formControlProps,
      labelText,
      id,
      labelProps,
      inputProps,
      error,
      success,
      // eslint-disable-next-line no-unused-vars
      rtlActive,
   } = props

   const labelClasses = `${error ? classes.labelRootError : ''} 
      ${success && !error ? classes.labelRootSuccess : ''} 
      ${rtlActive ? classes.labelRTL : ''} `
   const underlineClasses = `${classes.underline} 
      ${error ? classes.underlineError : ''} 
      ${success && !error ? classes.underlineSuccess : ''} `
   const marginTop = `${labelText === undefined ? classes.marginTop : ''} `

   const newInputProps = {
      maxLength:
         inputProps && inputProps.maxLength ? inputProps.maxLength : undefined,
      minLength:
         inputProps && inputProps.minLength ? inputProps.minLength : undefined,
      step: inputProps && inputProps.step ? inputProps.step : undefined,
   }
   return (
      <FormControl
         {...formControlProps}
         className={`${formControlProps.className} ${classes.formControl}`}
      >
         {labelText !== undefined ? (
            <InputLabel
               className={classes.labelRoot + labelClasses}
               htmlFor={id}
               {...labelProps}
            >
               {labelText}
            </InputLabel>
         ) : null}
         <Input
            classes={{
               root: marginTop,
               disabled: classes.disabled,
               underline: underlineClasses,
            }}
            id={id}
            {...inputProps}
            inputProps={newInputProps}
         />
         {error ? (
            <Clear
               className={`${classes.feedback} ${classes.labelRootError}`}
            />
         ) : success ? (
            <Check
               className={`${classes.feedback} ${classes.labelRootSuccess}`}
            />
         ) : null}
      </FormControl>
   )
}
CustomInput.propTypes = {
   labelText: PropTypes.node,
   labelProps: PropTypes.object,
   id: PropTypes.string,
   inputProps: PropTypes.object,
   formControlProps: PropTypes.object,
   error: PropTypes.bool,
   success: PropTypes.bool,
   rtlActive: PropTypes.bool,
}

export default CustomInput

// eslint-disable-next-line no-unused-vars
// const FormControlRoot = styled(MuiFormControl, {
//    overridesResolver: (props, styl) => [styl.root],
//    // eslint-disable-next-line no-unused-vars
// })(({ theme }) => ({
//    // ...styles.formControl,
// }))

// const InputLabelRoot = styled(MuiInputLabel, {
//    overridesResolver: (props, styl) => [styl.root],
//    // eslint-disable-next-line no-unused-vars
// })(({ theme, error, success, rtlActive }) => ({
//    ...(error && theme.labelRootError),
//    // ...styles.labelRoot,
//    ...(success && !error && theme.labelRootSuccess),
//    ...(rtlActive && theme.labelRTL),
// }))
// const InputRoot = styled(MuiInput, {
//    overridesResolver: (props, styl) => [styl.root],
// })(({ theme, error, success, labelText, disabled }) => ({
//    ...(labelText === undefined && theme.marginTop),
//    ...(error && theme.underlineError),
//    ...(success && !error && theme.underlineSuccess),
//    ...(disabled && theme.disabled),
// }))
// const ClearIconRoot = styled(ClearIcon)(({ theme }) => ({
//    ...theme.feedback,
//    ...theme.labelRootError,
// }))
// const CheckIconRoot = styled(CheckIcon)(({ theme }) => ({
//    ...theme.feedback,
//    ...theme.labelRootSuccess,
// }))

// <ThemeProvider theme={customInputTheme}>
//    <FormControlRoot
//       {...formControlProps}
//       className={formControlProps.className}
//    >
//       {labelText !== undefined ? (
//          <InputLabelRoot htmlFor={id} {...labelProps}>
//             {labelText}
//          </InputLabelRoot>
//       ) : null}
//       <InputRoot
//          // classes={{
//          //    root: marginTop,
//          //    disabled: styles.disabled,
//          //    underline: underlineClasses,
//          // }}
//          id={id}
//          {...inputProps}
//          inputProps={newInputProps}
//       />
//       {error ? <ClearIconRoot /> : success ? <CheckIconRoot /> : null}
//    </FormControlRoot>
// </ThemeProvider>
