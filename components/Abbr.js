import glamorous from 'glamorous'
import { space, fontSize, fontWeight, color } from 'styled-system'

const Abbr = glamorous.abbr(space, fontSize, fontWeight, color,  {
  '[title]': {
    borderBottom: 'none',
    textDecoration: 'underline dotted',
  }
})

Abbr.defaultProps = {
  
}

export default Abbr
