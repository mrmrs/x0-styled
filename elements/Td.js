import glamorous from 'glamorous'
import { space, width, fontSize, fontWeight, textAlign, color, borders } from 'styled-system'

const verticalAlign = props => ({
  verticalAlign: props.verticalAlign? props.verticalAlign : 'middle'
})

const Td = glamorous.td(space, width, fontSize, fontWeight, textAlign, color, borders, verticalAlign, {

})

Td.defaultProps = {

}

export default Td
