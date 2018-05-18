import glamorous from 'glamorous'
import { space, width, fontSize, fontWeight, textAlign, color, display } from 'styled-system'

const Details = glamorous.details(space, width, fontSize, fontWeight, textAlign, color, display, {

})

Details.defaultProps = {
  display: 'block'
}

export default Details 
