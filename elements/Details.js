import glamorous from 'glamorous'
import { space, display, width, fontSize, fontWeight, textAlign, color } from 'styled-system'

const Details = glamorous.details(space, display, width, fontSize, fontWeight, textAlign, color, {

})

Details.defaultProps = {
  display: 'block'
}

export default Details 
