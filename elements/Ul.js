import glamorous from 'glamorous'
import { space, width, display, fontSize, lineHeight, color, borders, borderRadius } from 'styled-system'

const Ul = glamorous.ul(space, width, display, fontSize, lineHeight, color, borders, borderRadius, {
  boxSizing: 'border-box',
})

Ul.defaultProps = {
  ml: 0,
  pt: 0
}

export default Ul
