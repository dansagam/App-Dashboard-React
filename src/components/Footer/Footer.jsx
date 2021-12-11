import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
// import { styled, ThemeProvider } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
// import footerTheme from './footerTheme'
import footerStyle from './footerStyles'

const useStyles = makeStyles(footerStyle)

const Footer = () => {
   const classes = useStyles()
   return (
      <footer className={classes.footer}>
         <div className={classes.container}>
            <div className={classes.left}>
               <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                     <a href="#home" className={classes.block}>
                        Home
                     </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                     <a href="#company" className={classes.block}>
                        Company
                     </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                     <a href="#portfolio" className={classes.block}>
                        Portfolio
                     </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                     <a href="#blog" className={classes.block}>
                        Blog
                     </a>
                  </ListItem>
               </List>
            </div>
            <p className={classes.right}>
               <span>
                  &copy; {1900 + new Date().getYear()}{' '}
                  <a
                     href="https://www.creative-tim.com?ref=mdr-footer"
                     target="_blank"
                     className={classes.a}
                     rel="noreferrer"
                  >
                     Peonet
                  </a>
                  , nothing
               </span>
            </p>
         </div>
      </footer>
   )
}

export default Footer

// const FooterRoot = styled('footer', {
//    shouldForwardProp: (prop) =>
//       prop !== 'color' && prop !== 'variant' && prop !== 'sx',
//    name: 'MyFooterComponent',
//    slot: 'Root',
//    overridesResolver: (props, style) => [style.root],
// })(({ theme }) => ({
//    padding: theme.spacing(1),
// }))
// const DivContainerRoot = styled('div', {
//    shouldForwardProp: (prop) =>
//       prop !== 'color' && prop !== 'variant' && prop !== 'sx',
//    name: 'MyDivContainer',
//    slot: 'Root',
//    overridesResolver: (props, style) => [style.root],
// })(({ theme }) => ({
//    padding: theme.spacing(1),
// }))
// const DivLeftRoot = styled('div', {
//    shouldForwardProp: (prop) =>
//       prop !== 'color' && prop !== 'variant' && prop !== 'sx',
//    name: 'MyDivLeftComponent',
//    slot: 'Root',
//    overridesResolver: (props, style) => [style.root],
// })(({ theme }) => ({
//    padding: theme.spacing(1),
// }))
// const ALinkRoot = styled('a', {
//    shouldForwardProp: (prop) =>
//       prop !== 'color' && prop !== 'variant' && prop !== 'sx',
//    name: 'MyALinkComponent',
//    slot: 'Root',
//    overridesResolver: (props, style) => [
//       style.root,
//       props.block && style.block,
//    ],
// })(({ theme }) => ({
//    padding: theme.spacing(1),
// }))
// const ParagrapghRoot = styled('a', {
//    shouldForwardProp: (prop) =>
//       prop !== 'color' && prop !== 'variant' && prop !== 'sx',
//    name: 'MyALinkComponent',
//    slot: 'Root',
//    overridesResolver: (props, style) => [
//       style.root,
//       props.block && style.block,
//    ],
// })(({ theme }) => ({
//    padding: theme.spacing(1),
// }))
// <ThemeProvider theme={footerTheme}>
//    <FooterRoot>
//       <DivContainerRoot>
//          <DivLeftRoot>
//             <List>
//                <ListItem>
//                   <ALinkRoot block="true" href="#home">
//                      Home
//                   </ALinkRoot>
//                </ListItem>
//                <ListItem>
//                   <ALinkRoot block="true" href="#company">
//                      Company
//                   </ALinkRoot>
//                </ListItem>
//                <ListItem>
//                   <ALinkRoot block="true" href="#portfolio">
//                      Portfolio
//                   </ALinkRoot>
//                </ListItem>
//                <ListItem>
//                   <ALinkRoot block="true" href="#blog">
//                      Blog
//                   </ALinkRoot>
//                </ListItem>
//             </List>
//          </DivLeftRoot>
//          <ParagrapghRoot>
//             <span>
//                &copy; {1900 + new Date().getYear()}{' '}
//                <ALinkRoot
//                   href="https://www.creative-tim.com?ref=mdr-footer"
//                   target="_blank"
//                >
//                   Peonet
//                </ALinkRoot>
//             </span>
//          </ParagrapghRoot>
//       </DivContainerRoot>
//    </FooterRoot>
// </ThemeProvider>
