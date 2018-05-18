import glamorous from 'glamorous'
import { space, width, display, fontSize, color, borders, borderRadius } from 'styled-system'

const Ol = glamorous.ol(space, width, display, fontSize, color, borders, borderRadius, {
  boxSizing: 'border-box'
})

Ol.defaultProps = {

}

export default Ol
