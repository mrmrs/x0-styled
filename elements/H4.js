import glamorous from 'glamorous'
import { space, display, width, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders } from 'styled-system'

const H4 = glamorous.h4(space, display, width, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders, {
  boxSizing: 'border-box'
})

H4.defaultProps = {

}

export default H4
