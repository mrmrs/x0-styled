import glamorous from 'glamorous'
import { space, width, display, fontSize, color, borders, borderColor, borderWidth, borderRadius } from 'styled-system'

const Section = glamorous.div(space, width, display, fontSize, color, borders, borderColor, borderWidth, borderRadius, {
  boxSizing: 'border-box'
})

Section.defaultProps = {
  w: 1
}

export default Section
