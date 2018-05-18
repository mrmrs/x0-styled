import glamorous from 'glamorous'
import { space, width, fontSize, borders, borderRadius, color, hover, active, focus } from 'styled-system'

const Input = glamorous.input(space, width, fontSize, color, borders, borderRadius, hover, active, focus, {
  overflow: 'visible',
})

Input.defaultProps = {
  type: 'text'
}

export default Input
