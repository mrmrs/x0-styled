import glamorous from 'glamorous'
import { space, width, fontSize, color, borders, borderRadius } from 'styled-system'

const Samp = glamorous.code(space, width, fontSize, color, borders, borderRadius, {
  boxSizing: 'border-box',
  fontFamily: 'monospace, monospace',
})

Samp.defaultProps = {
  fontSize: 2
}

export default Samp
