import glamorous from 'glamorous'
import { 
  space, width, display, 
  flex, alignItems, justifyContent, 
  fontSize, fontWeight, textAlign, lineHeight, 
  color, borders, borderColor, borderWidth, borderRadius, 
  hover, focus, active 
} from 'styled-system'

const A = glamorous.a(
  space, width, display, 
  fontSize, fontWeight, textAlign, lineHeight, 
  color, borders, borderColor, borderWidth, borderRadius, 
  hover, focus, active, {
    boxSizing: 'border-box'
})

A.defaultProps = {
  bg: 'transparent'
}

export default A
