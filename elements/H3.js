import glamorous from 'glamorous'
import { space, display, width, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders } from 'styled-system'

const H3 = glamorous.h3(space, display, width, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders, {
  boxSizing: 'border-box'
})

H3.defaultProps = {

}

export default H3
