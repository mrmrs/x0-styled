import glamorous from 'glamorous'
import { space, display, width, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders } from 'styled-system'

const H1 = glamorous.h1(space, display, width, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders, {
  boxSizing: 'border-box'
})

H1.defaultProps = {

}

export default H1
