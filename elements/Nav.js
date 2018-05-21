import glamorous from 'glamorous'
import { space, display, width, alignItems, justifyContent, wrap, fontSize, color, borders, borderColor, borderWidth, borderRadius } from 'styled-system'

const Nav = glamorous.nav(space, display, width, alignItems, justifyContent, wrap, fontSize, color, borders, borderColor, borderWidth, borderRadius, {
  boxSizing: 'border-box'
})

Nav.defaultProps = {

}

export default Nav
