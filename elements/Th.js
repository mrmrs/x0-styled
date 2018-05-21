import glamorous from 'glamorous'
import { space, width, fontSize, fontWeight, textAlign, color, borders, borderColor, borderWidth } from 'styled-system'

const Th = glamorous.td(space, width, fontSize, fontWeight, textAlign, color, borders, borderColor, borderWidth, {

})

Th.defaultProps = {
  fontWeight: 'bold'
}

export default Th
