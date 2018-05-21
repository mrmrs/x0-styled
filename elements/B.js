import glamorous from 'glamorous'
import { space, width, fontSize, fontWeight, lineHeight, color } from 'styled-system'

const B = glamorous.b(space, width, fontSize, fontWeight, lineHeight, color,  {

})

B.defaultProps = {
  fontWeight: 'bolder'
}

export default B
