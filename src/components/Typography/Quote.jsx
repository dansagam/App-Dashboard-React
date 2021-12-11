import PropTypes from 'prop-types'
import { styled, ThemeProvider } from '@mui/material/styles'
import typographyTheme from './typographyTheme'

const BlockquoteRoot = styled('div')(({ theme }) => ({
   ...theme.defaultFontStyle,
   ...theme.quote,
}))
const SmallRoot = styled('div')(({ theme }) => ({
   ...theme.quoteAuthor,
}))
const ParagraphRoot = styled('div')(({ theme }) => ({
   ...theme.quoteText,
}))
const Quote = (props) => {
   const { text, author } = props
   return (
      <ThemeProvider theme={typographyTheme}>
         <BlockquoteRoot>
            <ParagraphRoot>{text}</ParagraphRoot>
            <SmallRoot>{author}</SmallRoot>
         </BlockquoteRoot>
      </ThemeProvider>
   )
}

Quote.propTypes = {
   text: PropTypes.node,
   author: PropTypes.node,
}
export default Quote
