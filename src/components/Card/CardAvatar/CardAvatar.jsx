import MuiCardMedia from '@mui/material/CardMedia'
import MuiCardHeader from '@mui/material/CardHeader'
import { styled, ThemeProvider } from '@mui/material/styles'
import PropTypes from 'prop-types'
// import Avatar from '@mui/material/Avatar'
import customCardAvatarTheme from './customCardAvatarTheme'
// import styles from './cardAvatarStyles'

const CardMediaRoot = styled(MuiCardMedia, {
   shouldForwardProp: (prop) => prop !== 'profile' && prop !== 'plain',
   overridesResolver: (props, styl) => [styl.root],
   // eslint-disable-next-line no-unused-vars
})(({ theme, profile, plain }) => ({
   // ...(profile && theme.cardAvatarProfile),
   // ...(plain && theme.cardAvatarPlain),
   // ...theme.cardAvatar,
}))
// eslint-disable-next-line no-unused-vars
const CardHeaderRoot = styled(MuiCardHeader, {
   overridesResolver: (props, styl) => [styl.root],
})(() => ({}))
const CardAvatar = (props) => {
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
   return (
      <ThemeProvider theme={customCardAvatarTheme}>
         {profile ? (
            <CardMediaRoot
               className={className}
               plain={plain}
               profile={profile}
               {...rest}
               alt={alt}
               image={image}
               component={component}
            />
         ) : (
            <div />
         )}
      </ThemeProvider>
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
