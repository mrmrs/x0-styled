import glamorous from 'glamorous'
import { space, display, width, color, borders, borderColor, borderWidth, borderRadius } from 'styled-system'

const Img = glamorous.img(space, display, width, color, borders, borderColor, borderWidth, borderRadius, {
  display: 'block',
  maxWidth: '100%',
  borderStyle: 'none'
})

Img.defaultProps = {
  w: 1
}

export default Img
