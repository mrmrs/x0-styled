import glamorous from 'glamorous'
import { space, width, fontSize, fontWeight, lineHeight, color, borders } from 'styled-system'

const H6 = glamorous.h6(space, width, fontSize, fontWeight, lineHeight, color, borders, {
  boxSizing: 'border-box'
})

H6.defaultProps = {

}

export default H6
