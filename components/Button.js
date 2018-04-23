import glamorous from 'glamorous'
import theme from '../theme'
import { space, width, fontSize, fontWeight, lineHeight, color, borders, borderRadius } from 'styled-system'

const Button = glamorous.button(space, width, fontSize, fontWeight, lineHeight, color, borders, borderRadius, {
  boxSizing: 'border-box',
  overflow: 'visible',
  textTransform: 'none',
  fontFamily: 'inherit',
})

Button.defaultProps = {
  m: 0,
}

export default Button
