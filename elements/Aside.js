import glamorous from 'glamorous'
import { space, width, display, fontSize, color, borders, borderRadius } from 'styled-system'

const Aside = glamorous.aside(space, width, display, fontSize, color, borders, borderRadius, {
  boxSizing: 'border-box'
})

Aside.defaultProps = {

}

export default Aside
