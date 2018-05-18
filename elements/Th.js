import glamorous from 'glamorous'
import { space, width, fontSize, fontWeight, textAlign, color, borders } from 'styled-system'

const Th = glamorous.td(space, width, fontSize, fontWeight, textAlign, color, borders, {

})

Th.defaultProps = {
  fontWeight: 'bold'
}

export default Th
