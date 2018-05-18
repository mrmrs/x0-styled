mport glamorous from 'glamorous'
import theme from '../theme'
import { 
  space, width, display,
  fontSize, fontWeight, lineHeight, 
  color, borders, borderRadius, 
  hover, active, focus 
} from 'styled-system'

const Button = glamorous.button(space, width, display, fontSize, fontWeight, lineHeight, color, borders, borderRadius, hover, active, focus, { 
  boxSizing: 'border-box', overflow: 'visible',
  textTransform: 'none',
  fontFamily: 'inherit',
})

Button.defaultProps = {
  m: 0,
}

export default Button
