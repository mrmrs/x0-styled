import glamorous from 'glamorous'
import { space, display, width, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders } from 'styled-system'

const H6 = glamorous.h6(space, display, width, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders, {
  boxSizing: 'border-box'
})

H6.defaultProps = {

}

export default H6
