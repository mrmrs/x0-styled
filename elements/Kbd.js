import glamorous from 'glamorous'
import { space, width, fontSize, color, borders, borderColor, borderWidth, borderRadius } from 'styled-system'

const Kbd = glamorous.code(space, width, fontSize, color, borders, borderColor, borderWidth, borderRadius, {
  boxSizing: 'border-box',
  fontFamily: 'monospace, monospace',
})

Kbd.defaultProps = {
  fontSize: 2
}

export default Kbd
