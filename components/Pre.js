import glamorous from 'glamorous'
import { space, width, fontSize, color } from 'styled-system'

const Pre = glamorous.pre(space, width, fontSize, color, {
  boxSizing: 'border-box',
  fontFamily: 'monospace, monospace',
})

Pre.defaultProps = {
  fontSize: 2
}

export default Pre
