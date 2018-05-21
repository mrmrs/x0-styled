import glamorous from 'glamorous'
import { space, width, fontSize, lineHeight, color, borders, borderColor, borderWidth  } from 'styled-system'

const Li = glamorous.li(space, width, fontSize, lineHeight, color, borders, borderColor, borderWidth, {
  boxSizing: 'border-box'
})

Li.defaultProps = {
  pl: 0
}

export default Li
