import glamorous from 'glamorous'
import { space, display, width, fontSize, color, borders, borderColor, borderWidth, borderRadius } from 'styled-system'

const Legend = glamorous.legend(space, display, width, fontSize, color, borders, borderColor, borderWidth, borderRadius, {
  boxSizing: 'border-box'
})

Legend.defaultProps = {

}

export default Legend
