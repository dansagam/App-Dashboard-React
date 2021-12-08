import PropTypes from 'prop-types'
import {
   experimentalStyled as styled,
   // eslint-disable-next-line no-unused-vars
   makeStyles,
   ThemeProvider,
} from '@mui/material/styles'
import MuiFormControl from '@mui/material/FormControl'
import MuiInputLabel from '@mui/material/InputLabel'
import MuiInput from '@mui/material/Input'
import ClearIcon from '@mui/icons-material/Clear'
import CheckIcon from '@mui/icons-material/Check'
// import styles from './customInputStyles'
import customInputTheme from './customeInputTheme'

// eslint-disable-next-line no-unused-vars
const FormControlRoot = styled(MuiFormControl, {
   overridesResolver: (props, styl) => [styl.root],
   // eslint-disable-next-line no-unused-vars
})(({ theme }) => ({
   // ...styles.formControl,
}))

const InputLabelRoot = styled(MuiInputLabel, {
   overridesResolver: (props, styl) => [styl.root],
   // eslint-disable-next-line no-unused-vars
})(({ theme, error, success, rtlActive }) => ({
   ...(error && theme.labelRootError),
   // ...styles.labelRoot,
   ...(success && !error && theme.labelRootSuccess),
   ...(rtlActive && theme.labelRTL),
}))
const InputRoot = styled(MuiInput, {
   overridesResolver: (props, styl) => [styl.root],
})(({ theme, error, success, labelText, disabled }) => ({
   ...(labelText === undefined && theme.marginTop),
   ...(error && theme.underlineError),
   ...(success && !error && theme.underlineSuccess),
   ...(disabled && theme.disabled),
}))
const ClearIconRoot = styled(ClearIcon)(({ theme }) => ({
   ...theme.feedback,
   ...theme.labelRootError,
}))
const CheckIconRoot = styled(CheckIcon)(({ theme }) => ({
   ...theme.feedback,
   ...theme.labelRootSuccess,
}))
const CustomInput = (props) => {
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

   const newInputProps = {
      maxLength:
         inputProps && inputProps.maxLength ? inputProps.maxLength : undefined,
      minLength:
         inputProps && inputProps.minLength ? inputProps.minLength : undefined,
      step: inputProps && inputProps.step ? inputProps.step : undefined,
   }
   return (
      <ThemeProvider theme={customInputTheme}>
         <FormControlRoot
            {...formControlProps}
            className={formControlProps.className}
         >
            {labelText !== undefined ? (
               <InputLabelRoot htmlFor={id} {...labelProps}>
                  {labelText}
               </InputLabelRoot>
            ) : null}
            <InputRoot
               // classes={{
               //    root: marginTop,
               //    disabled: styles.disabled,
               //    underline: underlineClasses,
               // }}
               id={id}
               {...inputProps}
               inputProps={newInputProps}
            />
            {error ? <ClearIconRoot /> : success ? <CheckIconRoot /> : null}
         </FormControlRoot>
      </ThemeProvider>
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
