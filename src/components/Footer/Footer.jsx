import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { styled, ThemeProvider } from '@mui/material/styles'
import footerTheme from './footerTheme'

const FooterRoot = styled('footer', {
   shouldForwardProp: (prop) =>
      prop !== 'color' && prop !== 'variant' && prop !== 'sx',
   name: 'MyFooterComponent',
   slot: 'Root',
   overridesResolver: (props, style) => [style.root],
})(({ theme }) => ({
   padding: theme.spacing(1),
}))
const DivContainerRoot = styled('div', {
   shouldForwardProp: (prop) =>
      prop !== 'color' && prop !== 'variant' && prop !== 'sx',
   name: 'MyDivContainer',
   slot: 'Root',
   overridesResolver: (props, style) => [style.root],
})(({ theme }) => ({
   padding: theme.spacing(1),
}))
const DivLeftRoot = styled('div', {
   shouldForwardProp: (prop) =>
      prop !== 'color' && prop !== 'variant' && prop !== 'sx',
   name: 'MyDivLeftComponent',
   slot: 'Root',
   overridesResolver: (props, style) => [style.root],
})(({ theme }) => ({
   padding: theme.spacing(1),
}))
const ALinkRoot = styled('a', {
   shouldForwardProp: (prop) =>
      prop !== 'color' && prop !== 'variant' && prop !== 'sx',
   name: 'MyALinkComponent',
   slot: 'Root',
   overridesResolver: (props, style) => [
      style.root,
      props.block && style.block,
   ],
})(({ theme }) => ({
   padding: theme.spacing(1),
}))
const ParagrapghRoot = styled('a', {
   shouldForwardProp: (prop) =>
      prop !== 'color' && prop !== 'variant' && prop !== 'sx',
   name: 'MyALinkComponent',
   slot: 'Root',
   overridesResolver: (props, style) => [
      style.root,
      props.block && style.block,
   ],
})(({ theme }) => ({
   padding: theme.spacing(1),
}))
const Footer = () => (
   <ThemeProvider theme={footerTheme}>
      <FooterRoot>
         <DivContainerRoot>
            <DivLeftRoot>
               <List>
                  <ListItem>
                     <ALinkRoot block="true" href="#home">
                        Home
                     </ALinkRoot>
                  </ListItem>
                  <ListItem>
                     <ALinkRoot block="true" href="#company">
                        Company
                     </ALinkRoot>
                  </ListItem>
                  <ListItem>
                     <ALinkRoot block="true" href="#portfolio">
                        Portfolio
                     </ALinkRoot>
                  </ListItem>
                  <ListItem>
                     <ALinkRoot block="true" href="#blog">
                        Blog
                     </ALinkRoot>
                  </ListItem>
               </List>
            </DivLeftRoot>
            <ParagrapghRoot>
               <span>
                  &copy; {1900 + new Date().getYear()}{' '}
                  <ALinkRoot
                     href="https://www.creative-tim.com?ref=mdr-footer"
                     target="_blank"
                  >
                     Peonet
                  </ALinkRoot>
               </span>
            </ParagrapghRoot>
         </DivContainerRoot>
      </FooterRoot>
   </ThemeProvider>
)

export default Footer
