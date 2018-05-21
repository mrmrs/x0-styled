import glamorous from 'glamorous'
import { space, display, width, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders } from 'styled-system'

const H2 = glamorous.h2(space, display, width, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders, {
  boxSizing: 'border-box'
})

H2.defaultProps = {

}

export default H2
