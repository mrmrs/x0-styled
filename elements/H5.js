import glamorous from 'glamorous'
import { space, width, fontSize, fontWeight, lineHeight, color, borders } from 'styled-system'

const H5 = glamorous.h5(space, width, fontSize, fontWeight, lineHeight, color, borders, {
  boxSizing: 'border-box'
})

H5.defaultProps = {

}

export default H5
