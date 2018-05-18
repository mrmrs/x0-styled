import glamorous from 'glamorous'
import { space, width, display, fontSize, color, borders, borderRadius } from 'styled-system'

const Article = glamorous.article(space, width, display, fontSize, color, borders, borderRadius, {
  boxSizing: 'border-box'
})

Article.defaultProps = {
  w: 1
}

export default Article
