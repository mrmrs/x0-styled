import glamorous from 'glamorous'
import { space, width, fontSize, fontWeight, lineHeight, color, borders } from 'styled-system'

const H3 = glamorous.h3(space, width, fontSize, fontWeight, lineHeight, color, borders, {
  boxSizing: 'border-box'
})

H3.defaultProps = {

}

export default H3
