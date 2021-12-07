import MuiCardMedia from '@mui/material/CardMedia'
import { styled } from '@mui/material/styles'
import styles from './cardAvatarStyles'

const CardMediaRoot = styled(MuiCardMedia, {
   shouldForwardProp: (prop) => prop !== 'profile' && prop !== 'plain',
})(({ profile, plain }) => ({
   ...(profile && styles.cardAvatarProfile),
   ...(plain && styles.cardAvatarPlain),
   ...styles.cardAvatar,
}))
const CardAvatar = (props) => {
   const {
      children,
      className,
      plain,
      component,
      alt,
      image,
      profile,
      ...rest
   } = props
   return (
      <CardMediaRoot
         className={className}
         plain={plain}
         profile={profile}
         {...rest}
         alt={alt}
         image={image}
         component={component}
      >
         {children}
      </CardMediaRoot>
   )
}

CardAvatar.propTypes = {
   children: PropTypes.node.isRequired,
   className: PropTypes.string,
   alt: PropTypes.string,
   component: PropTypes.oneOf(['img']).isRequired,
   image: PropTypes.string,
   profile: PropTypes.bool,
   plain: PropTypes.bool,
}
export default CardAvatar
