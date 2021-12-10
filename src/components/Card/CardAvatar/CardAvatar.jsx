// import MuiCardMedia from '@mui/material/CardMedia'
// import MuiCardHeader from '@mui/material/CardHeader'
// import { styled, ThemeProvider } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import PropTypes from 'prop-types'
// import Avatar from '@mui/material/Avatar'
// import customCardAvatarTheme from './customCardAvatarTheme'
import cardAvatarStyle from './cardAvatarStyles'
// import styles from './cardAvatarStyles'

const useStyles = makeStyles(cardAvatarStyle)

// const CardMediaRoot = styled(MuiCardMedia, {
//    shouldForwardProp: (prop) => prop !== 'profile' && prop !== 'plain',
//    overridesResolver: (props, styl) => [styl.root],
//    // eslint-disable-next-line no-unused-vars
// })(({ theme, profile, plain }) => ({
//    // ...(profile && theme.cardAvatarProfile),
//    // ...(plain && theme.cardAvatarPlain),
//    // ...theme.cardAvatar,
// }))
// // eslint-disable-next-line no-unused-vars
// const CardHeaderRoot = styled(MuiCardHeader, {
//    overridesResolver: (props, styl) => [styl.root],
// })(() => ({}))
const CardAvatar = (props) => {
   const classes = useStyles()
   const {
      // children,
      className,
      plain,
      component,
      alt,
      image,
      profile,
      ...rest
   } = props

   const cardAvatarClasses = `${classes.cardAvatar} 
      ${profile ? classes.cardAvatarProfile : ''} 
      ${plain ? classes.cardAvatarPlain : ''} 
      ${className !== undefined ? className : ''} `
   return (
      <div className={cardAvatarClasses} {...rest}>
         {children}
      </div>
      // <ThemeProvider theme={customCardAvatarTheme}>
      //    {profile ? (
      //       <CardMediaRoot
      //          className={className}
      //          plain={plain}
      //          profile={profile}
      //          {...rest}
      //          alt={alt}
      //          image={image}
      //          component={component}
      //       />
      //    ) : (
      //       <div />
      //    )}
      // </ThemeProvider>
   )
}

CardAvatar.propTypes = {
   // children: PropTypes.node.isRequired,
   className: PropTypes.string,
   alt: PropTypes.string,
   component: PropTypes.oneOf(['img']).isRequired,
   image: PropTypes.string,
   profile: PropTypes.bool,
   plain: PropTypes.bool,
}
export default CardAvatar
