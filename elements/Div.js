import glamorous from 'glamorous'
import { space, width, display, fontSize, textAlign, color, borders, borderColor, borderWidth, borderRadius } from 'styled-system'

const Div = glamorous.div(space, width, display, fontSize, color, textAlign, borders, borderColor, borderWidth, borderRadius, {
  boxSizing: 'border-box'
})

Div.defaultProps = {
  w: 1
}

export default Div
