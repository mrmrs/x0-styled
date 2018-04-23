import glamorous from 'glamorous'
import { space, width, fontSize, borders, borderRadius, color } from 'styled-system'

const Input = glamorous.input(space, width, fontSize, color, borders, borderRadius, {
  overflow: 'visible',
})

Input.defaultProps = {

}

export default Input
