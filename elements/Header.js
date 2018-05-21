import glamorous from 'glamorous'
import { space, display, width, fontSize, fontWeight, textAlign, color, borders, borderColor, borderWidth, borderRadius } from 'styled-system'

const Header = glamorous.header(space, display, width, fontSize, color, borders, borderRadius, {
  boxSizing: 'border-box'
})

Header.defaultProps = {

}

export default Header
