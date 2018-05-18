import glamorous from 'glamorous'
import { space, width, display, align, justify, wrap, fontSize, color, borders, borderRadius } from 'styled-system'

const Nav = glamorous.nav(space, width, display, align, justify, wrap, fontSize, color, borders, borderRadius, {
  boxSizing: 'border-box'
})

Nav.defaultProps = {

}

export default Nav
