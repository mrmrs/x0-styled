import glamorous from 'glamorous'
import { space, display, width, fontSize, color, borders, borderColor, borderWidth, borderRadius } from 'styled-system'

const Main = glamorous.div(space, display, width, fontSize, color, borders, borderColor, borderWidth, borderRadius, {
  boxSizing: 'border-box'
})

Main.defaultProps = {
  w: 1
}

export default Main
