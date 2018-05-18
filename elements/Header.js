import glamorous from 'glamorous'
import { space, width, fontSize, fontWeight, textAlign, display, color, borders, borderRadius } from 'styled-system'

const Header = glamorous.header(space, width, fontSize, color, borders, borderRadius, {
  boxSizing: 'border-box'
})

Header.defaultProps = {

}

export default Header
