import glamorous from 'glamorous'
import { space, display, width, fontSize, color, borders, borderColor, borderWidth, borderRadius } from 'styled-system'

const Footer = glamorous.footer(space, display, width, fontSize, color, borders, borderColor, borderWidth, borderRadius, {
  boxSizing: 'border-box'
})

Footer.defaultProps = {

}

export default Footer
