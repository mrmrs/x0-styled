import glamorous from 'glamorous'
import { space, display, width, fontSize, fontWeight, lineHeight, textAlign,  color } from 'styled-system'

const P = glamorous.p(space, display, width, fontSize, fontWeight, lineHeight, textAlign, color, {
  boxSizing: 'border-box',
  maxWidth: '34em'
})

P.defaultProps = {

}

export default P
