import glamorous from 'glamorous'
import { 
  space, width, display, 
  flex, align,
  fontSize, fontWeight, textAlign, lineHeight, 
  color, borders, borderRadius, 
  hover, focus, active 
} from 'styled-system'

const A = glamorous.a(
  space, width, display, 
  fontSize, fontWeight, textAlign, lineHeight, 
  color, borders, borderRadius, 
  hover, focus, active, {
    box-sizing: 'border-box'
})

A.defaultProps = {
  bg: 'transparent'
}

export default A
